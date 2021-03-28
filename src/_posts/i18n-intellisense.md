---
title: I18n intellisense
date: 2021-03-28
description: A little pro-tip to add type-safety to your dynamically translated messages
---

Recently I was introducing some of my new colleagues to our React Native codebase. After giving a brief rundown of the general architecture and showing them an example of how to add a new screen, one participant asked me how we managed to get our i18n.t function to auto complete in Visual Studio Code.

// TODO: Add image

Since there seems to be some interest for the subject, I figured I could write a quick blog post about it.

## The base i18n setup
