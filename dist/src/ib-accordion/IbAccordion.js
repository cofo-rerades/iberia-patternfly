import { PfAccordion } from '@patternfly/elements/pf-accordion/pf-accordion.js';
export class IbAccordion extends PfAccordion {
    constructor() {
        super();
        console.log('IbAccordion initialized');
    }
    connectedCallback() {
        super.connectedCallback();
        console.log('IbAccordion connected to the DOM');
        const style = new CSSStyleSheet();
        style.replaceSync(`
      :host {
        --pf-global--primary-color--100: #991212;
        --pf-global--link--Color:#991212;
        --pf-c-accordion__toggle--expanded-icon--Rotate:180deg;
        --pf-c-accordion__toggle--IconSize:24px;
        --pf-c-accordion--m-display-lg__toggle--FontSize:0.5rem;
        --pf-c-accordion__toggle--expanded--before--BackgroundColor: transparent;
        --pf-c-accordion__panel--content-body--before--BackgroundColor: transparent;

      }`);
        // Add CSS variables via adoptedStyleSheets
        if (this.shadowRoot) {
            this.shadowRoot.adoptedStyleSheets = [
                ...this.shadowRoot.adoptedStyleSheets,
                style,
            ];
        }
    }
    static get observedAttributes() {
        return [...PfAccordion.observedAttributes, 'custom-attribute'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === 'custom-attribute') {
            console.log(`Custom attribute changed: ${oldValue} -> ${newValue}`);
        }
    }
}
//# sourceMappingURL=IbAccordion.js.map