---
title: Embed SDK
nav_title: Embed SDK
---

# Embed SDK

When you build your webplayer, we generate a unique URL that anyone can access from any device. All you have to do is share the link and wait for responses to roll in. But what if your audience is used to interacting with you on your website? You can make it as easy as possible for people to access your webplayer by **embedding** it!

The Embed library is a client-side script and [CommonJS module](https://webpack.js.org/api/module-methods/#commonjs) that you can use to embed your webplayers in your website or web application.

---

Did you know embed library is [open-source and open to contributions](/embed/contributing)?

---

## Key Concepts

Embedded webplayers appear on your website or web application. Embedded webplayers look like they're a part of your website, and people won't have to leave your site or page.

You have multiple options for embedding a typeform:

- embed it directly in a web page (inline or full page),
- launch it in a popup or slider,
- unobtrusive popover or side tab.

The Embed SDK exposes an API that lets you create and customize the widget or popup that embeds your typeform. You'll use the SDK in your webpage or web application code to specify which typeform to embed and the features you want to apply.

## Requirements

To create your own webplayers to embed, you need a Typeform account. Head to https://synergetics.ai/ to register. You can create webplayer with the Synergetics AI admin panel.

## Limitations

For security purposes we prevent embedding webplayer in unsecure pages (via [CSP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)).
You can embed your webplayer on pages served over HTTPS or via HTTP on localhost.

