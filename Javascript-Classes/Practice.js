// // Class example :

// class User {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         alert(this.name);
//     }
// }

// alert(typeof User); // Function

// alert(User == User.prototype.constructor); // True

// alert(User.prototype.sayHi); // code of sayHi method 

// alert(Object.getOwnPropertyNames(User.prototype)); // constructor,sayHi


// Declaring same things without class keyword

// rewriting class User in pure functions

// 1. Creating constructor function
function User(name) {
    this.name = name;
}

// A function prototype has a "constructor" property by default. So no need to create it.

// 2. Add the method to prototype
User.prototype.sayHi = function() {
    alert(this.name);
};

//Usage:
let user =  new User("John");
user.sayHi();
