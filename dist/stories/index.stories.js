import { html } from 'lit';
import '../src/ib-ds.js';
export default {
    title: 'IbDs',
    component: 'ib-ds',
    argTypes: {
        header: { control: 'text' },
        counter: { control: 'number' },
        textColor: { control: 'color' },
    },
};
const Template = ({ header = 'Hello world', counter = 5, textColor, slot, }) => html `
  <ib-ds
    style="--ib-ds-text-color: ${textColor || 'black'}"
    .header=${header}
    .counter=${counter}
  >
    ${slot}
  </ib-ds>
`;
export const Regular = Template.bind({});
export const CustomHeader = Template.bind({});
CustomHeader.args = {
    header: 'My header',
};
export const CustomCounter = Template.bind({});
CustomCounter.args = {
    counter: 123456,
};
export const SlottedContent = Template.bind({});
SlottedContent.args = {
    slot: html `<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
    slot: { table: { disable: true } },
};
//# sourceMappingURL=index.stories.js.map