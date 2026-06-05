// Map : creates a new array by performing some operation on each array element.
let arr = [45,56,67]

// console.log(arr);
let a = arr.map((value, index, array) => {
console.log(value, index, array);
return value + index
})
console.log(a);

// Filter Method: filters an array with values that passes a test & creates a new array

let arr2 = [23,54,77,2,8,36,75,4]
let a2 = arr2.filter((a) => {
    return a <10
})
console.log(a2, arr2);

// Reduce Method : reduces an array to a single value.
let arr3 = [ 1,2,3,4,5,6]
const reduce_func = (h1,h2) => {
    return h1 + h2
}
let newarr3  = arr3.reduce(reduce_func)
console.log( newarr3)