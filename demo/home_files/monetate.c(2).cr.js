monetate.c.cr({"data": "(function() {\n  function getCookie(cookieName) {\n    let match = document.cookie.match(new RegExp('(^|;|;\\\\s)' + cookieName + '=([^;]+)'));\n    return match ? match[2] : '';\n  }\n\n  function when(condition, stopAfter = 7000) {\n    return new Promise((resolve, reject) => {\n      let stopByTimeout = false;\n      let value = false;\n\n      window.setTimeout(() => { stopByTimeout = true; }, stopAfter);\n\n      (function _innerWaitFor() {\n        if (stopByTimeout) { reject('when stopped: by timeout'); return; }\n        try { value = condition(); } catch (e) { /* silent */ }\n        value ? resolve(value) : window.setTimeout(_innerWaitFor, 50);\n      })();\n    });\n  }\n\n  function getScope(namespace) {\n    window.lc = window.lc || {};\n    window.lc.scope = window.lc.scope || {};\n    window.lc.scope[namespace] = window.lc.scope[namespace] || {};\n    return window.lc.scope[namespace];\n  }\n\n  function isInIframe(base = window) {\n    try {\n      return base.self !== base.parent;\n    } catch (e) {\n      return true;\n    }\n  }\n\n  function getLogger(namespace, cookieName, cookieValue) {\n    const settings = { namespace, cookieName, cookieValue };\n    const defaultColour = 'blue';\n    const typesMap = {\n      info: 'blue',\n      log: 'blue',\n      ok: 'green',\n      error: 'crimson',\n      warn: '#f9a66d'\n    };\n\n    return Object.keys(typesMap).reduce(function(prev, curr) {\n      prev[curr] = getLoggingMethod(settings, typesMap[curr], false);\n      prev[curr + 'TS'] = getLoggingMethod(settings, typesMap[curr], true);\n      return prev;\n    }, getLoggingMethod(settings, defaultColour, false));\n  }\n\n  function getLoggingMethod(settings, color, timeStampNeeded) {\n    const CONSOLE_METHOD = 'info';\n\n    return function () {\n      if (!isEnabled(settings)) return;\n\n      const timestamp = new Date().toLocaleTimeString('en-GB');\n      const iframeSuffix = isInIframe() ? ' [iframe]' : '';\n      const tsSuffix = timeStampNeeded ? (` [${timestamp}]`) : '';\n      const descriptor = `%c[${settings.namespace}]:${tsSuffix}${iframeSuffix}`;\n\n      if (window.console && typeof window.console[CONSOLE_METHOD] === 'function') {\n        window.console[CONSOLE_METHOD](descriptor, 'color: ' + color, ...arguments);\n      }\n    };\n  }\n\n  function isEnabled({ cookieName, cookieValue = '' }) {\n    const currentCookieValue = getCookie(cookieName);\n\n    if (cookieValue === '') return currentCookieValue;\n    return (currentCookieValue === cookieValue.toString());\n  }\n\n  function initWatcher(initPeriodicChecks) {\n    const allCheckers = [];\n    initPeriodicChecks((data) => {\n      allCheckers.forEach(updateResults => updateResults(data));\n    });\n\n    return {\n      addChecker: function({ skipImmediateCheck, checkerFn, onIn, onOut, onAllOut, onTrue, onFalse, timeout }) {\n        let currentList = [];\n        let currentBooleanStatus = false;\n\n        skipImmediateCheck ? updateResults({ isExistingCheck: true, skipCallbacks: true}) : updateResults({ isExistingCheck: true });\n        allCheckers.push(\n          typeof timeout === 'undefined' ?\n            updateResults :\n            (data) => setTimeout(() => updateResults(data), timeout)\n        );\n\n        function updateResults(options = {}) {\n          const { isExistingCheck, skipCallbacks } = options;\n          const checksUpdate = getChecksUpdate();\n\n          currentList = checksUpdate.newList;\n          if (typeof checksUpdate.newBooleanStatus !== 'undefined') {\n            currentBooleanStatus = checksUpdate.newBooleanStatus;\n          }\n\n          !skipCallbacks && runCallbacks(checksUpdate, isExistingCheck || false);\n        }\n\n        function getChecksUpdate() {\n          const checkResult = checkerFn();\n\n          if (checkResult instanceof NodeList || Array.isArray(checkResult)) {\n            return { ...getBooleanUpdate(checkResult), ...getListUpdate(checkResult), checkResult };\n          }\n\n          return { ...getBooleanUpdate(checkResult), ...getListUpdate([]), checkResult };\n        }\n\n        function getListUpdate(checkResult) {\n          const newList = Array.from(checkResult);\n          const inList = [];\n          const outList = [];\n\n          newList.forEach(element => (!currentList.includes(element) && inList.push(element)));\n          currentList.forEach(element => (!newList.includes(element) && outList.push(element)));\n\n          return { newList, inList, outList };\n        }\n\n        function getBooleanUpdate(checkResult) {\n          const newBooleanStatus = Boolean(checkResult);\n\n          if (newBooleanStatus !== currentBooleanStatus) {\n            return { newBooleanStatus };\n          }\n\n          return {};\n        }\n\n        function runCallbacks({ inList, outList, newList, newBooleanStatus, checkResult }, isExistingCheck) {\n          if (inList.length) {\n            try { onIn && onIn(inList, isExistingCheck); } catch (e) { /* silent */ }\n          }\n\n          if (outList.length) {\n            try { onOut && onOut(outList); } catch (e) { /* silent */ }\n\n            if (!newList.length) {\n              try { onAllOut && onAllOut(outList); } catch (e) { /* silent */ }\n            }\n          }\n\n          if (newBooleanStatus === true) {\n            try { onTrue && onTrue(checkResult); } catch (e) { /* silent */ }\n          }\n\n          if (newBooleanStatus === false) {\n            try { onFalse && onFalse(); } catch (e) { /* silent */ }\n          }\n        }\n      }\n    };\n  }\n\n  /**\n  Checks if the provided conditions are qualified based on the given parameters.\n  @param {Array} conditionsArray - An array of condition functions.\n  @param {any} argsArray - Optional list of parameters that will be passed to the condition functions.\n  @return {Promise} - A promise that resolves if all conditions are met, and otherwise rejects with the function which accepts the callback to pass array of names of all failed conditions.\n*/\n  function whenAllQualified(conditionsArray, ...argsArray) {\n    const conditionsPromised = [];\n    const failedReasons = [];\n    const onAllReasonsSettled = (cb) => Promise.allSettled(conditionsPromised).then(() => cb(failedReasons));\n\n    conditionsArray.forEach(conditionFn => {\n      const saveReason = () => failedReasons.push(conditionFn.name);\n\n      try {\n        const result = conditionFn(...argsArray);\n\n        if (typeof result.then !== 'function') {\n          conditionsPromised.push(new Promise((resolve, reject) => {\n            result ? resolve(result) : (saveReason() && reject(onAllReasonsSettled));\n          }));\n        } else {\n          conditionsPromised.push(new Promise((resolve, reject) => {\n            result\n              .then(val => { val ? resolve(val) : (saveReason() && reject(onAllReasonsSettled)); })\n              .catch(() => { saveReason() && reject(onAllReasonsSettled); });\n          }));\n        }\n      } catch (e) {\n        saveReason() && conditionsPromised.push(Promise.reject(onAllReasonsSettled));\n      }\n    });\n\n    return Promise.all(conditionsPromised);\n  }\n\n  const CAMPAIGN_ID = 'iberia279';\n  const CAMPAIGN_PREFIX = 'lc-iberia279';\n  const CAMPAIGN_FULL_NAME = 'lc-iberia279-baggage-ingagement-on-4plus-days-trips';\n  const campaignScope = getScope(CAMPAIGN_ID);\n  const HTML = document.documentElement;\n\n  // ////\n  //\n  // JS Action template for MNTTGF 2.0 - 6 febrero 2023\n  // Template de acci\u00f3n javascript para utilizar con las MONETATE GLOBAL FUNCTIONS (MNTTGF) basado en promesas de js\n  //\n  // ////\n\n  function registerAndExecuteVariant({ variantName, campaignName, variantFn }) {\n    try {\n      wait4MNTTGF()\n        .then(processVariant, falloMNTTGFLoad);\n    } catch (err) {\n      log2Con(err.toString(), 'error');\n    }\n\n    function processVariant() {\n      checkPageReady()\n        .then(() => {\n          log2Con('OK - Rendered', 'warning');\n          log2GTM();\n          variantFn();\n          log2Con('Fin de la variante', 'info');\n        })\n        .catch(err => {\n          log2Con('Error!!! ' + err.toString(), 'error');\n        });\n    }\n\n    function wait4MNTTGF() {\n      return new Promise(function(resolve, reject) {\n      // eslint-disable-next-line no-console\n        console.debug(new Date().toLocaleString('es-ES', {timeZoneName: 'short'}) + ' - [' + campaignName + '|' + variantName + '] - waiting 4 MNTTGF to load...');\n\n        // Evaluamos si las MNTTGF se han cargado cada 100 milisegundos y si es as\u00ed resolvemos la promesa\n        setTimeout(() => {\n          let intervalMNTTGF;\n          let timeoutMGTTGF;\n\n          intervalMNTTGF = setInterval(function() {\n            if (window.mnttGF) {\n              log2Con('MNTTGF running!! :)', 'info');\n              clearInterval(intervalMNTTGF);\n              clearTimeout(timeoutMGTTGF);\n              resolve();\n            } else if (window.mnttGF === 'locked') {\n              log2Con('ATTENTION!!!! MNTTGF LOCKED!!!!!!!!!!!!!!!!!!!!!!!!! :(', 'warning');\n              clearInterval(intervalMNTTGF);\n              clearTimeout(timeoutMGTTGF);\n              resolve();\n            } else if (window.mnttGF === 'loading') {\n              log2Con('loading MNTTGF... :|', 'info');\n            }\n          }, 100);\n\n          // Si tras 10 segundos no se han cargado las MNTTGF rechazamos la promesa\n          timeoutMGTTGF = setTimeout(() => {\n            clearInterval(intervalMNTTGF);\n            reject();\n          }, 10000);\n        }, 0);\n      });\n    }\n\n    function falloMNTTGFLoad() {\n      const timestamp = new Date().toLocaleString('es-ES', {timeZoneName: 'short'});\n      const texto = 'MNTTGF TIMEOUT!!!: No se ha cargado la experiencia MONETATE GLOBAL FUNCTIONS :(';\n      const aviso = timestamp + ' [' + campaignName + '|' + variantName + ']:--> ' + texto;\n\n      // eslint-disable-next-line no-console\n      console.error(aviso);\n\n      const avisoHTML = '<div class=\"mnttgf_error\">' + timestamp + ': ' + texto + '</div>';\n\n      if (!document.getElementById('MNTT_LOGS')) {\n        const output = '<div data-nosnippet id=\"MNTT_LOGS\" class=\"mnttgf_logs\" style=\"display: none;\"></div>';\n        document.querySelector('body').insertAdjacentHTML('beforeend', output);\n      }\n\n      const idText = (campaignName + '_' + variantName).trim();\n\n      if (!document.getElementById(idText)) {\n        const output = '<div id=\"' + idText + '\" class=\"mnttgf_logs\" style=\"display: none;\">Monetate log: [' + campaignName + '][' + variantName + '] </div>';\n        document.getElementById('MNTT_LOGS').insertAdjacentHTML('beforeend', output);\n      }\n\n      document.getElementById(idText).insertAdjacentHTML('beforeend', avisoHTML);\n    }\n\n    function checkPageReady(pageCondition = function() { return true; }) {\n      return window.mnttCheckPageReady(campaignName, variantName, pageCondition);\n    }\n\n    // function checkConditions(funcionCondicion, conditionDescription = '') {\n    //   return window.mnttCheckConditions(campaignName, variantName, funcionCondicion, conditionDescription);\n    // }\n\n    // function checkTarget(target, currentValue, targetDescription = '') {\n    //   return window.mnttCheckTarget(campaignName, variantName, target, currentValue, targetDescription);\n    // }\n\n    function log2Con(texto, criticidad = 'info') {\n      window.mnttLog2Con(campaignName, variantName, texto, criticidad);\n    }\n\n    // function obj2Con(objeto) {\n    //   window.mnttObj2Con(campaignName, variantName, objeto);\n    // }\n\n    function log2GTM(test = campaignName, action = variantName) {\n      window.mnttLog2GTM(test, action);\n    }\n\n  // function sendEventQM(eventNum, eventValue = '', eventDesc = '') {\n  //   window.mnttSendEventQM(campaignName, variantName, eventNum, eventValue, eventDesc);\n  // }\n  }\n\n  const SCRIPT_NAME = 'variant-v1';\n  const SCRIPT_PREFIX = `${CAMPAIGN_PREFIX}-${SCRIPT_NAME}`;\n  const infoLogger = getLogger(SCRIPT_PREFIX + '-info', 'lc-debug');\n  getLogger(SCRIPT_PREFIX + '-debug', 'lc-debug', CAMPAIGN_ID);\n\n  function registerAndExecute(executeVariant) {\n    registerAndExecuteVariant({\n      variantName: SCRIPT_NAME,\n      campaignName: CAMPAIGN_FULL_NAME,\n      variantFn: () => {\n        executeVariant();\n        infoLogger.ok('variant registered');\n      }\n    });\n  }\n\n  function get228ProcessedBaggageTile() {\n    return document.querySelector('ib-baggages-box .lc-iberia228-wrapper');\n  }\n\n  function isStayingForMoreThan3Days() {\n    const stayString = window?.datalayer_general?.estanciaDestino;\n    if (!stayString) return false;\n\n    return +stayString >= 4;\n  }\n\n  function areAllFaresAreBasic() {\n    const faresMask = /slice\\d+FareFamilyName/;\n    return Object.keys(window.datalayer_general).every(key => {\n      return !key.match(faresMask) || window.datalayer_general[key] === 'Basica';\n    });\n  }\n\n  function onNodesAppear({ checkerFn, onIn, onOut, onAllOut, onTrue, onFalse, logger }) {\n    when(getMutationsTarget)\n      .then((mutationsTarget) => {\n        const mutationsWatcher = initGlobalMutationsWatcher(mutationsTarget);\n        mutationsWatcher && mutationsWatcher.addChecker({ checkerFn, onIn, onOut, onAllOut, onTrue, onFalse });\n      })\n      .catch(e => logger && logger.error(e));\n  }\n\n  function initGlobalMutationsWatcher(mutationsTarget) {\n    return initWatcher(check => {\n      const observer = new MutationObserver(check);\n      observer.observe(mutationsTarget, { subtree: true, childList: true });\n    });\n  }\n\n  function getMutationsTarget() {\n  // return document.querySelector('app-root + main');\n    return document.querySelector('body');\n  }\n\n  function getLanguage() {\n    return window?.datalayer_general?.idioma;\n  }\n\n  // Expected values: es, ca, en, fr, etc\n\n  const copies = {\n    'es': {\n      'rec': 'Recomendado para tu viaje de {{DAYS}} d\u00edas'\n    },\n    'ca': {\n      'rec': 'Recomanat per al teu viatge de {{DAYS}} dies'\n    },\n    'en': {\n      'rec': 'Recommended for your {{DAYS}}-day trip'\n    },\n    'fr': {\n      'rec': 'Recommand\u00e9 pour votre voyage de {{DAYS}} jours'\n    },\n    'it': {\n      'rec': 'Raccomandato per il tuo viaggio di {{DAYS}} giorni.'\n    },\n    'de': {\n      'rec': 'Empfohlen f\u00fcr Ihre {{DAYS}}-t\u00e4gige Reise'\n    },\n    'pt': {\n      'rec': 'Recomendado para sua viagem de {{DAYS}} dias'\n    },\n    'nl': {\n      'rec': 'Aanbevolen voor je reis van {{DAYS}} dagen'\n    },\n    'ru': {\n      'rec': '\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u043f\u043e\u0435\u0437\u0434\u043a\u0438 \u043d\u0430 {{DAYS}} \u0434\u043d.'\n    },\n    'zh': {\n      'rec': '{{DAYS}} \u65e5\u6e38\u63a8\u8350'\n    },\n    'ja': {\n      'rec': '{{DAYS}}\u65e5\u5f8c\u306e\u3054\u65c5\u884c\u3078\u306e\u304a\u3059\u3059\u3081\u4e8b\u9805'\n    }\n  };\n\n  function getCopies() {\n    return copies[getLanguage()] || copies.en;\n  }\n\n  const REC_TILE_CLASS = CAMPAIGN_PREFIX + '-rec-tile';\n\n  infoLogger.info('running');\n  init();\n\n  function init() {\n    onNodesAppear({\n      checkerFn: get228ProcessedBaggageTile,\n      onTrue: () => {\n        whenAllQualified([ isStayingForMoreThan3Days, areAllFaresAreBasic ])\n          .then(() => {\n            if (!campaignScope.registeredFlag) {\n              registerAndExecute(() => {\n                campaignScope.registeredFlag = true;\n                applyVariant();\n              });\n            }\n          })\n          .catch(onAllReasons => {\n            if (typeof onAllReasons === 'function') {\n              onAllReasons(cancelVariant);\n            } else {\n              cancelVariant(onAllReasons);\n            }\n          });\n      },\n      onFalse: () => cancelVariant('Testing element is not on the page')\n    });\n  }\n\n  function applyVariant() {\n    infoLogger('Applied');\n    addYellowTile();\n    HTML.classList.add(CAMPAIGN_PREFIX);\n  }\n\n  function cancelVariant(reason) {\n    infoLogger('Cancelled', reason);\n    HTML.classList.remove(CAMPAIGN_PREFIX);\n  }\n\n  function addYellowTile() {\n    const baggageTileBullets = get228ProcessedBaggageTile();\n    const position = 'beforebegin';\n\n    baggageTileBullets.insertAdjacentElement(position, getTileNode());\n\n    // This is needed to fire default tiles height adjucements\n    setTimeout(() => window.dispatchEvent(new Event('resize')), 0);\n  }\n\n  function getTileNode() {\n    const existingTile = document.querySelector(`.${REC_TILE_CLASS}`);\n    if (existingTile) return existingTile;\n\n    const newTile = document.createElement('div');\n    newTile.className = REC_TILE_CLASS;\n    newTile.innerHTML = getCopies().rec.replace(/{{DAYS}}/, window.datalayer_general.estanciaDestino);\n    return newTile;\n  }\n})();\n//# sourceURL=url://LeanConvert/iberia279/variant-v1/js.js", "ref": "1123/5166754.js"});