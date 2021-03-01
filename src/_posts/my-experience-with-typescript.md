---
title: My experience with TypeScript
date: 24/01/2021
---
I first programming experience was at the beginning of my university studies, back in 2012. The initial course we had was an introduction to programming in C++. As I was entirely new and inexperienced in the field of software development, my main focus at the time was to simply be able to improve my skills enough to write simple programs, such as FizzBuzz and a pythagoras calculator. At the end of the course I was proficient enough at C++ development that I was able to write the simple apps that our professor gave us as homework.

Looking back, this C++ course was probably the initial thing that made me excited about programming.

Moving forward, we had a more general course focusing on low-level languages like Assembly, machine code, and even stuff like Turing machine programming.

## Enter JavaScript

What followed was my first introduction to the world of web development. This was a practical course that taught us HTML, CSS and JavaScript. My initial thoughts of JavaScript were that dynamic typing makes so much more sense. I had struggled with types in C++, and for my small school projects I hadn't seen any benefit in static typing.

From this point on I was hooked in JavaScript. It was my language of choice for pretty much anything.

While studying I started to work on larger hobby projects. The first was a custom CMS for my personal blog. Unfortunately the source code is long gone, but the stack was [Pug](https://pugjs.org/) in the frontend, [Express](https://expressjs.com/) in the backend and [Postgres](https://www.postgresql.org/) in the data layer (I still hadn't discovered Mongo). 

It was also around this time that I landed my first job as a software developer at a tiny consultancy. Although my role pretty much included everything from managing physical servers to styling CSS, my main passion was still JavaScript. I tried to push it at any given opportunity.

As I started to work larger projects, I began to notice that I was introducing more bugs than in the past. Especially when refactoring codebases, I had to spend a long time going through the differences to make sure that there was nothing I had overlooked. At this point I had started to write a lot of tests to mitigate the frequent bugs. It helped, but there were often undetected runtime errors that became obvious only after they had caused problems.

At my next job as a dedicated frontend developer, the issues with JavaScript started to become more and more obvious. As the codebase grew, changes would become proportionally more expensive and time-consuming.

I started to focus more on writing solid tests, and looking back, I think I went a bit overboard. Many of my tests resulted in false positives, which also ended up taking more time than I'd have liked. 

## The case against comments

About a year after having started my first full-time frontend role, I applied to my current job at Wolt.It wasn't long after that my team decided to do an experiment with TypeScript.

We had been implementing a screen in our React Native app that did some pretty heavy data transformation. Initially this was done in JavaScript. The transformations themselves ended up amounting to around 500 lines of code. Above each method we had to write pretty extensive documentation of what goes in and what goes out.

All of these comments were essentially just documenting types, so we decided to go with the obvious approach and rewrite this small part of our app to TypeScript. 

## First impression

My first impression of TypeScript was that it seemed to add a lot of complexity, and I did not immediately understand its benefits. I have to admit that I was a bit hesitant to move on with our TypeScript usage, as the typing itself seemed like an additional programming language with all the overhead that would come with it.

Although I saw the immediate benefit of being able to write less comments about types, I was unsure if the overhead would be worth it. Nevertheless, we agreed that any new component in our codebase should be written in TypeScript.

We also agreed that we would try to refactor any JavaScript files that we came across, provided the required work was relatively trivial.

Lastly we set a goal to immediately refactor our Redux store to TypeScript, as we felt that there was the most to gain in having our core datastore fully typed. 


Our prediction was that the benefits would become more and more obvious as our codebase slowly transformed to TypeScript.

## TypeScript's ugly side

We pretty quickly discovered that a few of our libraries and design patterns did not work very well with TypeScript.

The biggest offenders in our case were Ramda, Redux-Saga, and higher-order components. Ramda and Redux-Saga were simply not designed for TypeScript, and it requires a lot of work to force them to work as intended, if you don't want to just sprinkle `any`s all over the place.

Typing and composing higher-order components was a big challenge as well, especially for a newbie like myself. 

Although the above libraries posed a challenge in our daily work, we did see some light on the horizon. Ramda and Redux-Saga could potentially be refactored away, as JavaScript and React had come a long way since we originally introduced these libraries.

Our first goal was to get rid of Ramda, which turned out to be surprisingly painless, partially because most of our Ramda usage had plenty of tests. 


At the time of writing this, we haven't completely gotten rid of Redux-Saga, but it's also less of a problem than Ramda. 

Lastly, the answer to our higher-order component issue was answered in the form of hooks. These days we rarely if ever need to use higher-order components, and I can't remember when I last composed multiple HoCs together. 

Ultimately I feel that the reason why composing functions in TypeScript is hard is because JavaScript functions can take arguments of arbitrary types, and return arbitrary types. The same function might return a string for some input, a number for another, and an object for a third. This is of course not a great way of designing functions, but since it is possible in JavaScript, TypeScript needs to support it as well. 

## Light at the end of the tunnel

Earlier on I mentioned that we had been optimistic that the benefits of TypeScript would make themselves clearer as we migrated more of our JavaScript code. Today around 70% of our codebase has been happily migrated to or originally written in TypeScript. Most of the remaining 30% are legacy tests and Storybook files written in JavaScript, still dutifully performing their job against our migrated code. 

To me, the biggest single advantage of TypeScript (and really any other typed language) is how easy and even fun it makes refactoring code. The compiler will immediately warn you about any incompatibilities in your codebase, and often give you tips on how to fix your errors. This means that you don't have to spend hours painstakingly going through each file in your project just to make sure it still matches your expectations. The compiler does all of this boring work for you, so you can spend your time on more useful and ultimately fulfilling things.

## Taking it a step further with runtime types

As our ongoing efforts to refactor our app to TypeScripts started to pay dividends, the next question was this: how do we handle our network calls?

As developers we have a good understanding of what our endpoints are supposed to return, but it's always possible that something might change. What's the best way to validate our incoming data?

The answer, in our case, was [io-ts](https://github.com/gcanti/io-ts). It is a library that allows easy encoding and decoding or types. Maybe I'll dive deeper into this subject another time, but in short it gives us the ability to validate that our network requests respond with what we expect them to. `io-ts` then has the ability to add your own error handling, which you can go as far with as you want. Admittedly we haven't gone very far with it, but the immediate reporting alone is absolutely golden, and allows us to respond fast to unexpected changes in API contract.

## Disclaimer

In this post I have been talking a lot about the merits of TypeScript. In actuality most of the advantages are also applicable to other languages that transpile down to JavaScript.

One of my favorites is ReasonML. Technically it has al of TypeScript's advantages and more. The only reason I would hesitate to recommend it for larger projects is because of its small community. It can be difficult to learn because of out-dated or missing documentation, and it's also lacking many libraries that we use in TypeScript. That said, ReasonML has full interoperability with JavaScript and TypeScript. This means that you can import most packages from NPM to your Reason project. The only downside is that you're probably going to have to write the Reason types yourself, which can be a bit of a barrier for some people.

I'd definitely recommend giving non-TS languages a go though, especially for smaller projects! TypeScript I can recommend for frontend projects of any size though, since it's so similar to JavaScript and has a huge community.

## Conclusion

After largely refactoring our JavaScript project to TypeScript, I have truly gotten a feel for the benefits of a strongly typed language. I have even gotten to the point where I get a bad feeling whenever I need to interact with JavaScript code.

Overall I would estimate that we produce 80% less runtime errors because of TypeScript, and that we spend 30% less time on individual tickets.

In the year 2020 we saw TypeScript really take off, and I think in 2021 it will continue to dominate. I'm excited to see what the future has in store for the language. I predict that there might be some other language that isn't a superset of JavaScript that will eventually become the market dominator when it comes to frontend. Which language that is, I can't say. But I'm looking forward to finding out!
