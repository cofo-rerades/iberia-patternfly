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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'custom-attribute') {
      console.log(`Custom attribute changed: ${oldValue} -> ${newValue}`);
    }
  }
}
