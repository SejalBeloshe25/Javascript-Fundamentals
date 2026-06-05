// Window Object: open window in a browser. automatically created by browser.  global object with lots of properties and methods.         

// DOM : Document Object model : all the code of html is available in window object of document object(model).
      
// DOM is used for dynamic changes in the webpage
;
// DOM Manipulation : 
// console.dir(window.document);

// 1 : Selecting with Id : document.getElementBYiD(" myId")
// 2 : Selcting with class : document.getElementByClassName("myClass")
// 3 : document.getElementByTagName("p")

// 4 : Query Selector :

// let firstEl = document.querySelector(".myclass");    // firstEl
// console.dir(firstEl);

// let allEl = document.querySelectorAll("#myid");   // all elements
// console.dir(allEl);

// Properties : get and set 
// 1 . tagName : 
// 2 . innerText :
// 3 .  inner Html : 
// 4 .  text content :           

// Read About -- homework : 
// Nodes : text, comment , element 
// Firstchild, lastchild 

// Practice : 

// Create a h2 heading element with text - " hello Javascript".
//  Append "from Apna Collge students " to this text using JS

// let h2 = document.querySelector("h2");
// console.dir(h2);

// console.log(h2.innerText); 
// h2.innerText = h2.innerText + "from Apna College Students";     // concatenate

// Create 3 divs with common class name - "box". Access them and add some unique text to each of them. 

let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1 "
// divs[1].innerText = "new unique value 2 "
// divs[2].innerText = "new unique value 3 "

let idx = 1;
for(div of divs) {
  div.innerText = `new unique value ${idx}`
  idx++;
}

//  Part 2 : Attributes  : 


// getAttribute(attr) // to get the attribute value. 

let div = document.querySelector("div");
console.log(div);


let id = div.getAttribute( "id");
console.log(id);


let name = div.getAttribute( "name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.getAttribute("id"));


// setAttribute (attr, value) // to set the attribute value

let paragraph = document.querySelector("p");
console.log(paragraph.setAttribute("class", "newClass"));

style : 

Practice : 

let element1 = document.getElementById("para1");
console.log(element);

let element1 = document.getElementsByClassName(".text");
console.log(element1);


let element = document.getElementById("example");
console.log(element);


let div = document.querySelector("div");

div.style.backgroundColor = "purple";
div.innerText = ("hello");
div.style.fontSize = "23px";


// Insert Elements : 
Node.append(el)  // adds at the end of node(inside).
Node.prepend(el) 

let newBtn = document.createElement("button");
newBtn.innerText = "click me !!!";
console.log(newBtn);


let div = document.querySelector("div");
div.prepend(newBtn);        //  adds a button at the top of the div 

let p = document.querySelector("p");
p.after(newBtn);          // adds a button after the paragraph

// inserting elements : 

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am new! </i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();

//  read about : appendchild() and removechild() 