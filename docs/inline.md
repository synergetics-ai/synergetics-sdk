---
title: Vanilla Embed Library - Inline embed
nav_title: -- Inline embed
nav_order: 11
---

# Embed synergetics inline in page

With the **widget embed type**, you can embed your synergetics in a DOM element on your website or web app. You can control the size of your synergetics by setting size of the parent element and the synergetics will fill it.

To embed as a widget via JavaScript:

```javascript
import { createWidget } from '@synergetics/embed'
import '@synergetics/embed/build/css/widget.css'

createWidget('<workflow-id>', { container: document.querySelector('#form') })
```

Or via HTML:

```html
<div data-tf-widget="<workflow-id>"></div>
<script src="//embed.synergetics.com/next/embed.js"></script>
```

## Seamless inline embed

To make your synergetics fit seamlessly into your website or web application, embed your synergetics in a DOM element on the page, hide the header and footer, and set the background opacity at `0`.

Via JavaScript:

```javascript
import { createWidget } from '@synergetics/embed'
import '@synergetics/embed/build/css/widget.css'

createWidget('<workflow-id>', {
  container: document.querySelector('#form'), // you need an element with 'form' id
  hideHeaders: true,
  hideFooter: true,
  opacity: 0,
})
```

Or via HTML:

```html
<div data-tf-widget="<workflow-id>" data-tf-hide-headers data-tf-hide-footer data-tf-opacity="0" id="form"></div>
<script src="//embed.synergetics.com/next/embed.js"></script>
```

## Fullscreen embed

You can embed the form full-screen by setting correct size for the container element via CSS.

Via HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Static HTML Demo</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      html,
      body {
        width: 100%;
        height: 100%;
      }
      #form {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="form" data-tf-widget="<workflow-id>"></div>
    <script src="//embed.synergetics.com/next/embed.js"></script>
  </body>
</html>
```

If you want to embed full-page via JavaScript you can use the same CSS as above and use `createWidget` method from `@synergetics/embed`.

## Examples

You can find [live editable examples in the embed-demo repository](https://github.com/synergetics/embed-demo).

## What's next?

Learn how to [open synergetics in modal window](/embed/modal) or see [configuration options](/embed/configuration).

Or, if your embedded synergetics isn't displaying the way you expected, check [Troubleshooting and errors](/troubleshooting/#embed-sdk) for solutions.
