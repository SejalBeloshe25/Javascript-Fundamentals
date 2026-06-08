Spread operator Syntax:
- spread syntax allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected. 
- In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created. 
- The Spread operator is used to expand or spread elements from an iterable(such as an array, string, or object) into individual elements.

- (...) spread operartor allow an iterable such as an array or string to be expanded into separate elements (unpacks the  element).

- uses of spread operator : 
1. copying an array
2. merging arrays
3. passing multiple arguments to a function 

example 1 : const arr = [1,3,5]
const obj = {...arr};  // {0:1, 1:3, 1:5}

example 2: const nums = [1,2,7]
console.log(sum(...nums))   // 10

Rest operators : 
The rest operator is used in function parameters to collect all remaining aarguments into an array. 