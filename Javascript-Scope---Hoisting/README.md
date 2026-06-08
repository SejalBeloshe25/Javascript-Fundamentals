JavaScript Scope and Hoisting

A structured repository to learn and practice JavaScript Scope and Hoisting concepts with notes, examples, and hands-on practice files.

📌 Topics Covered
1. Scope in JavaScript
Global Scope
Function Scope
Block Scope
Module Scope

2. Hoisting in JavaScript
Variable Hoisting
Function Hoisting
Hoisting with var
Hoisting with let and const

📂 Repository Structure
javascript-scope-hoisting/
│
├── README.md
├── Notes.md 
└── Practice.js

📖 Learning Objectives

- How JavaScript scope works
- Difference between global, function, and block scope
- How lexical scope and scope chain work
- What hoisting is internally
- Difference between var, let, and const hoisting
- Temporal Dead Zone (TDZ)
- Real examples and interview-based concepts

Scope Concepts
1. Global Scope

Variables declared outside functions are globally accessible.

let name = "JavaScript";

function show() {
  console.log(name);
}

show();

2. Function Scope

Variables declared inside a function can only be accessed inside that function.

function test() {
  let age = 20;
  console.log(age);
}

test();

3. Block Scope

let and const follow block scope.
{
  let city = "Pune";
  console.log(city);
}

Hoisting Concepts

1. Variable Hoisting with var
console.log(a);
var a = 10;

Output:
undefined

2. Hoisting with let and const
console.log(b);
let b = 20;

Output:
ReferenceError

3. Function Hoisting
greet();

function greet() {
  console.log("Hello");
}

Practice Files:
Notes.md - Contains detailed theory and explanations.

Practice.js - Contains practice questions and exercises.
