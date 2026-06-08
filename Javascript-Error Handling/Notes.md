Error Handling:
sometimes our script can have errors. usually a program halts when an error occurs.

- the try...catch syntax allows us to catch errors so that the script instead of dying can do some thing more reasonable.

The try...catch syntax has 2 main blocks: try and catch

try {
    //try the code
} catch (err) {   // err variable contaians an error object
    // error handling
}

working of try and catch:
1. first the code in try block is executed
2. if there is no erroe, catch is ignored else catch is executed.

try catch works synchronously

the finally clause : 
