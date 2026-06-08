Destructuring:
- destructuring assignment is used to unpack values from an array , or properties from objects, into distinct variables. 
- provides the convenient way to extract values from objects and arrays and assign them to variables.  

let [x,y] = [7,20]

x will be assigned 7 and y is 20
[10,x,...rest] = [10,80,7,11,21,88]
x will be 80 & rest will be [7, 11,21,88]

similarly we can destructure objects on the left hand side of the assignment.

const obj = {a:1, b:2}
const {a,b} = obj;

