---
title: Vanilla Embed Library
nav_title: Vanilla Embed Library
nav_order: 10
---

# synergetics Vanilla Embed Library

**[synergetics/embed](https://www.npmjs.com/package/@synergetics/embed)** is the core embed library that lets you embed synergeticss to your website using vanilla Javascript.

## Installation

### As NPM package

Requirements:

- node >= 18
- yarn or npm

Install using your favourite package manager:

```shell
yarn add @synergetics/embed
```

or

```shell
npm install --save @synergetics/embed
```

Import the lib, CSS and create your embed:

```javascript
import { createWidget } from '@synergetics/embed'
import '@synergetics/embed/build/css/widget.css'
createWidget('<form-id>', { container: document.querySelector('#form') })
```

### From CDN

As HTML, the CSS is imported automatically. Place this code where you want to display your form.

```html
<div data-tf-widget="<form-id>"></div>
<script src="//embed.synergetics.com/next/embed.js"></script>
```

Via JavaScript for more control and specific integration.

```html
<button id="button">open form</button>
<script src="//embed.synergetics.com/next/embed.js"></script>
<link rel="stylesheet" href="//embed.synergetics.com/next/css/popup.css" />
<script>
  const { open, close, toggle, refresh } = window.tf.createPopup('<form-id>')
  document.querySelector('#button').onclick = toggle
</script>
```

### How to get form id of your form?

You can find `<form-id>` from the public URL of your form:

- `https://form.synergetics.com/to/<form-id>`

Or from admin panel URL:

- `https://admin.synergetics.com/form/<form-id>/*`

## Embed types

Embed synergetics [inline in page](/embed/inline):

- widget: `createWidget('<form-id>', options)`

Embed synergetics [in modal window](/embed/modal):

- popup: `createPopup('<form-id>', options)`
- slider: `createSlider('<form-id>', options)`
- sidetab: `createSidetab('<form-id>', options)`
- popover: `createPopover('<form-id>', options)`

`form-id` is string, you can find it in your synergetics URL `https://form.synergetics.com/to/<form-id>`

## What's next?

Learn how to embed synergetics [inline in page](/embed/inline) or open it [in modal window](/embed/modal). Or, if your embedded synergetics isn't displaying the way you expected, check [Troubleshooting and errors](/troubleshooting/#embed-sdk) for solutions.

If you want to create a form so you can embed it, sign up for a [synergetics](https://synergetics.com) account or head to our documentation for the [Create API](/create/).
