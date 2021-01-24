# My experience with TypeScript

I first programming at the beginning of my university studies, back in 2012. My first course was an introduction to programming in C++. As I was entirely new and inexperienced to the field of software development, my main focus at the time was to simply be able to improve my skills enough to make simple programs, such as FizzBuzz and a pythagoras calculator. At the end of the course I was proficient enough at C++ development that I was able to write simple apps that our professor gave us for homework. At this point I actually became pretty stoked about software development. Looking back, this C++ course was probably the initial thing that made me excited about programming.

Moving forward, we had a more general course focusing on low-level languages like Assembly, machine code, and even stuff like Turing machine programming.

## Enter JavaScript

What followed was my first introduction to the world of web development. This was a highly practical course that taught us HTML, CSS and JavaScript. My initial thoughts of JavaScript were that dynamic typing makes so much more sense. I had struggled with types in C++, and for my small school projects I hadn't seen any benefit in static typing.

From this point on I was hooked in JavaScript. It was my language of choice for pretty much anything. While studying I started to work on larger hobby projects. The first was a custom CMS for my personal blog. Unfortunately the source code is long gone, but the stack was [Pug](https://pugjs.org/) in the frontend, [Express](https://expressjs.com/) in the backend and [Postgres](https://www.postgresql.org/) in the data layer (I still hadn't discovered Mongo). 

It was also around this time that I landed my first job as a software developer at a tiny consultancy. Although my role pretty much included everything from managing physical servers to styling CSS, my main passion was still JavaScript, which I always tried to push given the chance. As I started to work on larger and larger JavaScript projects, I started to notice that I was introducing more bugs than in the past. Especially when refactoring codebases, I had to spend a long time going through the differences to make sure that there was nothing I had overlooked. At this point I had started to write a lot of tests to mitigate the frequent bugs. It helped, of course, but there were often undetected runtime errors that became obvious once I spotted them.

At my next job as a dedicated frontend developer, the issues with JavaScript started to become more and more obvious. As the codebase grew, changes would become more and more expensive. I started to focus more and more on writing solid tests, and looking back, I think I went a bit overboard. Many of my tests resulted in false positives, which also ended up taking more time than I'd have liked. 

## The case against comments

About a year after having started my first full-time frontend role, I applied to my current job at Wolt. I implemented my home assignment in JavaScript, and I still think it was pretty solid effort. This was in the latter half of 2018. I got in, and continued my JavaScript journey. It wasn't long after that my team decided to do an experiment with TypeScript. We had been implementing a screen in our React Native app that did some pretty heavy data transformation. Initially this was done in JavaScript. The transformations themselves ended up amounting to around 500 lines of code. Above each method we had to write pretty extensive documentation of what goes in and what goes out. All of these comments were essentially just documenting types, so we decided to go with the obvious approach and rewrite this small part of our app to TypeScript. 
