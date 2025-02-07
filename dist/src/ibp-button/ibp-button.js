import { __decorate } from "tslib";
import { customElement } from 'lit/decorators.js';
import { PfButton } from '@patternfly/elements/pf-button/pf-button.js';
let IbpButton = class IbpButton extends PfButton {
    constructor() {
        super();
        console.log('ibp-button');
    }
    connectedCallback() {
        try {
            super.connectedCallback();
        }
        catch (error) {
            console.log(error);
        }
        console.log('connectedCallback');
    }
};
IbpButton = __decorate([
    customElement('ibp-button')
], IbpButton);
export { IbpButton };
//# sourceMappingURL=ibp-button.js.map