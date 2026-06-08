// // function  outer(){
// //     let username = "Sejal"
// // }
// // console.log(username);

// // example 1- 
// message = "Good global"
// function hello1() {
//     let message = "Good Morning"

//     // let message = "Good afternoon"
//     console.log("Hello 1" + message)

//     let c = function hello2() {
//         console.log("I am c" + message)
//     }
//     console.log(message)
//     return c
// }
// c = hello1()
// c()

// // example 2: 
// function init() {
//     var name = "Mozilla";  // name is a local variable created by init
//     function displayName() {
//         // disaplayName() is the inner function, a closure 
//         console.log(name);  // use variable declared in the parent function
//     } 
//     name = "Sejal"
//     return displayName;
// }
// let c = init();
// c()

// example 3 

function returnFunc() {


    const x = () => {
        let a = 1
        console.log(a)

        const y = () => {
            // let a = 2
            console.log(a)

            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 999 
        y()
    }
    return x
}

let a = returnFunc()
a()