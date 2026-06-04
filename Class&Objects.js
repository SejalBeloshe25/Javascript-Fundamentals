// Object: it is an entity having state and behavior (properties and method).
// JS objects have a special property called prototype
const student = {
    fullName: "Sejal Beloshe",
    marks: 94.4,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};


const employee = {
    calcTax() {
        console.log("tax rate is 10 %");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    }
};

karanArjun.__proto__ = employee     // obj2.__proto__ = obj1

//prototype : is a special property. it is a reference to an object 

// if object and prototype have same method, object's method will be used.

// Classes : it is a program-code template for creating objects. 
// 

class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
    this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();   // object 1
// fortuner.setBranad("fortuner");
let lexus = new ToyotaCar();     // object 2
lexus.setBrand("lexus");

// Constructor : special method 


class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
    this.mileage = mileage;    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
    this.brandName = brand;
    }
}

let fortuner = new ToyotaCar("fortuner", 10);   // constructor
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 12);     // constructor
console.log(lexus);

// Inheritance : passing down properties and methods from parent class to child class

class Parent {
    hello(){
        console.log("hello");        
    }
}
class Child extends Parent {
    
}

// Inheritance : Inheritance is passing down properties and methods from parent class to child class. 

class Person {
    constructor() {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problems , build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let engObj = new Engineer();

// If child & parent have same method, child's method will be used. (Method overriding)

// Super Keyword : 
// the super keyword is used to call the constructor of ita parent class to access the parent's properties and methods. 

class People {
    constructor() {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}

class Engineers{
    constructor(name){
        super(name); // to invoke parent class constructor
    }
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}
let engObj = new Engineers("Sejal")


// practice : 
//1 : you are creating a website for your college. create a class user with 2 properties, name & email.
//  It also has a method called viewData() that allows user to view website data. 

//2 : create a new class called Admin which inherits from user.
//  add a new method called editData to admin that allows it to edit website data. 

let DATA = "secret information";
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;  
    }

    viewData(){
        console.log("data =", DATA);       
    }
}

class Admin extends User{
    editData(){
        DARA = "some new value"
    }

}

let student1 = new User("Sejal", "abc@gmail.com");
let student2 = new User("Seema", "xyz@gmail.com");

let teacher1 = new User("dean", "dean@gmail.com");

//2 : create a new class called Admin which inherits from user.
//  add a new method called editData to admin that allows it to edit website data. 

class user{
    constructor(){

    }
}

class Admin extends Employee {
    constructor (){

    }
    editData(){

    }
}