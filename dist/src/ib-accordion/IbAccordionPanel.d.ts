import { PfAccordionPanel } from '@patternfly/elements/pf-accordion/pf-accordion.js';

export declare class IbAccordionPanel extends PfAccordionPanel {
  constructor();

  connectedCallback(): void;

  static get observedAttributes(): string[];

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string,
  ): void;
}
