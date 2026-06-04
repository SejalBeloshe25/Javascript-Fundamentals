// // Modules : import and export different sections of code from different files into other files.  
//  import sejal,  {hello, ahello} from "./module2.js"
// // const {hello , ahello} = require("./module1")     // commonjs
// hello()
// ahello("Srushti")
// ahello("Anushka")
// ahello("vaishnavi")
// ahello("Amruta")

// sejal()


import U, {printName as printUserName, printAge } from './module2.js'
    
const user = new U('Bob', 11)
console.log(user)
printUserName
printAge(user)
