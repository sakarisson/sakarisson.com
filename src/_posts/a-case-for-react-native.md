---
title: A case for React Native
date: 2021-05-16
description: A dive into my experience with React Native, and a case for why it's more than just a tool for quick MVPs
---

Lately I've seen many discussions about React Native, often contrasting its commonly accepted benefits versus its commonly accepted cons.

I have worked with React Native for about 3 years at this point, so I feel like I might be able to contribute to the conversation.

When you saw the title you already knew my opinion. Many would say I think too highly of React Native, and that it is more suitable for quick MVPs than for creating truly great user experiences. In my experience I can understand why one would see it from this perspective, but in this article I will show why that often isn't the case.

## What is React Native anyway?

In short; React Native is a framework that allows developers to share business logic across apps in different platforms. Applications are mostly written in JavaScript (or some language that transpiles to JavaScript, such as TypeScript) and use React to control their UI. This already makes React Native very attractive to web developers, as skills for the most part transfer well.

We won't get too technical here, but it's worth diving a little bit into exactly _how_ React Native works. Essentially an application's business logic is mostly controlled by JavaScript, which runs on top of a native app. The JavaScript layer can make decision about the app and communicate those to the actual device through what is called [the bridge](https://dev.to/wjimmycook/how-the-react-native-bridge-works-and-how-it-will-change-in-the-near-future-4ekc).

## Issues with React Native

Since React Native was released back in 2015, there has always been a popular impression that it comes with performance tradeoffs. I do think these concerns are somewhat justified, since running business logic in a JavaScript engine that needs to communicate through an asynchronous bridge has more overhead than, well, not doing that.

A concrete issue with the bridge that is often brought up is low framerate for animations and interactions. The logic is quite simple - if our JavaScript thread needs to inform the app about its new animation state, there is a chance that the animation will have a "choppy" behavior. This issue can be compounded by the fact that JavaScript is single-threaded. This means that heavy operations can potentially block animations temporarily, potentially causing the app to "halt" its animation whenever some intensive computation is ongoing.

Below are some other common concerns that I hear about React Native:

- Upgrading and installing packages is a pain
- It's difficult to create a great user-experience with React Native
- Documentation is poor
- It's not truly cross-platform. For many use-cases it's still necessary to implement platform-specific logic
- Performance is an issue, especially on Android
- It's still version 0.xx, so it's probably unstable
- Airbnb gave up on it because it was too much of a hassle

## My perspective

I've been working on React Native for the best part of the last 3 years. During that time I've seen quite a few changes to the framework itself and to public opinion.

During the last couple of years, React Native has made some quite significant improvements, addressing most of the serious issues that I had with it.

In the following sections I am hoping to address some of the most frequent issues that people have with React Native.

### Animations and interactions

Since animations are controlled by JavaScript and incrementally communicated through the bridge, there is always the possibility of introducing a jaggy experience.

For a long time this has been a serious issue with React Native. However, in 2017 the `useNativeDriver` flag was introduced. [See the full post here.](https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated). What this setting does is to essentially offload all of the heavy lifting to the native side of the application. What this means in practice is that we can achieve buttery-smooth animations at 60 fps, even on low-end devices, and even when the JS thread is struggling.

For most use-cases `ReactNative.Animated` with `useNativeDriver`, but for more complex animations it's possible to use the [Reanimated library](https://github.com/software-mansion/react-native-reanimated). In principle it functions similar as the `useNativeDriver` flag - basically, the JavaScript thread is only responsible for creating the _configuration_ for the animation, and the rest is left to the native side.

To combine smooth interactions with animations, [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler) makes it a relative breeze to create rather complex interactions.

### Upgrading React Native

Keeping up to date with the newest version of React Native used to be a serious hassle.

I still remember our upgrade to v0.57, which resulted in a 24k line diff. It was such a big change that we decided that there is no point in trying to review it. Instead we merged the update into our development branch and spent a long time manually verifying that everything was still working as it should.

I've even heard from people whose upgrade method was to simply create a new project and copy-paste all their custom code. Needless to say, this is not ideal.

These days upgrading React Native is significantly easier. For me personally, the last couple of versions have been completely painless. The [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) is a nice tool that gives you a clear overview of all the changes you need to make, in the form of a git diff.

In my personal experience, upgrading React Native has become easier with each new version. Of course there's still quite a bit of manual work involved, so there is room for improvement. In the near future I expect that upgrades can be done largely automatically.

### Installing external dependencies

Installing packages in React Native projects used to require quite a bit of manual work. Linking wasn't trivial, and could put some people off.

With newer versions of React Native, installation is almost never a problem. In most cases a simple `yarn add <package_name>` is enough. In case the package adds some functionality that requires special permissions, it's also necessary to edit `AndroidManifest.xml` and `Info.plist` for Android and iOS, respectively.

### Creating great user experiences

A common trope of React Native is that it's not a good framework for creating truly great user experiences. As React Native has matured over the years, I feel like this is less and less the case.

As mentioned previously, the tooling for creating animations and interactions has leaped lightyears since the days where everything was controlled through the JavaScript layer. There are also other improvements, such as how in-app routing is handled with [React Navigation](https://reactnavigation.org/).

I'm sure it's fairly trivial to list off examples of poorly implemented React Native apps, but I can also think of many React Native apps that I truly adore. Just to list some off the top of my head:

- [Discord](https://blog.discord.com/how-discord-achieves-native-ios-performance-with-react-native-390c84dcd502)
- [Coinbase](https://blog.coinbase.com/announcing-coinbases-successful-transition-to-react-native-af4c591df971)
- [Shopify](https://engineering.shopify.com/blogs/engineering/react-native-future-mobile-shopify)
- [FlipKart](https://tech.flipkart.com/the-journey-of-react-native-flipkart-47dcd0c3d1c6?gi=9654e7be312c)
- [Wix](https://medium.com/wix-engineering/react-native-at-wix-the-architecture-db6361764da6)
- [Artsy](https://artsy.github.io/series/react-native-at-artsy/)

I think most people would agree that the applications listed above are examples of a great user experience. Personally I feel that React Native gives me the tools required to step above just creating apps that work, but also provide a great experience.

### Performance

One of the most important aspects of building an application for a wide variety of users is performance. Ultimately, it doesn't matter how nicely designed your app is or how useful its functionality if it does not perform well on your user's devices.

I've already touched on how you can use the `useNativeDriver` prop to improve the performance of your animations, but React Native also has some more tricks up its sleeve when it comes to performance. Some of these are specific to React Native, and others are also available in other React platforms, such as the web.

It would be possible to write a whole article just to provide an overview of the methods that we use to improve the performance of our apps. Hopefully in the future I will dive deeper into this specific topic, but for now let's just talk about one of my favorite React Native tools. Hermes!

Named after the Greek god of swiftness, [Hermes](https://hermesengine.dev/) is an open-source JavaScript engine optimized specifically for React Native. It improves performance by reducing launch time, precompiling JavaScript into more efficient bytecode, and decreasing memory utilization.

Feature-wise Hermes is intended to match [ES6](https://www.w3schools.com/js/js_es6.asp), with some carefully considered exceptions. For most use-cases switching to Hermes is as simple as flipping the `use_hermes` flag to true.

In the past there were two notable limitations to Hermes. Namely that iOS was not supported and that it lacked support for [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). Proxies are not something that most developers use regularly, but they are used by some popular libraries, such as MobX. However, since the [release of React Native v0.64](https://reactnative.dev/blog/2021/03/12/version-0.64), both of these limitations have been addressed, making transitioning that much easier.

Lastly on the topic of performance, I'd like to point out one of my favorite things about React Native - the fact that React Native developers are getting the best of both worlds. React on web has a huge community, and there is an abundance of performance optimization tools. On the other hand, as developers on a mobile platforms, we get access to several tools that are unavailable on web browsers. As such, choosing React Native gives you access to a wealth of information and tools to create the best possible user experience.

### Developer experience (DX)

Although the end result is a very important contributor to a framework's value, a good developer experience is absolutely a necessity.

Truth be told, React Native does come with some kinks in regards to DX. Its standard library leaves a lot to be desired, so in many cases developers need to rely on third-party libraries. There have been attempts to curate community extensions with [React Native Community](https://github.com/react-native-community), but even then it can be difficult for new React Native developers to know which solution to choose for a given problem. As an example, it's not clear that the official [SafeAreaView](https://reactnative.dev/docs/safeareaview) offers limited functionality compared to the third-party [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context).

Another aspect of developer experience is long-term maintainability, and on this topic there is an understandable concern that a framework that is still version 0.xx can introduce breaking changes. In the past few years, major releases have been reducing breaking changes and new major features, which is a good sign of long-term stability. In our 5-year old React Native application we haven't had any significant issues with upgrading the latest couple of major versions.

React Native also has some extra tools, which have seriously improved my development experience, and which I always miss whenever I find myself working on a web project. First of all there is fast refresh, which definitely lives up to its name. Any code change results in your application updating almost instantly, which means a short feedback loop. The only time you need to wait is during initial application load, and even that can be improved with [inline requires](https://reactnative.dev/docs/ram-bundles-inline-requires#inline-requires).

Lastly, React Native is of course based on React, whose declarative nature makes it easy to refactor business logic and rewrite or add new components.

## Alternatives to React Native

React Native is not the only cross-platform framework out there. The most viable alternative is probably [Flutter](https://flutter.dev/), although there are others, such as [Xamarin](https://dotnet.microsoft.com/apps/xamarin), [Cordova](https://cordova.apache.org/), [Ionic](https://ionicframework.com/) and [Unity](https://unity.com/). Each has its own strengths and weaknesses, and has use-cases.

Personally I do not have a lot of experience with these alternatives aside from Unity. I do know that Flutter is a very strong contender though, and has many features that make it a legitimate competitor to React Native. Most notably, Flutter does not have a bridge, but is rather compiled to a full native application. This means that some of the performance optimizations that we utilize in React Native already come for free.

## Things to mention

React Native Web
