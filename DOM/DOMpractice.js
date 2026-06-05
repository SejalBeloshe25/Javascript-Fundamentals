// Create a new button element. give it a text "click me", background color of red and text color of white. 
// insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!!!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);


// 2 : 
