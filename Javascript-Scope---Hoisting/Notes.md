#1. Scope: Deteremines the accessibility of variables
    3 types of scopes in javascript -
    
1. global scope:
- varibles declared globally (outside any block or function ) have Global scope.
- It is accessible everywhere in a javascript program
- A variable declared outside a function, becomes GLOBAL.

2. Module Scope:
 - variables are only accessible inside the file they are defined &  

global scope vs Module scope:

In global scope if we define a variable, it is available in every other file that gets loaded after it. 

In module scope if we use modules means we define a vaiable in a file then it's only available within that file unless we explicitly export that out

3. function scope:
- All JavaScript functions have their own scope.
- Variables defined inside a function are not accessible (visible) from outside the function.
- A function is another type of block

4. block scope:
- Variables declared with let and const inside a code block or curly braces{} are "block-scoped," meaning they are only accessible within that block.
- Variables declared with the var keyword can NOT have block scope.
- Variables declared with the var keyword, inside a { } block, can be accessed from outside the block.

var- function scoped
let & const - block scoped

#2. Hoisting : 

Hoistging refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of the code, before execution of the code.

- function expressions and class expressions are not hoisted. 

- variables thus can be referenced before they are declared in javascript. 

- var keyword hoist the initialization of that variable to the top of the file. 

- only normal functions are hoisted, arrow functions defined with const or let are not hoisted 

- Imp:- Javascript only hoists declarations. 
        The variable will be undefined until the line where its initialize is reached.

Summary : 

console.log(num)
const/let num = 2;      // error 
var num = 2;            // undefined 