---
title: React Embed Library
nav_title: React Embed Library
nav_order: 20
---

# Synergetics React Embed Library

**[Synergetics/embed-react](https://www.npmjs.com/package/@synergetics/embed-react)** is Synergetics official embed library to embed workflows in your [React](https://reactjs.org/) project.

## Installation

Requirements:

- node >= 18
- yarn or npm

Add the library to your project using your favourite package manager:

```shell
yarn add @synergetics/embed-react
```

or

```shell
npm install @synergetics/embed-react --save
```

## Usage

Import the component you want to use. Then render it in your React app.

For example, to embed your workflow as a `Widget`:

```javascript
import { Widget } from '@synergetics/embed-react'

const MyComponent = () => {
  return (
    <Widget 
      id="<workflow-id>" 
      style={{ width: '50%' }} 
      className="my-workflow"
      chatOnly={false}
      modelOnly={false}
      chatPosition="right"
    />
  )
}
```

The `PopupButton` and `SliderButton` components provide a button to open the embed:

```javascript
import { PopupButton } from '@synergetics/embed-react'

const MyComponent = () => {
  return (
    <PopupButton 
      id="<workflow-id>" 
      style={{ fontSize: 20 }} 
      className="my-button"
      chatOnly={false}
      modelOnly={false}
      chatPosition="right"
    >
      click to open workflow in popup
    </PopupButton>
  )
}
```

You can render `Popover` and `Slider` components anywhere in your app (preferably at the end of the page):

```javascript
import { Sidetab } from '@synergetics/embed-react'

const MyComponent = () => {
  return (
    <Sidetab 
      id="<workflow-id>" 
      buttonText="click to open"
      chatOnly={false}
      modelOnly={false}
      chatPosition="right"
    />
  )
}
```

## How to get workflow id of your workflow?

You can find `<workflow-id>` from the public URL of your workflow:

- `https://workflow.synergetics.com/to/<workflow-id>`

Or from admin panel URL:

- `https://admin.synergetics.com/workflow/<workflow-id>/*`

## Configuration

### Options

Pass options as props to the component.

```javascript
<PopupButton
  id="<workflow-id>"
  size={60}
  hidden={{
    foo: 'Foo Value',
    bar: 'Bar Value',
  }}
  onReady={() => {
    console.log('workflow ready')
  }}
  enableSandbox
  chatOnly={false}
  modelOnly={false}
  chatPosition="right"
>
  click to open
</PopupButton>
```

New options:
- `chatOnly`: Set to `true` to display only the chat interface.
- `modelOnly`: Set to `true` to display only the model interface.
- `chatPosition`: Set the position of the chat interface. Options are "left", "right", "top", or "bottom".

### CSP nonce support

If the global `__webpack_nonce__` is set, its value will be used for a `nonce` attribute on the inline `<style>` block. See [Github issue #458](https://github.com/synergetics/embed/issues/458) for details.

### Passing a custom ref as `embedRef`

For some custom use cases it may be convenient to open the popup programmatically (without the button being clicked).

To do this, pass an `embedRef` prop to `PopupButton`, `SliderButton`, `Popover` and `Sidetab` components and then use `ref.current.open()` to trigger the popup to open.

Example:

```javascript
const ref = useRef()
const openPopup = () => ref.current?.open()
// ...
<PopupButton
  id="<workflow-id>"
  embedRef={ref}
>
  click to open
</PopupButton>
```

## What's next?

Learn more about [Vanilla Embed Library](/embed/vanilla). Since React Embed Library is just a React wrapper for Vanilla Embed Library, all concepts apply here as well.

You can:

- embed workflow [inline in page](/embed/inline)
- open it [in modal window](/embed/modal)
- see all available [configuration options](/embed/configuration)

If you want to create a workflow so you can embed it, sign up for a [Synergetics](https://synergetics.com) account or head to our documentation for the [Create API](/create/).
