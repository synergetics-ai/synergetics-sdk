---
title: Vanilla Embed Library
nav_title: Vanilla Embed Library
nav_order: 10
---

# Syngertics SDK Vanilla Embed Library

**[Syngertics-SDK/embed](https://www.npmjs.com/package/@synergetics-sdk/embed)** is the core embed library that lets you embed webplayers to your website using vanilla Javascript.

## Installation

### As NPM package

Requirements:

- node >= 18
- yarn or npm

Install using your favourite package manager:

```shell
yarn add @synergetics-sdk/embed
```

or

```shell
npm install --save @synergetics-sdk/embed
```

Import the lib, CSS and create your embed:

```javascript
import { createWidget } from '@synergetics-sdk/embed'
import '@synergetics-sdk/embed/build/css/widget.css'
createWidget('<webplayer-id>', { container: document.querySelector('#form') })
```

### From CDN

As HTML, the CSS is imported automatically. Place this code where you want to display your form.

```html
<div data-wp-widget="<webplayer-id>"></div>
<script src="//embed.synergetics-ai.com/next/embed.js"></script>
```

Via JavaScript for more control and specific integration.

```html
<button id="button">open form</button>
<script src="//embed.synergetics-ai.com/next/embed.js"></script>
<link rel="stylesheet" href="//embed.synergetics-ai.com/next/css/popup.css" />
<script>
  const { open, close, toggle, refresh } = window.tf.createPopup('<webplayer-id>')
  document.querySelector('#button').onclick = toggle
</script>
```

### How to get form id of your form?

You can find `<webplayer-id>` from the public URL of your form:

- `https://web-3d-player-stg.synergetics.ai/?wid=<webplayer-id>`

## Embed types

Embed webplayer [inline in page](/embed/inline):

- widget: `createWidget('<webplayer-id>', options)`

Embed webplayer [in modal window](/embed/modal):

- popup: `createPopup('<webplayer-id>', options)`
- slider: `createSlider('<webplayer-id>', options)`
- sidetab: `createSidetab('<webplayer-id>', options)`
- popover: `createPopover('<webplayer-id>', options)`

`webplayer-id` is string, you can find it in your webplayer URL `https://web-3d-player-stg.synergetics.ai/?wid=<webplayer-id>`

## What's next?

If you want to create a form so you can embed it, sign up for a Synergetics AI (https://synergetics.ai/) account.
