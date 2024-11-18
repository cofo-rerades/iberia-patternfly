import { PfAccordionPanel } from '@patternfly/elements/pf-accordion/pf-accordion.js';

export class IbAccordionPanel extends PfAccordionPanel {
  constructor() {
    super();
    console.log('IbAccordionPanel initialized');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('IbAccordionPanel connected to the DOM');
  }

  static get observedAttributes() {
    return [...PfAccordionPanel.observedAttributes, 'panel-attribute'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'panel-attribute') {
      console.log(`Panel attribute changed: ${oldValue} -> ${newValue}`);
    }
  }
}

customElements.define('ib-accordion-panel', IbAccordionPanel);
