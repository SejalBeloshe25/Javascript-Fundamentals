Class:
A class is a kind of function.
Class is a blueprint for creating objects.
Classes help organize code using Object-Oriented Programming (OOP).

Basic Syntax:

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

Reason why class can be considered a syntactic sugar to define a constructor together with its prototype methods.

1. A function created by class is labelled by a special internal property [[IsClassConstructor]]: true
2. unlike a regular function, it must be called with new.
3. 