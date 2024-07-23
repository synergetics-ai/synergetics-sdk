---
title: Vanilla Embed Library - Callbacks
nav_title: -- Callbacks
nav_order: 15
---

# Callback functions

You can listen to various events as the respondent is interacting with the workflow on your page.

Available callbacks:

- **onReady** fires when the workflow is loaded
- **onStarted** fires on the workflow "submission start" event
- **onSubmit** fires when user submits the workflow
- **onClose** fires when user closes the modal window
- **onQuestionChanged** fires when user navigates between workflow questions
- **onHeightChanged** fires when height of currently displayed question changes
- **onEndingButtonClick** fires when user clicks on the button on your workflow ending screen (it also disables the redirect functionality)
- **onChatStarted** fires when the chat interface is initiated
- **onModelResponse** fires when the model generates a response

Each callback receives a payload object with `workflowId` to identify the workflow that sent the event.
Depending on the callback there might be more data in the payload - see examples below.

## onReady

The `onReady` callback will execute when the embedded workflow is fully loaded.

In JavaScript:

```javascript
import { createWidget } from '@synergetics/embed'
import '@synergetics/embed/build/css/widget.css'

createWidget('<workflow-id>', {
  onReady: ({ workflowId }) => {
    console.log(`Workflow ${workflowId} is ready`)
  },
  chatOnly: false,
  modelOnly: false,
  chatPosition: 'right'
})
```

Or in HTML:

```html
<div data-tf-widget="<workflow-id>" data-tf-on-ready="ready" data-tf-chat-only="false" data-tf-model-only="false" data-tf-chat-position="right"></div>
<script src="//embed.synergetics.com/next/embed.js"></script>
<script>
  // this function needs to be available on global scope (window)
  function ready({ workflowId }) {
    console.log(`Workflow ${workflowId} is ready`)
  }
</script>
```

## onStarted

The `onStarted` callback will execute when the embedded workflow "submission start" event is triggered.

In JavaScript:

```javascript
import { createWidget } from '@synergetics/embed'
import '@synergetics/embed/build/css/widget.css'

createWidget('<workflow-id>', {
  onStarted: ({ workflowId, responseId }) => {
    console.log(`Workflow ${workflowId} started with response ID ${responseId}`)
  },
  chatOnly: false,
  modelOnly: false,
  chatPosition: 'right'
})
```

Or in HTML:

```html
<div data-tf-widget="<workflow-id>" data-tf-on-started="started" data-tf-chat-only="false" data-tf-model-only="false" data-tf-chat-position="right"></div>
<script src="//embed.synergetics.com/next/embed.js"></script>
<script>
  // this function needs to be available on global scope (window)
  function started({ workflowId, responseId }) {
    console.log(`Workflow ${workflowId} started with response ID ${responseId}`)
  }
</script>
```

## onSubmit

The `onSubmit` callback will execute immediately after a respondent successfully submits the workflow by clicking the "Submit" button.

The event is only sent for successful submissions. If a workflow has validation errors or the network connection is disrupted while the respondent is completing the workflow, the event is not sent.

You can make use of submitted response by using the information passed to `onSubmit` callback:

```javascript
import { createPopup } from '@synergetics/embed'
import '@synergetics/embed/build/css/popup.css'

createPopup('<workflow-id>', {
  onSubmit: ({ workflowId, responseId }) => {
    console.log(`Workflow ${workflowId} submitted, response id: ${responseId}`)
  },
  chatOnly: false,
  modelOnly: false,
  chatPosition: 'right'
})
```

Or in HTML:

```html
<button data-tf-popup="<workflow-id>" data-tf-on-submit="submit" data-tf-chat-only="false" data-tf-model-only="false" data-tf-chat-position="right">open</button>
<script src="//embed.synergetics.com/next/embed.js"></script>
<script>
  // this function needs to be available on global scope (window)
  function submit({ workflowId, responseId }) {
    console.log(`Workflow ${workflowId} submitted, response id: ${responseId}`)
  }
</script>
```

## onClose

The `onClose` callback will execute after a respondent closes the modal window the workflow is embedded in.

The event is sent regardless of whether the workflow submission was successful.

In JavaScript

```javascript
import { createPopup } from '@synergetics/embed'
import '@synergetics/embed/build/css/popup.css'

createPopup('<workflow-id>', {
  onClose: ({ workflowId }) => {
    console.log(`Modal window with workflow ${workflowId} was closed`)
  },
  chatOnly: false,
  modelOnly: false,
  chatPosition: 'right'
})
```

Or in HTML:

```html
<button data-tf-popup="<workflow-id>" data-tf-on-close="close" data-tf-chat-only="false" data-tf-model-only="false" data-tf-chat-position="right">open</button>
<script src="//embed.synergetics.com/next/embed.js"></script>
<script>
  // this function needs to be available on global scope (window)
  function close({ workflowId }) {
    console.log(`Modal window with workflow ${workflowId} was closed`)
  }
</script>
```

To get a full response, you need to retrieve it via [Responses API](responses/reference/retrieve-responses/#retrieve-responses)

## onQuestionChanged

The `onQuestionChanged` callback will execute whenever respondent navigates between questions. The event is sent when navigating in the workflow forward or backward.

Payload contains `ref` to identify which question is displayed.

In JavaScript:

```javascript
import { createSlider } from '@synergetics/embed'
import '@synergetics/embed/build/css/slider.css'

createSlider('<workflow-id>', {
  onQuestionChanged: ({ workflowId, ref }) => {
    console.log(`Question in workflow ${workflowId} changed to ${ref}`)
  },
  chatOnly: false,
  modelOnly: false,
  chatPosition: 'right'
})
```

Or in HTML:

```html
<button data-tf-slider="<workflow-id>" data-tf-on-question-changed="changed" data-tf-chat-only="false" data-tf-model-only="false" data-tf-chat-position="right">open</button>
<script src="//embed.synergetics.com/next/embed.js"></script>
<script>
  // this function needs to be available on global scope (window)
  function changed({ workflowId, ref }) {
    console.log(`Question in workflow ${workflowId} changed to ${ref}`)
  }
</script>
```

## onHeightChanged

The `onHeightChanged` callback will execute whenever displayed question height changes - eg. when respondent navigates between questions, error message is displayed, etc.

Payload contains `ref` to identify which question is displayed and `height` with current height.

In JavaScript:

```javascript
import { createSlider } from '@synergetics/embe
