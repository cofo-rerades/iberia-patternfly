import { PfAccordionHeader } from '@patternfly/elements/pf-accordion/pf-accordion.js';

export declare class IbAccordionHeader extends PfAccordionHeader {
  private _boundCustomOnClick;

  constructor();

  connectedCallback(): void;

  /**
   * Your custom click behavior replacing #onClick
   */
  private _customOnClick;

  static get observedAttributes(): string[];

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string,
  ): void;
}
