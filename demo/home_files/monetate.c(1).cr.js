monetate.c.cr({"data": "(function() {\n  function getCookie(cookieName) {\n    let match = document.cookie.match(new RegExp('(^|;|;\\\\s)' + cookieName + '=([^;]+)'));\n    return match ? match[2] : '';\n  }\n\n  function debounce(callbackFn, timeout = 300, settings = {}) {\n    const { context, leading = false, trailing = true } = settings;\n    let timer; let flag;\n\n    return (...args) => {\n      const shouldTrail = leading ? (flag && trailing) : trailing;\n      const shouldLead = !flag && leading;\n\n      shouldLead && callbackFn.apply(context || window, args);\n      flag = true; clearTimeout(timer);\n      timer = setTimeout(() => { shouldTrail && callbackFn.apply(context || window, args); flag = false; }, timeout);\n    };\n  }\n\n  function when(condition, stopAfter = 7000) {\n    return new Promise((resolve, reject) => {\n      let stopByTimeout = false;\n      let value = false;\n\n      window.setTimeout(() => { stopByTimeout = true; }, stopAfter);\n\n      (function _innerWaitFor() {\n        if (stopByTimeout) { reject(Error('when stopped: by timeout')); return; }\n        try { value = condition(); } catch (e) {  }\n        value ? resolve(value) : window.setTimeout(_innerWaitFor, 50);\n      })();\n    });\n  }\n\n  function getScope(namespace) {\n    window.lc = window.lc || {};\n    window.lc.scope = window.lc.scope || {};\n    window.lc.scope[namespace] = window.lc.scope[namespace] || {};\n    return window.lc.scope[namespace];\n  }\n\n  function getEvents(namespace = '') {\n    return {\n      trigger: (name, value) => {\n        const fullName = _prepareName(name, namespace);\n        const eventObj = { name, value, fullName, origin: window.location.href };\n        const namesSplit = fullName.split(':');\n\n        do {\n          window.dispatchEvent(new CustomEvent(namesSplit.join(':'), { detail: eventObj }));\n          namesSplit.pop();\n        } while (namesSplit.length);\n\n        return eventObj;\n      },\n      on: (names, handler, options) => {\n        _prepareNames(_toArray$1(names), namespace).forEach(name => {\n          window.addEventListener(name, (ev) => {\n            handler(ev.detail.value, ev.detail);\n          }, options || {});\n        });\n      }\n    };\n  }\n\n  function _prepareName(name, namespace) {\n    return ['lc', namespace, name].filter(Boolean).join(':');\n  }\n\n  function _prepareNames(names, namespace) {\n    return names.map(name => _prepareName(name, namespace));\n  }\n\n  function _toArray$1(item) {\n    return (Array.isArray(item) ? item : [item]).filter(Boolean);\n  }\n\n  const CAMPAIGN_EVENTS = {\n    CAMPAIGN_REQUESTED_LOCALLY: 'campaign:requested:locally',\n    CAMPAIGN_REQUESTED: 'campaign:requested',\n    CAMPAIGN_FAILED_LOADING: 'campaign:failed:loading',\n    CAMPAIGN_FAILED_REGISTRATION: 'campaign:failed:registration',\n    CAMPAIGN_VARIANT_CALLED: 'campaign:variant:called',\n    CAMPAIGN_VARIANT_REVOKED: 'campaign:variant:revoked',\n    CAMPAIGN_REGISTERED: 'campaign:registered',\n    CAMPAIGN_ABORTED: 'campaign:aborted'\n  };\n\n  const CAMPAIGN_STATUSES = {\n    PENDING: 'pending',\n    RUNNING: 'running',\n    REVOKED: 'revoked',\n    ABORTED: 'aborted',\n    EXCLUDED: 'excluded',\n    FAILED: 'failed',\n    LOADING: 'loading'\n  };\n\n  function registerAndLaunchCampaign(settings = {}) {\n    const { CAMPAIGN_ID, register, data } = settings;\n\n    const scope = getScope(CAMPAIGN_ID);\n    const events = getEvents(CAMPAIGN_ID);\n\n    if (!scope.loadedOnceForPageFlag) {\n      scope.loadedOnceForPageFlag = true;\n      scope.status = CAMPAIGN_STATUSES.LOADING;\n\n      register().then(() => {\n        scope.status = CAMPAIGN_STATUSES.RUNNING;\n        events.trigger(CAMPAIGN_EVENTS.CAMPAIGN_REGISTERED);\n        events.trigger(CAMPAIGN_EVENTS.CAMPAIGN_VARIANT_CALLED, data);\n      }).catch(() => {\n        scope.status = CAMPAIGN_STATUSES.FAILED;\n        events.trigger(CAMPAIGN_EVENTS.CAMPAIGN_FAILED_REGISTRATION);\n      });\n    } else {\n      scope.status = CAMPAIGN_STATUSES.RUNNING;\n      events.trigger(CAMPAIGN_EVENTS.CAMPAIGN_VARIANT_CALLED, data);\n    }\n  }\n\n  function revokeVariantGeneric(settings = {}) {\n    const { campaignID, reason, logger } = settings;\n    const events = getEvents(campaignID);\n    const scope = getScope(campaignID);\n\n    if (scope.status === CAMPAIGN_STATUSES.RUNNING) {\n      scope.status = CAMPAIGN_STATUSES.REVOKED;\n      events.trigger(CAMPAIGN_EVENTS.CAMPAIGN_VARIANT_REVOKED);\n      reason && logger && logger.info('[Variant revoked]: ', reason);\n    }\n  }\n\n  class CampaignRegistrator {\n    constructor({ name, register }) {\n      const cache = new Map();\n\n      this.name = name;\n      this.register = new Proxy(register, {\n        apply: (target, thisArg, [ settings ]) => {\n          const { variantName, campaignName, logger, once = true } = settings;\n          if (once && cache.has(campaignName)) return cache.get(campaignName);\n\n          const promised = new Promise((resolve, reject) => {\n            if (!variantName || !campaignName) throw Error('missing variantName or campaignName');\n            target.apply(thisArg, [ settings ]).then(resolve).catch(reject);\n          }).then(res => {\n            logger && logger.ok('[p]Campaign registered', { registrator: name, variantName, campaignName });\n            return res;\n          }).catch(error => {\n            logger && logger.error('[p]Campaign registration failed', { registrator: name, variantName, campaignName, error: error.message });\n            return Promise.reject(error);\n          });\n\n          cache.set(campaignName, promised);\n          return promised;\n        },\n      });\n    }\n  }\n\n  function isInIframe(base = window) {\n    try {\n      return base.self !== base.parent;\n    } catch (e) {\n      return true;\n    }\n  }\n\n  function getLogger(prefix, cookieName, cookieValue) {\n    const prefixes = _toArray(prefix);\n    const result = getLoggerObject({ prefixes, cookieName });\n    result.debug = getLoggerObject({\n      prefixes: [...prefixes, 'debug'], cookieName, cookieValue,\n      style: 'background-color: #E0E0E0; display: inline-block; padding: 2px 0 2px 0; border-radius: 2px;'\n    });\n\n    return result;\n  }\n\n  function getLoggerObject(settings) {\n    const defaultType = 'info';\n    const typesMap = {\n      info: 'blue',\n      log: 'blue',\n      ok: 'green',\n      error: 'crimson',\n      warn: '#f9a66d'\n    };\n\n    return Object.keys(typesMap).reduce(function(prev, curr) {\n      prev[curr] = getLoggingMethod({ ...settings, color: typesMap[curr] });\n      return prev;\n    }, getLoggingMethod({ ...settings, color: typesMap[defaultType] }));\n  }\n\n  function getLoggingMethod(settings) {\n    const CONSOLE_METHOD = 'info';\n\n    return function () {\n      if (!_isEnabled(settings)) return;\n\n      const iframePrefix = isInIframe() ? 'iframe' : '';\n      const prefixes = [iframePrefix, ...settings.prefixes].filter(Boolean);\n      const args = [];\n\n      [...arguments].forEach(arg => {\n        if (typeof arg === 'string' && arg.startsWith('[p]')) {\n          prefixes.push(arg.slice(3));\n        } else {\n          args.push(arg);\n        }\n      });\n\n      if (window.console && typeof window.console[CONSOLE_METHOD] === 'function') {\n        window.console[CONSOLE_METHOD](\n          `%c${prefixes.map(n => `[${n}]`).join('')}:`,\n          `color: ${settings.color}; ${settings.style || ''}`,\n          ...args\n        );\n      }\n    };\n  }\n\n  function _isEnabled({ cookieName, cookieValue = '' }) {\n    const currentCookieValue = getCookie(cookieName);\n\n    if (cookieValue === '') return currentCookieValue;\n    return (currentCookieValue === cookieValue.toString());\n  }\n\n  function _toArray(item) {\n    return (Array.isArray(item) ? item : [item]).filter(Boolean);\n  }\n\n  function initWatcher(initPeriodicChecks) {\n    const allCheckers = [];\n    initPeriodicChecks((data) => {\n      allCheckers.forEach(updateResults => updateResults(data));\n    });\n\n    return {\n      addChecker: function({ skipImmediateCheck, checkerFn, onIn, onOut, onAllOut, onTrue, onFalse, timeout }) {\n        let currentMap = new Map();\n        let currentBooleanStatus = false;\n\n        skipImmediateCheck ? updateResults({ isExistingCheck: true, skipCallbacks: true}) : updateResults({ isExistingCheck: true });\n        allCheckers.push(\n          typeof timeout === 'undefined' ?\n            updateResults :\n            (data) => setTimeout(() => updateResults(data), timeout)\n        );\n\n        function updateResults(options = {}) {\n          const { isExistingCheck, skipCallbacks } = options;\n          const checksUpdate = getChecksUpdate();\n\n          currentMap = checksUpdate.newMap;\n          if (typeof checksUpdate.newBooleanStatus !== 'undefined') {\n            currentBooleanStatus = checksUpdate.newBooleanStatus;\n          }\n\n          !skipCallbacks && runCallbacks(checksUpdate, isExistingCheck || false);\n        }\n\n        function getChecksUpdate() {\n          const checkResult = checkerFn();\n\n          if (checkResult instanceof NodeList || Array.isArray(checkResult)) {\n            let checkResultMap = new Map(Array.from(checkResult).map(node => [ node ]));\n            return { ...getBooleanUpdate(checkResult), ...getMapUpdate(checkResultMap), checkResult };\n          }\n\n          if (checkResult instanceof Map) {\n            return { ...getBooleanUpdate(checkResult), ...getMapUpdate(checkResult), checkResult };\n          }\n\n          return { ...getBooleanUpdate(checkResult), ...getMapUpdate(new Map()), checkResult };\n        }\n\n        function getMapUpdate(checkResultMap) {\n          const newMap = checkResultMap;\n          const inList = [];\n          const outList = [];\n\n          newMap.forEach((value, node) => {\n            if (!currentMap.has(node) || currentMap.get(node) !== value) {\n              inList.push(node);\n            }\n          });\n          currentMap.forEach((value, node) => {\n            if (!newMap.has(node) || newMap.get(node) !== value) {\n              outList.push(node);\n            }\n          });\n\n          return { newMap, inList, outList };\n        }\n\n        function getBooleanUpdate(checkResult) {\n          const newBooleanStatus = Boolean(checkResult);\n\n          if (newBooleanStatus !== currentBooleanStatus) {\n            return { newBooleanStatus };\n          }\n\n          return {};\n        }\n\n        function runCallbacks({ inList, outList, newMap, newBooleanStatus, checkResult }, isExistingCheck) {\n          if (inList.length) {\n            try { onIn && onIn(inList, isExistingCheck); } catch (e) {  }\n          }\n\n          if (outList.length) {\n            try { onOut && onOut(outList); } catch (e) {  }\n\n            if (!newMap.size) {\n              try { onAllOut && onAllOut(outList); } catch (e) {  }\n            }\n          }\n\n          if (newBooleanStatus === true) {\n            try { onTrue && onTrue(checkResult); } catch (e) {  }\n          }\n\n          if (newBooleanStatus === false) {\n            try { onFalse && onFalse(); } catch (e) {  }\n          }\n        }\n      }\n    };\n  }\n\n  function getCampaignID(metricName) {\n    const parts = metricName.split('-');\n    return parts.find(part => part.match(/^\\D+\\d+$/)) || metricName;\n  }\n\n  function onDomReady(cb) {\n    if (document.readyState === 'loading') {\n      window.addEventListener('DOMContentLoaded', cb);\n    } else {\n      cb();\n    }\n  }\n\n  function whenAllQualified({ conditions, data = {}, logger }) {\n    const conditionsPromised = [];\n    const failureReasons = [];\n\n    conditions.forEach(conditionFn => {\n      const conditionName = conditionFn.name;\n      const saveReason = () => failureReasons.push(conditionName);\n\n      try {\n        const result = conditionFn(data);\n\n        if (typeof result.then !== 'function') {\n          conditionsPromised.push(new Promise((resolve, reject) => {\n            result ? resolve(result) : (saveReason() && reject(conditionName));\n          }));\n        } else {\n          conditionsPromised.push(new Promise((resolve, reject) => {\n            result\n              .then(val => { val ? resolve(val) : (saveReason() && reject(conditionName)); })\n              .catch(() => { saveReason() && reject(conditionName); });\n          }));\n        }\n      } catch (e) {\n        saveReason() && conditionsPromised.push(Promise.reject(conditionName));\n      }\n    });\n\n    setTimeout(() => {\n      Promise.allSettled(conditionsPromised).then(results => {\n        const failedConditions = results.map(result => (result.status === 'rejected' && result.reason)).filter(Boolean);\n        failedConditions.length > 1 && logger && logger.debug.info('[p]unqualified', 'All failed:', failedConditions);\n      });\n    }, 0);\n\n    return Promise.all(conditionsPromised).catch((reason) => {\n      logger && logger.debug.info('[p]unqualified', 'First failed:', [reason]);\n      return Promise.reject(reason);\n    });\n  }\n\n  function getIberiaCampaignRegistrator() {\n    return new CampaignRegistrator({\n      name: 'IBERIA custom registrator',\n      register: ({ variantName, campaignName }) => {\n        return new Promise((resolve, reject) => {\n          try {\n            wait4MNTTGF()\n              .then(\n                () => processVariant(resolve, reject),\n                () => { falloMNTTGFLoad(); reject(Error('MNTTGF did not arrive')); }\n              );\n          } catch (err) {\n            log2Con(err.toString(), 'error');\n            reject(err);\n          }\n        });\n\n        function processVariant(resolve, reject) {\n          checkPageReady()\n            .then(() => {\n              log2Con('OK - Rendered', 'warning');\n              log2GTM();\n              resolve();\n              log2Con('Fin de la variante', 'info');\n            })\n            .catch(err => {\n              log2Con('Error!!! ' + err.toString(), 'error');\n              reject(err);\n            });\n        }\n\n        function wait4MNTTGF() {\n          return new Promise(function(resolve, reject) {\n            console.debug(new Date().toLocaleString('es-ES', {timeZoneName: 'short'}) + ' - [' + campaignName + '|' + variantName + '] - waiting 4 MNTTGF to load...');\n\n            setTimeout(() => {\n              let intervalMNTTGF;\n              let timeoutMGTTGF;\n\n              intervalMNTTGF = setInterval(function() {\n                if (window.mnttGF) {\n                  log2Con('MNTTGF running!! :)', 'info');\n                  clearInterval(intervalMNTTGF);\n                  clearTimeout(timeoutMGTTGF);\n                  resolve();\n                } else if (window.mnttGF === 'locked') {\n                  log2Con('ATTENTION!!!! MNTTGF LOCKED!!!!!!!!!!!!!!!!!!!!!!!!! :(', 'warning');\n                  clearInterval(intervalMNTTGF);\n                  clearTimeout(timeoutMGTTGF);\n                  resolve();\n                } else if (window.mnttGF === 'loading') {\n                  log2Con('loading MNTTGF... :|', 'info');\n                }\n              }, 100);\n\n              timeoutMGTTGF = setTimeout(() => {\n                clearInterval(intervalMNTTGF);\n                reject();\n              }, 10000);\n            }, 0);\n          });\n        }\n\n        function falloMNTTGFLoad() {\n          const timestamp = new Date().toLocaleString('es-ES', {timeZoneName: 'short'});\n          const texto = 'MNTTGF TIMEOUT!!!: No se ha cargado la experiencia MONETATE GLOBAL FUNCTIONS :(';\n          const aviso = timestamp + ' [' + campaignName + '|' + variantName + ']:--> ' + texto;\n\n          console.error(aviso);\n\n          const avisoHTML = '<div class=\"mnttgf_error\">' + timestamp + ': ' + texto + '</div>';\n\n          if (!document.getElementById('MNTT_LOGS')) {\n            const output = '<div data-nosnippet id=\"MNTT_LOGS\" class=\"mnttgf_logs\" style=\"display: none;\"></div>';\n            document.querySelector('body').insertAdjacentHTML('beforeend', output);\n          }\n\n          const idText = (campaignName + '_' + variantName).trim();\n\n          if (!document.getElementById(idText)) {\n            const output = '<div id=\"' + idText + '\" class=\"mnttgf_logs\" style=\"display: none;\">Monetate log: [' + campaignName + '][' + variantName + '] </div>';\n            document.getElementById('MNTT_LOGS').insertAdjacentHTML('beforeend', output);\n          }\n\n          document.getElementById(idText).insertAdjacentHTML('beforeend', avisoHTML);\n        }\n\n        function checkPageReady(pageCondition = function() { return true; }) {\n          return window.mnttCheckPageReady(campaignName, variantName, pageCondition);\n        }\n\n        function log2Con(texto, criticidad = 'info') {\n          window.mnttLog2Con(campaignName, variantName, texto, criticidad);\n        }\n\n        function log2GTM(test = campaignName, action = variantName) {\n          window.mnttLog2GTM(test, action);\n        }\n      }\n    });\n  }\n\n  const sendMetric = debounce((name, options = {}) => {\n    const { logger } = options;\n\n    try {\n      window.mnttLog2GTM(getCampaignID(name), name);\n      logger && logger.ok('Metric sent: ', name);\n    } catch (e) {\n      logger && logger.error('Failed to send metric:', name);\n    }\n  }, 200, { leading: true, trailing: false });\n\n  function onNodesAppear(options) {\n    onDomReady(() => {\n      const mutationsTarget = getMutationsTarget();\n      if (!mutationsTarget) return;\n\n      const watcher = initWatcher(check => {\n        const observer = new MutationObserver(check);\n        observer.observe(mutationsTarget, { subtree: true, childList: true });\n      });\n\n      watcher && watcher.addChecker(options);\n    });\n  }\n\n  function getMutationsTarget() {\n    return document.querySelector('body');\n  }\n\n  function getSelectedInsurance() {\n    return getBookingData('insuranceSelected');\n  }\n\n  function getSelectedTripInfo() {\n    return getBookingData('selectedTripInfo');\n  }\n\n  function getEuropeCityCodes() {\n    try {\n      const cities = getBookingData('destinationCitiesList');\n      const europeCities = cities.filter(city => city.timezone.includes('Europe'));\n\n      return europeCities.map(city => city.code);\n    } catch (e) { return null; }\n  }\n\n  function getBookingData(key) {\n    const STORAGE_PREFIX = 'ib-booking-app';\n    const dataString = sessionStorage.getItem(`${STORAGE_PREFIX}.${key}`);\n    try { return JSON.parse(dataString); } catch (e) { return null; }\n  }\n\n  function getLanguage() {\n    return window?.datalayer_general?.idioma;\n  }\n\n  function getMarket() {\n    return window?.datalayer_general?.mercado;\n  }\n\n  function isBookingApp() {\n    return location.pathname === '/flights/';\n  }\n\n  const CAMPAIGN_ID = 'iberia317';\n  const CAMPAIGN_PREFIX = 'lc-iberia317';\n  const CAMPAIGN_FULL_NAME = 'lc-iberia317-pp-on-payment';\n\n  const campaignEvents = getEvents(CAMPAIGN_ID);\n  const campaignScope = getScope(CAMPAIGN_ID);\n  const HTML = document.documentElement;\n\n  campaignScope.status = CAMPAIGN_STATUSES.PENDING;\n  const registrator = getIberiaCampaignRegistrator();\n\n  function runCampaign(settings = {}) {\n    const { variantName, logger, data } = settings;\n    const register = () => registrator.register({ variantName, logger, campaignName: CAMPAIGN_FULL_NAME});\n    registerAndLaunchCampaign({ CAMPAIGN_ID, register, data });\n  }\n\n  function revokeVariant$1(settings = {}) {\n    const { reason, logger } = settings;\n    revokeVariantGeneric({\n      campaignID: CAMPAIGN_ID,\n      reason, logger\n    });\n  }\n\n  const SCRIPT_NAME = 'variant-v1';\n  const SCRIPT_PREFIX = `${CAMPAIGN_PREFIX}-${SCRIPT_NAME}`;\n  const logger = getLogger(SCRIPT_PREFIX, 'lc-debug', CAMPAIGN_ID);\n\n  function getPriceFromNode(node) {\n    return Number(\n      node.innerText\n        .replace(/,/g, '.')\n        .replace(/\\.(?=\\d+\\.)/g, '')\n        .replace(/[^\\d\\.]/g, '')\n    );\n  }\n\n  const PRICE_MIN_THRESHOLD = 0;\n  const PRICE_MAX_THRESHOLD = 2000;\n\n  let baseQualifyingConditions = [\n    isBookingApp,\n    isLangAndMarketValid\n  ];\n\n  let otherQualifyingConditions = [\n    ...baseQualifyingConditions,\n    notDepartingIn24Hours,\n    notOneWayOutsideEurope,\n    noInsuranceAdded\n  ];\n\n  function setUpTargeting({ logger, SCRIPT_NAME }) {\n    whenAllQualified({ conditions: baseQualifyingConditions, logger })\n      .then(() => {\n        onNodesAppear({\n\n          checkerFn: getTargetBlocks,\n\n          onIn: (nodes) => {\n            whenAllQualified({ conditions: otherQualifyingConditions, logger })\n              .then(() => runCampaign({ variantName: SCRIPT_NAME, logger, data: nodes }))\n              .catch((message) => revokeVariant$1({ logger, reason: message }));\n          },\n\n          onOut: () => revokeVariant$1({ reason: 'no element(s) left on the page', logger })\n        });\n      })\n      .catch((message) => revokeVariant$1({ logger, reason: message }));\n  }\n\n  function getTargetBlocks() {\n    const mobilePrice = document.querySelector('#pmt-summary-mobile .ib-summary__footer-price');\n    const desktopPrice = document.querySelector('#pmt-summary .ib-summary__footer-price');\n\n    let allPriceNodes = [ mobilePrice, desktopPrice ].filter(Boolean);\n\n    return new Map(\n      allPriceNodes\n        .filter(priceContainer => {\n          const price = getPriceFromNode(priceContainer);\n          return price > PRICE_MIN_THRESHOLD && price < PRICE_MAX_THRESHOLD;\n        })\n        .map(node => [ node, node.innerText.trim() ])\n    );\n  }\n\n  function notDepartingIn24Hours() {\n    const day = 1000 * 60 * 60 * 24;\n    try {\n      const tripsArr = getSelectedTripInfo();\n      const departureDateStr = tripsArr[0].info.departureDateTime;\n      const departureDate = new Date(departureDateStr.replace(/-/g, '/'));\n      const now = new Date();\n\n      return ((departureDate.getTime() - now.getTime()) > day);\n    } catch (e) { return false; }\n  }\n\n  function notOneWayOutsideEurope() {\n    try {\n      const tripsArr = getSelectedTripInfo();\n      const europeCityCodes = getEuropeCityCodes();\n      if (!europeCityCodes) return false;\n\n      const isOneWay = (tripsArr.length === 1);\n      const destinationCityCode = tripsArr[0].destination;\n\n      const isOneWayOutsideEurope = (\n        isOneWay && destinationCityCode &&\n      !europeCityCodes.includes(destinationCityCode)\n      );\n\n      return !isOneWayOutsideEurope;\n    } catch (e) { return false; }\n  }\n\n  function noInsuranceAdded() {\n    return !getSelectedInsurance();\n  }\n\n  function isLangAndMarketValid() {\n    return (\n      when(() => getMarket() && getLanguage())\n        .then(() => {\n          const allowedMarketLangPairs = ['gb-en', 'us-en', 'de-de', 'it-it'];\n          const currentPair = `${getMarket().toLowerCase()}-${getLanguage().toLowerCase()}`;\n          return allowedMarketLangPairs.includes(currentPair);\n        })\n    );\n  }\n\n  const WIDGET_CLASS = CAMPAIGN_PREFIX + '-pp-widget';\n  const METRICS = {\n    widgetClicked: CAMPAIGN_PREFIX + '-pp-widget-clicked',\n    sdkLoadFailed: CAMPAIGN_PREFIX + '-pp-sdk-load-failed',\n    sdkExecFailed: CAMPAIGN_PREFIX + '-pp-sdk-exec-failed',\n  };\n\n  function removeWidget(priceContainer) {\n    const existingWidget = getPlaceholder(priceContainer).querySelector(`.${WIDGET_CLASS}`);\n    existingWidget && existingWidget.remove();\n  }\n\n  function createPayPalBlock() {\n    const simplePaypalMsgEl = document.createElement('div');\n    simplePaypalMsgEl.className = WIDGET_CLASS;\n\n    return simplePaypalMsgEl;\n  }\n\n  function showMessage({ price, node, logger }) {\n    when(() => window?.PayPalSDK?.Messages || window?.paypal?.Messages)\n      .then((messagesAPI) => {\n        messagesAPI({\n          amount: price,\n          placement: 'product',\n          buyerCountry: getMarket() || 'GB',\n          style: { layout: 'text', color: 'black', logo: { type: 'inline' }, text: { size: 13 } },\n          onClick: () => { sendMetric(METRICS.widgetClicked, { logger }); },\n          onApply: () => { logger.ok('APPLIED!!!'); },\n          onError: () => { sendMetric(METRICS.sdkExecFailed, { logger }); },\n        }).render(node);\n      })\n      .catch(() => {\n        sendMetric(METRICS.sdkLoadFailed, { logger });\n        logger.error('Failed to load PP SDK');\n      });\n  }\n\n  function insertPaypalScript() {\n    const script = document.createElement('script');\n    const paypalUrl = 'https://www.paypal.com/sdk/js?client-id=AcnTbzF1WjkEJzJGc48CrWdVjfZWYl9mCj3BnU2fr6RQ5vSEvwXSmNk6ogFLSv8l6SUc1xeD6otWHmBN&components=messages';\n\n    script.setAttribute('src', paypalUrl);\n    script.setAttribute('data-namespace', 'PayPalSDK');\n\n    if (!document.querySelector('script[src*=\"https://www.paypal.com/sdk/js\"]')) {\n      document.head.insertAdjacentElement('beforeend', script);\n    }\n  }\n\n  function getPlaceholder(priceContainer) {\n    let footer = priceContainer.closest('footer');\n    return footer;\n  }\n\n  logger('running');\n  init();\n\n  function init() {\n    if (isInIframe()) return;\n    setUpTargeting({ logger, SCRIPT_NAME });\n\n    campaignEvents.on(CAMPAIGN_EVENTS.CAMPAIGN_VARIANT_CALLED, initVariant, { once: true });\n    campaignEvents.on(CAMPAIGN_EVENTS.CAMPAIGN_VARIANT_CALLED, applyVariant);\n    campaignEvents.on(CAMPAIGN_EVENTS.CAMPAIGN_VARIANT_REVOKED, revokeVariant);\n  }\n\n  function applyVariant(priceContainers) {\n    priceContainers.forEach(priceContainer => {\n      removeWidget(priceContainer);\n\n      const node = createPayPalBlock();\n      const price = getPriceFromNode(priceContainer);\n      const placeholder = getPlaceholder(priceContainer);\n      placeholder.appendChild(node);\n\n      showMessage({ price, node, logger });\n    });\n\n    HTML.classList.add(CAMPAIGN_PREFIX);\n    logger.debug.info('Variant applied to:', priceContainers);\n  }\n\n  function revokeVariant() {\n    HTML.classList.remove(CAMPAIGN_PREFIX);\n    logger.debug.info('Variant revoked');\n  }\n\n  function initVariant() {\n    insertPaypalScript();\n    logger.debug.info('Variant inited');\n  }\n})();\n//# sourceURL=url://LeanConvert/iberia317/variant-v1/js.js", "ref": "1123/5212238.js"});