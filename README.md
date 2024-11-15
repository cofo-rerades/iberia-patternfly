# iberia-patternfly

This is a POC of the Iberia Patternfly project. It is a project that aims to create a design system for Iberia, based on the Patternfly project.

## References

- [Patternfly](https://www.patternfly.org/v4/)
- [Figma components](https://www.figma.com/@patternfly)
- [patternfly elements (Web Components)](https://patternflyelements.org/get-started/)
- [Patternfly Design System](https://www.patternfly.org/)






## Installation
This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

```bash
npm i ib-ds
```

## Usage

```html
<script type="module">
  import 'ib-ds/ib-ds.js';
</script>

<ib-ds></ib-ds>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
