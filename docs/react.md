---
title: React Embed Library
nav_title: React Embed Library
nav_order: 20
---

# Syngertics SDK React Embed Library

**[synergetics-sdk/embed-react](https://www.npmjs.com/package/@synergetics-sdk/embed-react)** is Synergetics SDK official embed library to embed webplayers in your [React](https://reactjs.org/) project.

## Installation

Requirements:

- node >= 18
- yarn or npm

Add the library to your project using your favourite package manager:

```shell
yarn add @synergetics-sdk/embed-react
```

or

```shell
npm install @synergetics-sdk/embed-react --save
```

## Usage

Import the component you want to use. Then render it in your React app.

For example to embed your webplayer as a `Widget`.

```javascript
import { Widget } from '@synergetics-sdk/embed-react'

const MyComponent = () => {
  return <Widget id="<webplayer-id>" style={{ width: '50%' }} className="my-form" />
}
```

The `PopupButton` and `SliderButton` components provide a button to open the embed:

```javascript
import { PopupButton } from '@synergetics-sdk/embed-react'

const MyComponent = () => {
  return (
    <PopupButton id="<webplayer-id>" style={{ fontSize: 20 }} className="my-button">
      click to open form in popup
    </PopupButton>
  )
}
```

You can render `Popover` and `Slider` components anywhere in your app (preferably at the end of the page):

```javascript
import { Sidetab } from '@synergetics-sdk/embed-react'

const MyComponent = () => {
  return <Sidetab id="<webplayer-id>" buttonText="click to open" />
}
```

## How to get form id of your form?

You can find `<webplayer-id>` from the public URL of your form:

- `https://web-3d-player-stg.synergetics.ai/?wid=<webplayer-id>`


## Configuration

### Options

Pass options as props to the component.

```javascript
<PopupButton
  id="<webplayer-id>"
  size={60}
  hidden={{
    foo: 'Foo Value',
    bar: 'Bar Value',
  }}
  onReady={() => {
    console.log('webplayer ready')
  }}
  enableSandbox
>
  click to open
</PopupButton>
```


### Passing a custom ref as `embedRef`

For some custom use cases it may be convenient to open the popup programmatically (without the button being clicked).

To do this, pass an `embedRef` prop to `PopupButton`, `SliderButton`, `Popover` and `Sidetab` components and then use `ref.current.open()` to trigger the popup to open.

Example:

```javascript
const ref = useRef()
const openPopup = () => ref.current?.open()
// ...
<PopupButton
  id="<webplayer-id>"
  embedRef={ref}
>
  click to open
</PopupButton>
```

## What's next?

Learn more about [Vanilla Embed Library](/embed/vanilla). Since React Embed Library is just a React wrapper for Vanilla Embed Library, all concepts apply here as well.

You can:

- embed typeform [inline in page](/embed/inline)
- open it [in modal window](/embed/modal)
- see all available [configuration options](/embed/configuration)

If you want to create a form so you can embed it, sign up for a Synergetics AI (https://synergetics.ai/) account.
