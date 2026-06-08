// DESTRUCTURING :

let arr = [3,5,8,12,2,34]

// let a = arr[0]
// let b = arr[1]      // No need to do this

let [a,b,c, ...rest] = arr
console.log(a,b,c, rest);         // output : 3 5 8 [ 12, 2, 34 ]

// if we want only 1st element and skipping some middle and have some elements from end.\

// let [a, , ,  ...rest] = arr
// console.log(a, rest)              // output : 3 [ 12, 2, 34 ]



// let{a,b} = {a:1, b:5}
// console.log(a,b)          // output : 1 5


const person = {
    name: "Swaroop",
    age: 12,
    city:"Mumbai"
};

// if we want to access properties of person then --
// ex:  person.name 
// if want to repeat same properties for many time in code then better to assign it to variable and then reuse it.
// ex: const name = person.name      
//  ex: by using destructuring - destructure the name and age from this person

const { name, age } = person 
console.log(name);
console.log(age);

// Array destructuring
const fruits = ["apple", "banana", "orange"]

// ex: const firstFruit = fruits[0]
// console.log(firstFruit);

// use destructuring method to destructure the itesm from the array
const [firstFruit, secondFruit] = fruits
console.log(firstFruit)
console.log(secondFruit)

// 
const obj = {m:1, n:2}
const {m,n} = obj;
console.log(m,n);
