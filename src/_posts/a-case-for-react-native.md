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

Luckily those days are long gone. These days 

## Things to mention

React Native Web
