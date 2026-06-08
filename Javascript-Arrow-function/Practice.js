// 1 : Arrow Function Syntax :
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b){
    return a + b;
};
*/

alert(sum(1, 2)); //3 

// 2 : If no arguments then parantheses are empty but must be present:
let sayHi = () => alert("Hello");
sayHi();

// 3 :
let age = prompt("what is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Grettings!");

welcome();

// 4 : 
const sayHello = () => {
    console.log("Hello")
}
sayHello()

// 5 : 
const sayHelloName = (name, greeting) => {
    console.log(greeting + " " + name)
}
sayHelloName("Sejal", "Good afternoon")

// 6 :
const x = {
    name: "sejal",
    role: "JS developer",
    experience: 2,
    show: function () {
        // let that = this
        // console.log(this)
        setTimeOut(() => {                // Arrow function usses lexical this
            console.log(`the name is ${this.name}\n the roe is ${this.role}`)
        }, 2000)
    }
}
console.log(x.name, x.experience)

// x.show()


// Multiline arrow functions:

let sum = (a, b) => { // the curly braces open a multiple function.
    let result = a + b;
    return result;  // if curly braces are used then need an explicit "return"

};

alert(sum(1, 2)); // 3


// Task : replace function expression with arrow function
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "do you agree?",
    function () { alert("you agreed."); },
    function () { alert("you canceled the execution."); }
);

// Replaced with arrow function:
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "do you agree?",
    () => alert("you agreed."),
    () => alert("you canceled the execution.")
)

// 