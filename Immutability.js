// Immutable : something that can't be changed.
//  In programming : A value that cannot be changed after it's been set.

// primitives : strings, numbers are immutable by default. once it's created, it can't be changed

let greet = "hello";
greet += "world";
console.log(greet);

// here a string hello is created and assigned to greet variable then append a new hello world string is created and assigned to greet variable.
// the original hello string is not modified a new hello world string is created 
// string value is immutable but greet variable is modified. 

let total = 42;
total += 10;
console.log(total);

// same as above 

// arrays : are mutable by default , can be modified in place.
 
let ages = [42,22,35];
ages.push(8);
console.log(ages);

// the variable ages don't save the array it saves the meomry address of that array. 
// push method has changed the original array by adding 8 to the end.
// Array value is mutable. 
// it has unintended side effects. 
// Setters 
// Change detection
// state management

// to avoid these problems use patterns or methods that do not alter the original array but return a new array. 


let ages2 = [42,22,35];
ages2 = [...ages,8];         // spread operator makes the copy of the existing array adding new address by spreading the existing array.
console.log(ages);

// by using spread operator we achieved immutability

//  Immutable : 
ages.filter(x => x >21);
ages.slice(1,3);
ages.map(x => x+1);

// Mutable :
ages.push(8);
ages.sort(); 
ages.splice(2,1,18)

// objects:mutable by default, can be modified in place
let p = {name: "sejal",
    age: 19};
    p.age = 20
    console.log(p);     

let p = {name: "sejal",
    age: 19
};
p = {...p, age:20};
console.log(p);

// Immutable is important:
// a value can't be changed after it is created. 
