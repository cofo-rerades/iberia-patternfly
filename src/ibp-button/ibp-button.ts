import { customElement } from 'lit/decorators.js';
import { PfButton } from '@patternfly/elements/pf-button/pf-button.js';

@customElement('ibp-button')
export class IbpButton extends PfButton {
  constructor() {
    super();
    console.log('ibp-button');
  }

  connectedCallback() {
    try {
      super.connectedCallback();
    } catch (error) {
      console.log(error);
    }
    console.log('connectedCallback');
  }
}
