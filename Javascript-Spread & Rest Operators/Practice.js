// SPREAD OPERATOR :
let arr1 = [3, 4, 8]
let obj1 = { ...arr1 }
console.log(obj1)       // { '0': 3, '1': 4, '2': 8 }
console.log(...arr1)      // 3 4 8

// // using function
function sumNum(v1, v2, v3) {
    return v1 + v2 + v3
}
console.log(sumNum(...arr1))

// copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);        // output: [1,2,3]

//Merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);         // output: [1,2,3,4,5]

// passing multiple arguments to a function
const numbers = [1, 2, 3, 4, 5]
sum(...numbers);
function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e);     // output:15
}


// spread on object 
let obj2 = {
    name: "sejal",
    company: "company xyz",
    address: "xyz"
}

// console.log({...obj2, name:"john", company: "ABC"});

// this will print the obj2 object without changing any values.
console.log({ name: "john", company: "ABC", ...obj2 });

// Question ? 
// 1: output of the following:
const a = " the ", b = "no"
const c = { a, b }
console.log(c);        // { a: ' the ', b: 'no' }


// Spread on Objects
const defaults = { color: "blue", size: "medium" }
// creating a product with default values and adding more properties 
const product = { ...defaults, price: 10, name: 'T-shirt' }
// instead of copying {color: "blue", size: "medium"} we use spread operator as {...defaults } ...object
console.log(product);


// Spread on Arrays
const number = [1, 2, 3]
const moreNumbers = [...number, 4, 5]

console.log(moreNumbers)

// example 1 
let username = "Sejal Beloshe";
let letters = [...username].join("-")
console.log(letters);            // S-e-j-a-l- -B-e-l-o-s-h-e

// example 2:
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let food = [...fruits, ...vegetables, "eggs", "milk"];
console.log(food);


// Rest operators : used on function parameters 

// const sum = (a,b) => {
//     return a+ b               // for more arguments to pass we use rest operator.
// }

const sum2 = (...numbers) => {
    let total = 0;
    numbers.forEach(number => total += number)
    return total
}
console.log(sum2(1, 2))
console.log(sum2(1, 2, 3, 4, 5))

// example:
display(1, 2, 3, 4, 5);

function display(first, second, ...restArguments) {
    console.log(first);       // output:1
    console.log(second);      // output:2

    console.log(restArguments);    // output:  [ 3, 4, 5 ]

}
