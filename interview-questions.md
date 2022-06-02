# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 
  `This` in JavaScript is used to describe the base properties of the component to which it (`this`) refers. When I was learning JS and React--especially when making apps--I used `this` when refering to variables in particular instance of an object. I have also used `this` in event handlers.

  Researched answer:
  `This` is a keyword in JavaScript. When inside an object's method `this` refers to the object itself. When it is alone, it refers to the global object which is usually the browser window. `This` refers to whatever object contains it--even the browser window.



2. What is React? Why would you use it?

  Your answer: 
  React is a library of Javascript components used for creating user interfaces; and each of those components can be used independently. React is very useful for creating applications that rely heavily on user interaction. For example, I used React to code a Pig Latin translator, and a translator that takes a string of user input and returns a string of what R2D2 might say.

  Researched answer:
  React is a Javascript library of independent, reusable components joined together to make scalable applications. It is tailored for user interface. It is very useful for single-page apps. Developers using React can create large web apps that can easily change data without reloading the page each time the user interacts with the application. 



3. Which lifecycle method is required in a React class component?

  Your answer: 
  The required lifecycle method in a React class component is the render() method. It, of course, makes sense because the whole purpose of a class component is to do something. There was a time when I was first learning about React when I forgot to put the render method into a component and I was wondering why I could not see a sample of my app in my browser.

  Researched answer:
  The render method should not modify the component state and return the same result each time it is invoked--it needs to remain "pure." It is returns the HTML, which is important when the focus of React is User Interfacing. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is a syntax extension that is a mix between JavaScript and HTML. The most notable difference between regular HTML and JSX that I have seen was the JSX version of HTML's class attribute is "class name" in camel case (className)

  Researched answer:
  Originally, the markup and the logic of an application would be put in separate files; JSX allows the logic and the markup to be used in the same file. HTML's `tabindex` is JSX's `tabIndex`. It also helps prevent XSS (cross-site-scripting) attacks by ensuring no one can inject anything not written in the app. 



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager that was meant to be a substitute other package managers that creates the file structure for React Applications. When I made some of my own smaller react apps, the files in the src directory were modified when I ran yarn.

  Researched answer:
  According to the yarn website: Yarn is a package manager that allows developers to securely share their code with each other. According to Meta website: yarn helps  developers with scaling that was more useful than npm.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  Researched answer:


## Looking Ahead: Terms for Next Week

1. Conditional rendering: ability to render different UI markup based on a condition's Boolean value

2. Object-oriented programming: focuses on objects to be manipulated rather than just the logic required to make them. With OOP the developer tries to identify how each object might relate to another one in their programming. OOP is helpful in dealing with vast, complex software systems

3. Ruby: A backend programming language meant to focus on simplicity and readability

4. Ruby blocks: they are like JS anonymous functions. they are created with do/end or curly brackets

5. Ruby hashes: they are structured similarly to JS objects in that they have key:value pairs. 
