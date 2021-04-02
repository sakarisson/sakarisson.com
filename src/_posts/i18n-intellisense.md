---
title: I18n translate intellisense
date: 2021-03-28
description: A little pro-tip to add type-safety to your dynamically translated messages
---

I18n (internationalization) is shorthand for techniques we use in web development to localize our applications. I18n includes everything from translations, number and message formatting, left-to-right or right-to-left text orientation, and more.

In this article I will share a little trick that made our i18n translation function (`i18n.t`) saver and easier to use, with the power of TypeScript.

Recently I was introducing some of my new colleagues to our React Native codebase. After giving a brief rundown of the general architecture and showing them an example of how to add a new screen, one participant asked me how we managed to get our `i18n.t` function to auto complete in Visual Studio Code.

![i18n autocomplete screenshot](/static/images/i18n-intellisense.png)

Since there seems to be some interest for the subject, I figured I could write a quick blog post about it.

## The base i18n setup

There exist many different libraries for i18n. Some popular ones include [react-intl](https://formatjs.io/docs/getting-started/installation/), [react-intl-universal](https://github.com/alibaba/react-intl-universal), [LinguiJS](https://lingui.js.org/) and [i18next](https://www.i18next.com/). They all have different philosophies and implementations. Some rely on translation components, and others provide hooks and higher order components that export some "translate" function.

The one thing that all i18n solutions have in common is that they rely on a message key. The key is essentially a unique string that references a translated message. Normally the messages are stored in a JSON file, and the key is simply the key in the localized JSON file. In our frontend apps we can then invoke our translate function with a specific key, and it will returns a localized message.

Below is an example of the JSON structure of our `[language].json` file

```json
{
  "intellisense.demo.greeting": {
    "message": "Hello, world!",
    "description": "A message that is shown in my i18n intellisense demo"
  },
  "intellisense.demo.header": {
    "message": "I18n translate intellisense",
    "description": "The title of this article"
  }
}
```

It's a flat and simple key/value store. In order to invoke a translated message, we simply call `i18n.t(KEY)`. Easy, and no mess.

## The problem

As our codebase grew we realized that the lack of type safety in our `i18n.t` function could lead to problems. If we accidentally call a non-existent key, our system would have no way to know which message to render, so it would fall back to simply showing the input key. Not a good user experience!

If only there was some way for TypeScript to know which keys are allowed in this function...

## The solution

In our case the solution was rather simple! We simply imported the raw JSON file, and tell our i18n library that only keys of that JSON should be considered valid keys.

```typescript
import en from 'src/locales/en.json';

export type ValidI18nKey = keyof typeof en;

export type TranslateFunction = (
  message: ValidI18nKey,
  params?: { [key: string]: string | number },
) => string;
```

Immediately after making this change, our TypeScript compiler started throwing errors. In most cases they were caused by dynamically generating the key, which TypeScript would interpret as `string`. Not specific enough. Below is a contrived example of such an issue:

```typescript
const getKey = (age: number) => {
  if (age < 13) {
    return 'age_group.child';
  }
  if (age >= 13 && age <= 19) {
    return 'age_group.teenager';
  }
  return 'age_group.adult';
};
```

Even if all 3 return types of that function match i18n keys, TypeScript still only infers that the function returns `string`. Luckily in these cases the solution is very simple. We need to explicitly tell TypeScript that it returns a `ValidI18nKey`, like so:

```typescript
const getKey = (age: number): ValidI18nKey => {
  if (age < 13) {
    return 'age_group.child';
  }
  if (age >= 13 && age <= 19) {
    return 'age_group.teenager';
  }
  return 'age_group.adult';
};
```

And that's it! If any of the possible return values _does not_ match `ValidI18nKey`, then TypeScript will tell us about it. Otherwise it's happy to consider this function as returning i18n keys.

### Nested translation JSON files

Our project is a quite simple case, as our JSON structure is flat. There are many projects with a nested JSON structure, in which case our simple solution does not immediately work. Where there's a will, there's a way though, and with modern TypeScript we can do some pretty amazing things.

The following TypeScript helper can parse nested paths to return similar strings as in my flat structure above:

```typescript
type Join<K, P> = K extends string | number ?
    P extends string | number ?
    `${K}${"" extends P ? "" : "."}${P}`
    : never : never;
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]
export type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
  { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : "";
```

For full transparency, I did not write this myself, but found it on [this StackOverflow answer](https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object/58436959#58436959).

It can be used like this. Assume you have the following JSON structure:

```json
{
  "intellisense": {
    "demo": {
      "greeting": {
        "message": "Hello, world!"
      },
      "header": {
        "message": "I18n translate intellisense"
      }
    }
  }
}
```

It could then be parsed like this.

```typescript
import en from 'src/locales/en.json';

type ValidI18nKey = Leaves<typeof en, 3>; // "intellisense.demo.greeting" | "intellisense.demo.header"
```

## Caveats

I should mention that we actually have a quite customized i18n implementation in our current project, so the actual solution in your own codebase may vary. I'd love to hear if there are any problems or blockers that would prevent you from adding similar intellisense for your i18n callback. Alternatively, if it was relatively easy, I'd love to hear that as well!

## Conclusion

I hope you enjoyed this exploration into TypeScript, i18n, and how they can be used to make each other stronger!

If you found this post interesting or if you have some comment, [feel free to contact me on Twitter](https://twitter.com/KSakarisson). My DMs are always open.
