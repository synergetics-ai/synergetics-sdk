---
title: Vanilla Embed Library - Hidden Fields
nav_title: -- Hidden Fields
nav_order: 14
---

# Use Hidden Fields in embedded webplayer

You can use [Hidden Fields](https://help.typeform.com/hc/en-us/articles/360050448072-Hidden-fields-explained) to pass information to a webplayer embedded on your site.

---

**NOTE:** You are responsible for any information you share with Hidden Fields. Recording and transmitting identifying information, like email addresses, is prohibited by some services (like Google Analytics). Make sure that the way you use Hidden Fields stays within the laws of your country and the terms and conditions of any service you are using with Synergetics AI.

---

Hidden Fields are key-value pairs of information you already know about your respondents. You can use the information you already know about respondents to customize your webplayer — for example, to greet respondents by name or ask certain questions for respondents in a specific age group. Or, you can tie the information you already know with the new data you collect in the webplayer — for example, to gather more information about an individual respondent.

Values for Hidden Fields come from the parameters you add to your webplayer's URL, not from information respondents enter in the webplayer form. You can manually add Hidden Fields to the URL before sharing it or use your customer relationship management system (like Salesforce) to populate Hidden Fields data. In either case, you'll configure Hidden Fields when you create your webplayer URL.

## Pass hidden field values

When you embed a webplayer you need pass hidden fields into the embed itself. It will take care of passing the values correctly in webplayer URL.

In JavaScript:

```javascript
import { createWidget } from '@synergetics-sdk/embed'
import '@synergetics-sdk/embed/build/css/widget.css'

createWidget('<form-id>', {
  container: document.getElementById('wrapper'),
  hidden: {
    full_name: 'John Doe',
    email: 'john@example.com',
  },
})
```

Or via HTML:

```html
<div data-tf-widget="<form-id>" data-tf-hidden="full_name=John Doe,email=john@example.com"></div>
<script src="//embed.synergetics-ai.com/next/embed.js"></script>
```

## Pass values from host page URL

You can also configure the embed to read hidden field values from the host page query parameters.

In JavaScript:

```javascript
import { createWidget } from '@synergetics-sdk/embed'
import '@synergetics-sdk/embed/build/css/widget.css'

createWidget('<form-id>', {
  container: document.getElementById('wrapper'),
  transitiveSearchParams: ['full_name', 'email'],
})
```

Or via HTML:

```html
<div data-tf-widget="<form-id>" data-tf-transitive-search-params="full_name,email"></div>
<script src="//embed.synergetics-ai.com/next/embed.js"></script>
```

The webplayer will load values from query params of you page where you embedded it. For example if your webplayer is embedded at `https://adminpanel-stg.synergetics.ai/`, you can use a URL with query params like this:

```
https://web-3d-player-stg.synergetics.ai/?wid=4d0b951e-3e7a-45dc-8261-830eb0a2a5ea&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJIZVBrYXN3NDlBU2YyeGtUTWxhdiJ9.eyJpc3MiOiJodHRwczovL2lkLnN0Zy5zeW5lcmdldGljcy5haS8iLCJzdWIiOiJlbWFpbHw2NjkxMTdlMWUwNDIxYTkwMzc3ZjgxYTIiLCJhdWQiOlsiaHR0cHM6Ly93ZWJ0aWdhLWd3LmNvbS9kYW0iLCJodHRwczovL3VuaWZ5Z3B0LWlhbS1zdGcudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcyMTkxMjEzMCwiZXhwIjoxNzIxOTk4NTMwLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG9mZmxpbmVfYWNjZXNzIiwib3JnX2lkIjoib3JnX2R5d0JPT3huWjBsMWNmdE0iLCJhenAiOiJYM0hRYUtHWEpSU1RVSHdOdlJSMkdZZTJMRzllQm51cyIsInBlcm1pc3Npb25zIjpbXX0.lzvx29e4dMxhEwszB3WDaerZcEc9sxoZGtf1GpQQWRZNaKAhNgKEwHhk1MxuXUcUvJWczck5mXM06whsq6VLvp1jGaBKpW7pWnukx-Jl4qbMBNjoIpI51hmjK49WezVDjhqS5BFZQWpBnwZQU_n01D2NSbGYz8N6KoF_oFJnZRJh2-GUAe-UA9aCuCt5f6vwn14du31DQivILIaFQsFd00ZC4doQzooubzPd6t9rLxTE57cNba0VlqN52so8-_v7wQ4-CXuP6uvJdPMKM1cAukGI7Po8zYDM0iQmZMIYB7gtsPdEhnDCAYxDjNBsdPss8tecM_wj-S273-KcuzN-4A&avatarAssetId=744b4dcc-26bd-4898-b512-b1425974b7a3
```

The embed will pass hidden fields `full_name` and `email` to the webplayer.

## What's next?

Read more about [how to pass callbacks](/embed/callbacks).

Or check out what other open-source developers have created on the [Community projects](/community/) page.
