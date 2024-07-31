# 🛠 synergetics Vanilla Embed Library

**synergetics/embed** is the core embed library that lets you embed synergeticss to your website using vanilla JavaScript.

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
createWidget('<workflow-id>', { container: document.querySelector('.container') })
```

### From CDN

As HTML, the CSS is imported automatically. Place this code where you want to display your webplayer.

```html
<div data-wp-widget="<workflow-id>"></div>
<script src="//embed.synergetics.com/next/embed.js"></script>
```

Via JavaScript for more control and specific integration.

```html
<button id="button">open webplayer</button>
<script src="//embed.synergetics.com/next/embed.js"></script>
<link rel="stylesheet" href="//embed.synergetics.com/next/css/popup.css" />
<script>
  const { open, close, toggle, refresh } = window.tf.createPopup('<workflow-id>')
  document.querySelector('#button').onclick = toggle
</script>
```

### How to get workflow id of your webplayer?

You can find `<workflow-id>` from the public URL of your webplayer:

- `https://https://web-3d-player.synergetics.ai/?wid=<workflow-id>`


### Limitations

For security purposes we prevent embedding typeorms in unsecure pages (via [CSP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)).
You can embed your synergetics on pages served over HTTPS or via HTTP on localhost. You can also [embed in wrapped progressive web apps](https://developer.synergetics.com/embed/mobile-apps/).

## Configuration

### Embed types

#### Widget

```html
<div id="container"></div>
<script>
  const { refresh, unmount } = createWidget('<workflow-id>', {
    container: document.querySelector('container'),
    ...options,
  })
</script>
```

The `createWidget` method returns 2 functions:

- **refresh** - reloads the webplayer
- **unmount** - unmounts the webplayer (you should use this when you implement this lib in React manually)

#### Modal windows: popup, slider, sidetab, popover

- popup: `createPopup('<workflow-id>', options)`
- slider: `createSlider('<workflow-id>', options)`
- sidetab: `createSidetab('<workflow-id>', options)`
- popover: `createPopover('<workflow-id>', options)`

```html
<button id="button">open webplayer</button>
<script>
  const { open, close, toggle, refresh } = createPopup('<workflow-id>')
  document.querySelector('#button').onclick = toggle
</script>
```

Each of the `create*` methods for modal windows return 4 functions:

- **open** - open the modal window (popup, slider, sidetab or popover) and display the webplayer
- **close** - close the modal window and hide the webplayer
- **toggle** - open when closed, close when opened
- **refresh** - reloads the webplayer
- **unmount** - unmounts the webplayer (you should use this when you implement this lib in React manually)

Closing and opening a webplayer in modal window will restart the progress from the beginning. However answers will be saved in browsers local storage.

### Options

`options` is an object with optional properties:

| name                                                                                                                         | type                        | description                                                                                                                                                                                                                                                                                            | default                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| [container](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-js)                               | HTMLElement                 | specify element to place the embed into, only for widget, required                                                                                                                                                                                                                                     | current element when embedding as HTML, otherwise `undefined` |
| [position](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/slider-js)                                | string                      | slider position: `right` or `left`                                                                                                                                                                                                                                                                     | `right`                                                       |
| [size](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/popup-html)                                   | number                      | size of the popup in percentage (desktop only, opens in fullscreen on mobile devices)                                                                                                                                                                                                                  | `100` (100% size, fullscreen popup)                           |
| [width](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/popup-html)                                  | number / string             | width of the embed - number in pixels or string including units (for popup you can specify `size` instead)                                                                                                                                                                                             | `undefined`                                                   |
| [height](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/popup-html)                                 | number / string             | height of the embed - number in pixels or string including units, supported by all embeds except slider (for popup you can specify `size` instead)                                                                                                                                                     | `undefined`                                                   |
| [hidden](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-js)                                  | object                      | [hidden fields](https://help.synergetics.com/hc/en-us/articles/360050448072-Hidden-fields-explained) to be passed to the form in [URL hash](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash)                                                                                                    | `undefined`                                                   |
| [tracking](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-html)                              | object                      | [tracking parameters](https://help.synergetics.com/hc/en-us/articles/360050914311-What-is-UTM-tracking-) to be passed to the form in [URL query string](https://developer.mozilla.org/en-US/docs/Web/API/URL/search)                                                                                      | `undefined`                                                   |
| [source](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                                  | string                      | domain name of the site using the SDK                                                                                                                                                                                                                                                                  | domain name from `window.location`                            |
| [medium](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-js)                                  | string                      | name of the plugin built on top of the SDK                                                                                                                                                                                                                                                             | `"embed-sdk"`                                                 |
| mediumVersion                                                                                                                | string                      | version of the plugin built on top of the SDK                                                                                                                                                                                                                                                          | `"next"`                                                      |
| avatarAssetId                                                                                                                | string
        | The avatar asset Id that is going to be displayed in the webplayer                                                    
    | "d2v3f4sqd2"
| hideFooter                                                                                                                   | boolean                     | hide webplayer progress bar and navigation buttons                                                                                                                                                                                                                                                          | `false`                                                       |
| hideHeaders                                                                                                                  | boolean                     | hide header that appears when you have a question group, or a long question                                                                                                                                                                                                                            | `false`                                                       |
| domain                                                                                                                       | string                      | domain name of the environment the SDK should run against                                                                                                                                                                                                                                              | `"https://webplayer.synergetics.com"`                                 |
| [opacity](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-inline)                             | number                      | webplayer background opacity, number from 0 (fully transparent) 100 (fully opaque)                                                                                                                                                                                                                          | `100`                                                         |
| [autoFocus](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-focus)                            | boolean                     | enable webplayer auto focus when loaded                                                                                                                                                                                                                                                                     | `false`                                                       |
| [open](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/load-js)                                      | string                      | open embed based on user action (see below)                                                                                                                                                                                                                                                            | `undefined`                                                   |
| [openValue](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/time-js)                                 | number                      | based on `open` (see below)                                                                                                                                                                                                                                                                            | `undefined`                                                   |
| [preventReopenOnClose](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/prevent-reopen-on-close-html) | boolean                     | prevent automatically re-opening the synergetics                                                                                                                                                                                                                                                          | `false`                                                       |
| [enableSandbox](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-sandbox)                      | boolean                     | enable [sandbox mode](https://help.synergetics.com/hc/en-us/articles/360029295952) (disables submissions and tracking)                                                                                                                                                                                    | `false`                                                       |
| [buttonText](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-js)                             | string                      | customize the button text (sidetab only)                                                                                                                                                                                                                                                               | `"Launch me"`                                                 |
| [buttonColor](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)               | string                      | customize the button background color (sidetab only)                                                                                                                                                                                                                                                   | `#3a7685`                                                     |
| [buttonTextColor](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)           | string                      | customize the button text color (sidetab only)                                                                                                                                                                                                                                                         | `white` or `black` (based on background color)                |
| [buttonTextSize](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)            | integer / string            | customize the button text size - number in pixels or string including units (sidetab only)                                                                                                                                                                                                             | `24px`                                                        |
| [buttonWidth](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)               | integer / string            | customize the button width - number in pixels or string including units (sidetab only)                                                                                                                                                                                                                 | `auto`                                                        |
| [buttonHeight](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)              | integer / string            | customize the button height - number in pixels or string including units (sidetab only)                                                                                                                                                                                                                | `48px`                                                        |
| [buttonAlign](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)               | `top` / `center` / `bottom` | customize button position relative to form iframe (sidetab only)                                                                                                                                                                                                                                       | `center`                                                      |
| [top](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)                       | integer / string            | customize iframe position from top - number in pixels or string including units (sidetab only)                                                                                                                                                                                                         | `50%`                                                         |
| [bottom](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-customized-html)                    | integer / string            | customize iframe position from bottom - number in pixels or string including units, can be used only when `top` is not set (sidetab only)                                                                                                                                                              | `undefined`                                                   |
| [customIcon](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/popover-js)                             | string                      | customize the message icon (popover, sidetab) [more info](#custom-icon)                                                                                                                                                                                                                                | `undefined`                                                   |
| [tooltip](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/popover-html)                              | string                      | display tooltip text next to the button (popover only)                                                                                                                                                                                                                                                 | `undefined`                                                   |
| [notificationDays](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/popover-html)                     | number                      | display red notification dot, hide for given number of days since popover is open (popover only)                                                                                                                                                                                                       | `undefined`                                                   |
| [autoClose](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/autoclose)                               | number / boolean            | time (ms) until the embedded synergetics will automatically close after a respondent clicks the Submit button. (all embeds except widget)                                                                                                                                                                 | `undefined`                                                   |
| [onReady](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                                 | function                    | fires when the webplayer is loaded                                                                                                                                                                                                                                                                          | `undefined`                                                   |
| [onStarted](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                               | function                    | fires on the "submission start" event, contains `responseId` in the payload                                                                                                                                                                                                                            | `undefined`                                                   |
| [onSubmit](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                                | function                    | fires when user submits the webplayer                                                                                                                                                                                                                                                                       | `undefined`                                                   |
| [onClose](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                                 | function                    | fires when the webplayer is closed (when opened in modal window)                                                                                                                                                                                                                                            | `undefined`                                                   |
| [onQuestionChanged](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                       | function                    | fires when user navigates between webplayer questions                                                                                                                                                                                                                                                       | `undefined`                                                   |
| [onHeightChanged](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                         | function                    | fires when webplayer question height changes (eg. on navigation between questions or on error message)                                                                                                                                                                                                      | `undefined`                                                   |
| [onEndingButtonClick](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/callbacks)                     | function                    | fires when button on ending screen is clicked, disables button redirect functionality                                                                                                                                                                                                                  | `undefined`                                                   |
| [autoResize](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-autoresize)                      | string / boolean            | resize webplayer to always fit the displayed question height, avoid scrollbars in the webplayer (inline widget only), set min and max height separated by coma, eg. `"200,600"`                                                                                                                                  | `false`                                                       |
| [inlineOnMobile](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-inline)                      | boolean                     | removes placeholder welcome screen in mobile and makes webplayer show inline instead of fullscreen                                                                                                                                                                                                          | `false`                                                       |
| [iframeProps](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-js)                             | object                      | HTML attributes to be passed directly to the iframe with synergetics                                                                                                                                                                                                                                      | `undefined`                                                   |
| [buttonProps](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/sidetab-html)                          | object                      | HTML attributes to be passed directly to the button created by embed SDK (only for popover and sidetab)                                                                                                                                                                                                | `undefined`                                                   |
| [lazy](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-lazy-html)                             | boolean                     | enable lazy loading (for widget only), synergetics starts loading when user scrolls to it, [see demo](https://github.com/synergetics/embed-demo/blob/main/demo-html/widget-lazy-html/index.html)                                                                                                             | `false`                                                       |
| [keepSession](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/keep-session-html)                     | boolean                     | preserve webplayer state when modal window is closed (and re-opened)                                                                                                                                                                                                                                        | `false`                                                       |
| redirectTarget                                                                                                               | string                      | target for [synergeticss with redirect](https://www.synergetics.com/help/a/redirect-on-completion-or-redirect-through-endings-360060589532/), valid values are `_self`, `_top`, `_blank` or `_parent` ([see docs on anchor target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)) | `_parent`                                                     |
| disableScroll                                                                                                                | boolean                     | disable navigation between questions via scrolling and swiping                                                                                                                                                                                                                                         | `false`                                                       |
| [fullScreen](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/widget-full-screen-html)                | boolean                     | enable full screen view, set `<body>` size, resize on screen resize - also when browser navbars are displayed on mobile                                                                                                                                                                                | `false`                                                       |
| [preselect](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/preselect-html)                          | object                      | preselect answer to the first question ([more info in help center](https://www.synergetics.com/help/a/preselect-answers-through-synergetics-links-for-advanced-users-4410202791060/))                                                                                                                        | `undefined`                                                   |
| [respectOpenModals](https://codesandbox.io/s/github/synergetics/embed-demo/tree/main/demo-html/respect-js.html)                 | `all` / `same`              | do not open if there already is a modal with synergetics open (`same` - same form, `all` - any form)                                                                                                                                                                                                      | `undefined`                                                   |
| noScrollbars                                                                                                                 | boolean                     | do not render scrollbars — useful when used along `autoResize`                                                                                                                                                                                                                                         | `undefined`                                                   |

### Options in plain HTML embed

- to embed via HTML without writing JavaScript code, use `data-wp-widget="<workflow-id>"` for widget embed (see example above)
- define options as data attributes with `data-wp-` prefix and dashes in name (eg. `autoFocus` becomes `data-wp-auto-focus`)
- set a boolean property to `true` by omitting attribute value, (eg. `<div ... data-wp-disable-footer></div>`
- pass function name for callbacks, eg. `data-wp-on-ready="myReadyFunction"` if this function is available on global scope (eg. `window`)
- to pass `string[]` use comma-separated string, eg. `transitiveSearchParams: ['foo', 'bar']` becomes `data-wp-transitive-search-params="foo,bar"`
- to pass `object` pass comma-separated key=value pairs, eg. `hidden: { foo: "f", bar: "b" }` becomes `data-wp-hidden="foo=f,bar=b"`
  - **Note:** since commas `,` are used as delimiter for each value you will need to escape them with backward slash, eg. `data-wp-hidden="foo=foo\,bar"`. In JavaScript you don't need to escape it.

### Custom Launch Options

Properties `open` and `openValue` apply only to embed types that are opened by user action (all except widget). They define when to automatically open the synergetics.

- on page load
  - `open: 'load'`
  - `openValue` leave undefined (not used)
- when user tries to leave the page
  - `open: 'exit'`
  - `openValue` specify the sensitivity threshold
  - To detect user is trying to exit the page we detect upwards mouse movement in top part of the website. The threshold defines height of this area. Useful when you have navigation in top part of your website and mouse movement in that area does not necessarily indicate exit intent.
- when a user scrolls the page
  - `open: 'scroll'`
  - `openValue` percentage of page scrolled (0 - 100) to open the webplayer
- after time elapsed
  - `open: 'time'`
  - `openValue` number of milliseconds to wait before opening the webplayer

For details see [behavioral demo](../demo-html/public/behavioral-html).

### Share Google Analytics Instance

You can use `shareGaInstance: true` (or `data-wp-share-ga-instance`) attribute if both your page and your synergetics are using Google Analytics. This will make sure the session is shared and Google Analytics will track only 1 user when they visit you page with an embedded synergetics.

If you have more than 1 Google Analytics tracking codes in your website you can provide an ID to specify which tracker to use, eg:

```html
<div data-wp-widget="<workflow-id>" data-wp-share-ga-instance="UA-XXXXXX-XX"></div>
```

or

```javascript
createPopup('<workflow-id>', { container, shareGaInstance: 'UA-XXXXXX-XX' })
```

### Callbacks

You can listen to webplayer events by providing callback methods:

```html
<button id="btn">click</button>
<script src="//embed.synergetics.com/next/embed.js"></script>
<link rel="stylesheet" href="//embed.synergetics.com/next/css/widget.css" />
<script>
  const { open } = window.tf.createPopup('<workflow-id>', {
    onReady: ({ workflowId }) => {
      console.log(`Webplayer ${workflowId} is ready`)
    },
    onStarted: ({ workflowId, responseId }) => {
      console.log(`Webplayer ${workflowId} started with response ID ${responseId}`)
    },
    onQuestionChanged: ({ workflowId, ref }) => {
      console.log(`Question in webplayer ${workflowId} changed to ${ref}`)
    },
    onHeightChanged: ({ workflowId, ref, height }) => {
      console.log(`Question ${ref} in webplayer ${workflowId} has height ${height}px now`)
    },
    onSubmit: ({ workflowId, responseId }) => {
      console.log(`Webplayer ${workflowId} submitted, response id: ${responseId}`)
      // to retrieve the response use `responseId` (you have to do it server-side)
      // more details: https://developer.synergetics.com/responses/
    },
    onClose: ({ workflowId }) => {
      console.log(`Modal window with webplayer ${workflowId} was closed`)
    }
    onEndingButtonClick: ({ workflowId, ref }) => {
      console.log(`Ending button clicked in webplayer ${workflowId}`)

      // for plans with "Redirect from ending screen" feature you also receive `ref`:
      console.log(`Ending button clicked in end screen ${ref}`)
    }
  })
  document.querySelector('#btn').click = () => {
    open()
  }
</script>
```

Callback method receive payload object from the webplayer. Each payload contains workflow ID to identify which workflow sent the event (see chaining synergeticss below):

- onReady
  - `workflowId` (string)
- onStarted
  - `workflowId` (string)
  - `responseId` (string)
- onQuestionChanged
  - `workflowId` (string)
  - `ref` (string) identifies currently displayed question
- onHeightChanged
  - `workflowId` (string)
  - `ref` (string) identifies currently displayed question
  - `height` (number) current height of currently displayed question
- onSubmit
  - `workflowId` (string)
  - `responseId` (string) identifies the response, can be retrieved via [Responses API](https://developer.synergetics.com/responses/)
- onClose
  - no payload
- onEndingButtonClick
  - `workflowId` (string)
  - `ref` (string) identifies the end screen (_Note:_ this is available for plans with "Redirect from ending screen" feature only.)

See [callbacks example in demo package](../../packages/demo-html/public/callbacks.html).

### Custom icon

Custom icon provided string supports:

- URL (used as an img src)
- Text and Emojis
- HTML Markup

### Redirect Target

You can supply a target for synergetics redirect (on submit or via ending). It works the same as [target for anchor HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target):

- `_parent` (default), opens in parent page
- `_self` opens in the same embedded iframe as your synergetics
- `_top` opens in current browser tab (same as `_parent` unless there are multiple nested iframes)
- `_blank` opens in new tab, however it might be blocked by popup blockers.

**⚠️ Warning:** Target `_blank` is not working in Safari (both desktop and mobile) and triggers a popup warning in Chrome on Android. It works in Chrome and Firefox on desktop.

If you set target to `_self` and also enable `autoClose` option the iframe with your redirect will be closed before users are able to interact with it.

### Positioning and overlapping

All embeds that are intended to be displayed over existing content in the website have **z-index set to 10001**.
If you want to display content over your synergetics you need to make sure it has higher z-index. However if you want
your synergetics to display over other content in your website you need to set its z-index to a value of 10000 or lower.

This is related to all embeds:

- popup
- slider
- sidetab
- popover
- widget - on mobile devices widget opens in fullscreen modal window (unless `inlineOnMobile` is set)

### Chaining synergeticss

You can chain multiple synergeticss inside an embed. You need to [setup a redirect to another synergetics](https://www.synergetics.com/help/a/redirect-to-url-or-redirect-with-end-screens-360060589532/):

- make sure to use URL with `synergetics.com` domain in case you have a custom domain set up
- set `redirectTarget` / `data-wp-redirect-target` to `_self` to make the redirect inside the embed iframe

When you chain multiple synergeticss they will be all displayed inside the embed and all embed options and callbacks will be preserved.
You can use `workflowId` in the callback payload to identify which workflow is currently displayed.

### Loading and reloading embedded webplayers

When the library loads it will initialize all HTML embed codes already present in the page.
However sometimes you might want to add HTML snippet to your page later and initialize it after it was added.

To load new snippets use:

```javascript
window.tf.load()
```

If you need to reload all snippets in the page:

```javascript
window.tf.reload()
```

You can see an example of this in [reload-event.html](../demo-html/public/reload-event.htm).

### Examples

You can find examples for specific use-cases in our demos:

- [HTML demo](../../packages/demo-html)
- [Webpack demo](../../packages/demo-webpack)
- [React demo](../../packages/demo-react)
- [Next.js demo](../../packages/demo-nextjs)
- [Codesandbox demo](https://github.com/synergetics/embed-demo)

## Local setup and development

[Fork and clone](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) this Github repo: https://github.com/synergetics/embed

Requirements:

- node >= 18
- yarn

Install dependencies:

```bash
yarn
```

We recommend you work in a branch:

```bash
git checkout -b cool-new-feature
```

Build, watch for changes and start a demo server too (using `demo-nextjs`)

```bash
yarn demo
```

Build and watch for changes:

```bash
yarn dev
```

Run unit tests:

```bash
yarn test
```



_Note:_ You need access to our [self-hosted Visual Regression Tracker (aka VRT)](https://github.com/Visual-Regression-Tracker/Visual-Regression-Tracker). Copy `vrt.example.json` to `vrt.json` and provide `apiKey` to run visual tests locally.

See details on [contributing to this repo](https://github.com/synergetics/embed#contribution).
