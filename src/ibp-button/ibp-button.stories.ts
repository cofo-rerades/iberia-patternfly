import { html } from 'lit';
import './ibp-button.js';
// import '../ib-icon/ib-icon';
// import '../../../node_modules/@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-button/pf-button.js';
import { PfIcon } from '@patternfly/elements/pf-icon/pf-icon.js';

PfIcon.addIconSet('iberia', async (set, icon) =>
  import(`./icons/${set}/${icon}.js`).then(mod => mod.default),
);

const Template = () => html`
  <h1>Botón con texto</h1>
  <ibp-button>Botón con texto</ibp-button>

  <h1>Enlace con texto</h1>
  <ibp-button variant="link" href="http://google.com" target="blank"
    >Enlace con texto</ibp-button
  >

  <h1>Botón con un icono a la izquierda</h1>
  <ibp-button>
    <pf-icon set="iberia" icon="boba-tea" size="md" loading="lazy"></pf-icon>
    Botón con icono
  </ibp-button>
  <h1>Botón con un icono a la derecha</h1>
  <ibp-button>
    Botón con icono
    <pf-icon set="iberia" icon="lifecycle" size="md"></pf-icon>
  </ibp-button>
  <h1>Botón con dos iconos uno a cada lado</h1>
  <ibp-button>
    <pf-icon set="iberia" icon="avios" size="md"></pf-icon>
    Botón con iconos
    <pf-icon set="iberia" icon="checkin" size="md"></pf-icon>
  </ibp-button>
`;

export const Default = Template.bind({});
// Default.args = {};

export default {
  title: 'Components/IbpButton',
  component: 'ibp-button',
  argTypes: {},
};
