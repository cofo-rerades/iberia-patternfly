import { PfAccordionHeader, PfAccordionHeaderChangeEvent, } from '@patternfly/elements/pf-accordion/pf-accordion.js';
export class IbAccordionHeader extends PfAccordionHeader {
    constructor() {
        super();
        this._boundCustomOnClick = this._customOnClick.bind(this);
        console.log('IbAccordionHeader initialized');
    }
    connectedCallback() {
        super.connectedCallback();
        // Remove the default click listener added by PfAccordionHeader
        this.addEventListener('click', this._boundCustomOnClick);
        // @ts-ignore
        this.removeEventListener('click', this['#onClick']);
        // Add your custom click handler
        // eslint-disable-next-line
        this.addEventListener('click', this._boundCustomOnClick);
        // Add custom CSS variables
        const style = new CSSStyleSheet();
        style.replaceSync(`
      #button {
        border-bottom: 1px solid #666;
      }
      #button[aria-expanded='true'] {
        border-bottom: 0px;
      }

      `);
        // Add CSS variables via adoptedStyleSheets
        if (this.shadowRoot) {
            this.shadowRoot.adoptedStyleSheets = [
                ...this.shadowRoot.adoptedStyleSheets,
                style,
            ];
        }
        console.log('IbAccordionHeader connected to the DOM and patched');
    }
    /**
     * Your custom click behavior replacing #onClick
     */
    // eslint-disable-next-line
    _customOnClick(_event) {
        const expanded = !this.expanded;
        const acc = this.closest('ib-accordion'); // Target your custom accordion
        if (acc) {
            this.dispatchEvent(new PfAccordionHeaderChangeEvent(expanded, this, acc));
        }
        console.log('Custom click behavior executed!');
    }
    static get observedAttributes() {
        return [...PfAccordionHeader.observedAttributes, 'header-attribute'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === 'header-attribute') {
            console.log(`Header attribute changed: ${oldValue} -> ${newValue}`);
        }
    }
}
//# sourceMappingURL=IbAccordionHeader.js.map