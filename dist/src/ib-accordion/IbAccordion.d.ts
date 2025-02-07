import { PfAccordion } from '@patternfly/elements/pf-accordion/pf-accordion.js';

export declare class IbAccordion extends PfAccordion {
  constructor();

  connectedCallback(): void;

  static get observedAttributes(): string[];

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string,
  ): void;
}
