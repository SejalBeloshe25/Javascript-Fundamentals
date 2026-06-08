// //  Sync in JS: everything executes in synchronously : Instruction exxecutes in the same sequence as they are written.
// console.log("One");
// console.log("two");
// console.log("three");


// // setTimeout : it is a function . it executes an function
// function hello() {
//     console.log("hello takes 4 seconds");
// }
// setTimeout(hello, 4000) // timeout ; 2s = 2000ms
// // we can write directly by making setTimeout function. 
// setTimeout(() => {
//     console.log("hello takes 2 seconds");
// }, 2000);

// console.log("four");
// console.log("five");

// // OUTPUT : here setTimeout works parallely first without time instructions gets executed and then setTimeout instruction executes according to time taken 
// // One
// // two
// // three
// // four
// // five
// // hello takes 2 seconds
// // hello takes 4 seconds

// //  Callbacks of Synchronous programming :

// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 2, sum)  // Output: 3  

// //In callback we can pass only function name as sum or also can pass the complete function

// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });                    // Output: 3  

// // Here sum is a function which is passed as an argumnet in another function calculator.
// // remember : while passing callback don't pass with parantheses.
// // like: calculator(1,2,sum())      // it will give an error. 

// // Callbacks of Asynchronous programming:

// const hello = () => {
//     console.log("hello");
// };
// setTimeout(hello, 3000);


// // Nesting : 
// let age = 19;           // nested if-else
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }

// for (let i = 0; i < 5; i++) {        // Nested for loop
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }

// // Callback Hell :

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }
// getData(1);    // 2s         // Data1
// getData(2);    // 2s         // Data2
// getData(3);    // 2s         // Data3

// Callback hell : it is a problem in javascript
// getData(1, () => {
//     console.log("Getting data2....");
//     getData(2, () => {
//         console.log("Getting data2....");
//         getData(3, () => {
//             console.log("Getting data4....");
//             getData(4);
//         });
//     });
// });
// this is nested callbacks : callback hell
// this is not an understandable code, therefore it's not a good way of programming. 
// Now this code give data 1 in 2s and then data2 in next 2s ... upto data4.


// here we get all the data exactly at the same time afte 2s delay but we want it one by one with 2s delay in each data.

function getData(dataId, getNextData) {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    });
}

// Solving by Promise chaining  : A solution to solve callback hell.

console.log("getting data1....");
getData(1)
    .then((res) => {
        console.log("getting data2.....");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data3.......");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });


// // getData(1)
// //     .then((res) => {
// //         return getData(2);
// //     })
// //     .then((res) => {
// //         console.log(res);
// //     });

// // getData(1).then((res) => {
// //     console.log(res);
// //     return getData(2).then(()=> {
// //         console.log(res);
// //     });
// // });


