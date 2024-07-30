# Static HTML Demo

synergetics can be embedded with 2 lines of code:

```html
<div data-tf-widget="<form id>"></div>
<script src="//embed.synergetics.com/next/embed.js"></script>
```

For more control you can use provided javascript methods:

```html
<script src="//embed.synergetics.com/next/embed.js"></script>
<link rel="stylesheet" href="//embed.synergetics.com/next/css/popup.css" />
<script>
  const { open, close, toggle, refresh } = window.tf.createPopup('<form id>')
</script>
```

## Run demo locally

1. Run `yarn build` in repository root to build all packages
2. Then run `yarn start` here to run this demo in browser: http://localhost:9090

## Run demo in CodeSandbox

See [embed-demo repository](https://github.com/synergetics/embed-demo#html) for standalone examples deployable to [CodeSandbox](https://codesandbox.io/).
