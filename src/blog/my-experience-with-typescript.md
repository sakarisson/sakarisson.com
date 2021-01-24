# My experience with TypeScript

I first programming at the beginning of my university studies, back in 2012. My first course was an introduction to programming in C++. As I was entirely new and inexperienced to the field of software development, my main focus at the time was to simply be able to improve my skills enough to make simple programs, such as FizzBuzz and a pythagoras calculator. At the end of the course I was proficient enough at C++ development that I was able to write simple apps that our professor gave us for homework. At this point I actually became pretty stoked about software development. Looking back, this C++ course was probably the initial thing that made me excited about programming.

Moving forward, we had a more general course focusing on low-level languages like Assembly, machine code, and even stuff like Turing machine programming.

## Enter JavaScript

What followed was my first introduction to the world of web development. This was a highly practical course that taught us HTML, CSS and JavaScript. My initial thoughts of JavaScript were that dynamic typing makes so much more sense. I had struggled with types in C++, and for my small school projects I hadn't seen any benefit in static typing.

From this point on I was hooked in JavaScript. It was my language of choice for pretty much anything. While studying I started to work on larger hobby projects. The first was a custom CMS for my personal blog. Unfortunately the source code is long gone, but the stack was [Pug](https://pugjs.org/) in the frontend, [Express](https://expressjs.com/) in the backend and [Postgres](https://www.postgresql.org/) in the data layer (I still hadn't discovered Mongo). 

It was also around this time that I landed my first job as a software developer at a tiny consultancy. Although my role pretty much included everything from managing physical servers to styling CSS, my main passion was still JavaScript, which I always tried to push given the chance. As I started to work on larger and larger JavaScript projects, I started to notice that I was introducing more bugs than in the past. Especially when refactoring codebases, I had to spend a long time going through the differences to make sure that there was nothing I had overlooked. At this point I had started to write a lot of tests to mitigate the frequent bugs. It helped, of course, but there were often undetected runtime errors that became obvious once I spotted them.
