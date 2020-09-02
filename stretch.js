// Stretch Tasks

// 1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

(function(){
    var a = b = 3;
  })();
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));
  // console.log(a);
  console.log(b);

 // The a variable will be undefined but the b variable will be defined with a value of 3. The expression, var a = b = 3;, is evaluated right to left. The value 3 is assigned to b and then the value in b, 3,  is assigned to a. b is initialized without using a keyword(var, let, or const) and as a result is a global variable, existing everywhere even though it is defined inside the function. When the called function ends, a is function scoped and is garbage collected and so no longer exists. b continues as a global variable.


// 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

// ```js
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
// ```

function createBase(base){
  return (num) => base + num;
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));


// 3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

// Functional programming and Object-oriented programming are both programming paradigms that were designed to improve modularity in code, the ease of mutiple developers working on code at the same time, and the ease of testing and debugging. 

//FP does this by focusing on pure functions which only accept and return data, accessing no data from outside scopes or closures, create new data types without modifying existing ones, and produce no side effects. Eliminating side effects in these functions allows the logic of the program to be separated from the display or user interface component. FP is easy to test and debug because giving the function the same input will always produce the same output. Creating new data vs updating existing arrays and objects, prevents the need to know and track the state of data when using it. Whole programs are strung together like a series of mathematical operations. The code resembles evaluated expressions instead of statements. This also eliminates the need for intermediate variables. What is done is seen, how it's done is abstracted away. Some disadvantages of FP are that it is dense and may be difficult to understand for new programmers and the programming needs that can't be handled by pure functions still need to be handled in some way (side effects, I/O).

//OOP is a method of modularizing a program by modeling real-world objects. The attributes of the object and the methods that need to operate on the object's attributes are held together. Duplicates of this object can be created as instances which have access to their own copies of all attributes and methods. Side effects can be handled as instance methods or through interfaces designed to work across/connect objects. This helps in keeping data private and controlling how it is mutated. It can be a problem when multiple methods can mutate the same data; 'race' problems can occur. This type of programming can lead to very large programs with lots of duplicated methods. It can also be hard for new programmers to understand. 

//Both types seek to be modular, easier to change, and test one piece at a time. FP seems to modularize actions(verbs) which can be used across data types with the use of higher order functions and callbacks, while OOP seeks to be modular in terms of things (nouns) and the types of attributes and methods they have access to. In trying to think about which type would be a better paradigm, it seems to depend on the type of application. I could see the value of FP if I was designing a web app dashboard where I needed to use but not modify the original data and display it in some way. It would seem to be a waste of code to create instance variables with data attributes and methods attached if the data could be operated on using pure functions across data types. OOP would seem to be useful when data needs to be protected and mutated and stored, like personal bank accounts.

