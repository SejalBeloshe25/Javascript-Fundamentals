// // Inheritance in JS: 

// // Prototypal Inheritance : 


// //#1
// const p1 = {
//     fname: "Sejal",
//     lname : "Beloshe",
//     getFullName(){
//         return `${this.fname} ${this.lname}`;
//     },
// };

// // const p2 = {
// //     fname: "John",
// //     lname: "doe",
// //     getFullName(){
// //         return `${this.fname} ${this.lname}`;
// //     },
// // };

// const p2 = Object.create(p1);

// console.log("p1 is ", p1.fname);
// p2.__proto__.fname = "hack";

// console.log("p1 after is ", p1.fname);

// // p1 = {
//     fname: "sejal",
//     lname : "beloshe",
//     __proto__: {}
// }

// console.log (p1.fname);

// #2
// let fname1 = "sejal beloshe" 

// wrapper classes : string

const p1 = {
    xp1: "Iam inside P1",                     
};

const p2 = {
    xp2: "I am inside p2",
    __proto__: p1
};

const p3 = {
    xp3: "i am inside p3",
    __proto__:p2
};

// console.log(p3.xp1);

let s = "hey there"

console.log(s.__proto__);

// #4

class Student {
    constructor() {
        this.fname = "sejal";
    }

    getName(){
        return this.fname;
    }
}

// const s1 = new Student();
// const s2 = {__}
