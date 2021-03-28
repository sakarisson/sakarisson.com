---
title: I18n intellisense
date: 2021-03-28
description: A little pro-tip to add type-safety to your dynamically translated messages
---

Recently I was introducing some of my new colleagues to our React Native codebase. After giving a brief rundown of the general architecture and showing them an example of how to add a new screen, one participant asked me how we managed to get our i18n.t function to auto complete in Visual Studio Code.

// TODO: Add image

Since there seems to be some interest for the subject, I figured I could write a quick blog post about it.

## The base i18n setup

There exist many different libraries for i18n. Some popular ones include react-intl, react-intl-universal, LinguiJS and i18next(TODO LINKS). They all have different philosophies and implementations. Some rely on translation components, and others provide hooks and higher order components that export some "translate" function.

The one thing that all i18n solutions have in common is that they rely on a message key. The key is essentially a unique string that references a translated message. Normally the messages are stored in a JSON file, and the key is simply the key in the localized JSON file. In our frontend apps we can then invoke our translate function with a specific key, and it will returns a localized message.

## The problem

One potential problem that you might experience when working with i18n is the case where no message was found for a given key. In this case there is no good option for the user, and as developers we have to fall back to handling the error as best we can. Some apps crash, but more commonly they just fall back to simply showing the input key instead of a message. Needless to say, this leads to a bad user experience, and it is something that should be avoided if possible.

## The solution

## Caveats

I should mention that we actually have a quite customized i18n implementation in our current project, so the actual solution in your own codebase may vary. I'd love to hear if there are any problems or blockers that would prevent you from adding similar intellisense for your i18n callback. Alternatively, if it was relatively easy, I'd love to hear that as well!
