import { PfAccordionPanel } from '@patternfly/elements/pf-accordion/pf-accordion.js';
export class IbAccordionPanel extends PfAccordionPanel {
    constructor() {
        super();
        console.log('IbAccordionPanel initialized');
    }
    connectedCallback() {
        super.connectedCallback();
        const style = new CSSStyleSheet();
        style.replaceSync(`
      .body {
        border-bottom: 1px solid #666;

      }`);
        // Add CSS variables via adoptedStyleSheets
        if (this.shadowRoot) {
            this.shadowRoot.adoptedStyleSheets = [
                ...this.shadowRoot.adoptedStyleSheets,
                style,
            ];
        }
        console.log('IbAccordionPanel connected to the DOM');
    }
    static get observedAttributes() {
        return [...PfAccordionPanel.observedAttributes, 'panel-attribute'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === 'panel-attribute') {
            console.log(`Panel attribute changed: ${oldValue} -> ${newValue}`);
        }
    }
}
customElements.define('ib-accordion-panel', IbAccordionPanel);
//# sourceMappingURL=IbAccordionPanel.js.map