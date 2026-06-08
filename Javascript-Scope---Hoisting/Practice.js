// 1. concept of scoping : 
const a = 1 

function test() {
    const b = 2     // var b is scoped to the function test(). 
    console.log("Here", a , b);    
}
test()

// we'll get an error(b is not defined) cause variable b is defined inside the function & only accessible insidet that function. 
console.log(a,b);

// 2. Function scoping 

function testNum(){      // a function is just another type of block
    const c = 2 

    if (true){         // block scope : anything surrounded by curly braces is its own block scope.
        const d = 3
        console.log(d, c)
    }
    //  console.log("here", d, c)   : this will give error cause d is defined inside if 
}
testNum()


function testNum2(){      
const x = 2             // defined inside the function 
    if (true){  
        const x = 3       // defined inside the block (if)
        console.log(x)      // 3 ;  it wont overwrites the variable it just overtakes because of the block scope level
    }
    console.log(x)        // 2
}
testNum2()

// A good practice would be using different variable names or avoiding same variable names. 

 // Hoisting : 

// example 1  
 greet()   // No error : function called before declaration!

 function greet(){
    console.log("Good Morning");
}

// example 2  
console.log(f); // undefined 
var f = 9;       // declaration is hoisted to the top but not initialization
console.log(f); // 9


// console.log(b);  // Cannot access 'b' before initialization
let b = 2;
console.log(b); 

// console.log(c);  // Cannot access 'c' before initialization
let c = 5;
console.log(c); 


// Function expression: 
greetMe()        // cannot accessed greetMe before initialization
const greetMe = () => {
    console.log("Good Morning!");
}

greetMe2()        // cannot accessed greetMe2 before initialization
let greetMe2 = function() {
    console.log("Good Morning!");
}

// example 3 - sum function 

console.log(`sumFunc(1,2) => ${sumFunc(1,2)}`)
// 
function sumFunc(a,b){
    return a+b
}

const sumConst = (a,b) => a+b
console.log(`sumConst(3,2) => ${sumConst(3,2)}`)

// const sumConst = (a,b) => a+b  //cannot access sumConst before initialization
