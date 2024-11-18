import {
  PfAccordionHeader,
  PfAccordionHeaderChangeEvent,
} from '@patternfly/elements/pf-accordion/pf-accordion.js';
import type { IbAccordion } from './IbAccordion.js';

export class IbAccordionHeader extends PfAccordionHeader {
  private _boundCustomOnClick: (event: Event) => void;

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
    console.log('IbAccordionHeader connected to the DOM and patched');
  }

  /**
   * Your custom click behavior replacing #onClick
   */
  // eslint-disable-next-line
  private _customOnClick(_event: Event) {
    const expanded = !this.expanded;
    const acc = this.closest('ib-accordion'); // Target your custom accordion
    if (acc) {
      this.dispatchEvent(
        new PfAccordionHeaderChangeEvent(
          expanded,
          this,
          acc as unknown as IbAccordion,
        ),
      );
    }
    console.log('Custom click behavior executed!');
  }

  static get observedAttributes() {
    return [...PfAccordionHeader.observedAttributes, 'header-attribute'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'header-attribute') {
      console.log(`Header attribute changed: ${oldValue} -> ${newValue}`);
    }
  }
}
