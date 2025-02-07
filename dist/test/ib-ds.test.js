import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/ib-ds.js';
describe('IbDs', () => {
    it('has a default header "Hey there" and counter 5', async () => {
        const el = await fixture(html `<ib-ds></ib-ds>`);
        expect(el.header).to.equal('Hey there');
        expect(el.counter).to.equal(5);
    });
    it('increases the counter on button click', async () => {
        const el = await fixture(html `<ib-ds></ib-ds>`);
        el.shadowRoot.querySelector('button').click();
        expect(el.counter).to.equal(6);
    });
    it('can override the header via attribute', async () => {
        const el = await fixture(html `<ib-ds header="attribute header"></ib-ds>`);
        expect(el.header).to.equal('attribute header');
    });
    it('passes the a11y audit', async () => {
        const el = await fixture(html `<ib-ds></ib-ds>`);
        await expect(el).shadowDom.to.be.accessible();
    });
});
//# sourceMappingURL=ib-ds.test.js.map