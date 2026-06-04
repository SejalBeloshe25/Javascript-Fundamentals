// Event : the change in the state of an object is an event. 
// types : 1. mouse events(click, double click etc. )
//             


// Inline event handling : 

// event handling in js :

// BigInt.onclick

let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);   
//     console.log(evt.type);
//     console.log(evt.clientX, evt.clientY);
//     console.log(evt.target);      
// };

//  Using eventListeners : 

// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked ");
//     console.log(evt);
//     console.log(evt.type);
// });


// 
btn1.addEventListener("click", () => {
    console.log("btn1 was clicked - handler 1");
});


btn1.addEventListener("click", () => {
    console.log("btn1 was clicked - handler 2");
});

const handler3 = () => {
    console.log("button was clicked - handler 3");
    
}

btn1.addEventListener("click", handler3);


btn1.addEventListener("click", (evt) => {
    console.log("btn1 was clicked - handler 4");
});

// the callback reference shpuld be same to remove
btn1.removeEventListener("click", handler3);



// 
let box = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside");            
}

let div1 = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("you are inside div");
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
    console.log(evt.target);
    
}

// Priority will be javascript handling instead of html code.

// Event Object : special object that have access to the event.
// all event handlers have access to the event object's properties and methods. 


// Event Listeners : 



// Practice :