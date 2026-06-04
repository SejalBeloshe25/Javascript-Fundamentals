// // ES6 Modules :
// export const hello = () => {
//     console.log("hello Sejal");

// }
// export const ahello = (name) => {
//     console.log("Hello " + name);
// }

// const sejal = () => {
//     console.log("hello " + "Sejal");
// }

// export default sejal;

export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`)   
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`)  
}


