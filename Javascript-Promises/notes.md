# 1 : Promise: 
- used for parallel execution. 
- The solution to the callback hell is promises.
- A promise is a "promise of code execution".
- The code either executes or fails in both the cases the subscriber will be notified.

syntax:
let promise = new Promise (function(resolve, reject)){
    // executor
};

Resolve and Reject are two callbacks provided by javascript. they are called like this:

resolve(value) -> if the job is finished successfully
reject (error) -> if the job fails

The promise object returned by the new promise has 2 properties :
1. State : initially pending, then changes to either "fulfilled" when resolve is called or "rejected" when reject is called. 

2. Result : initially undefined, then changes to value if resolved or error when rejected.

Consumers : then and catch

The consuming code receive the final result of a promise through then & catch.

The most fundamental one is then 
    promise.then(function(result){/* handle */ },
                 function(error) {/* handle error */}
    );

if we are interested only in successful competitions, we can provide only one function argument to .then() :

let promise = new promise(resolve => {
    setTimeout(() => resolve ("done"), 1000);
});

promise.then(alert);

if we are interested only in errors, we can use null as the first argument: .then(null,f) or we can use catch:

promise.catch(alert)

promise.finally (() => {}) is used to perform general cleanups 

 # 2 : Promise Chaining : 
we can chain promises and make them pass the resolved values to one another like this

p.then(function(result) => {
    alert(result); return 2;
}).then .....

the idea is to pass the result through the chain of .then handlers.

here is the flow of execution

1. The initial promise resolves in 1 seconds (Assumption)
2. The next .then() handler is then called, which returns a new promise (resolved with 2 values)
3. The next .then() gets the result of previous one and this reps on going.

Every call to .then() returns a new promise whose value is passed to the next one and so on. we can even create custom promises inside .then()


# 3 : Attaching Multiple Handlers :
We can attach multiple handles to one promise.
they don't pass the result to each other; instead they process it independently.

let p is a promise
p.then(handle1)
p.then(handle2)
p.then(handle3)

// they all run independently.

# 4 : Promise API :

there are 6 static methods of promise class.

1. Promise.all(promise) ----> waits for all promises to resolve and returns the array of their results.
If any one fails, it becomes the error and all other results are ignored.

2. Promise.allSettled(promise) ---> waits for all the promises to settle and return their results as an array of on objects with status and value.

3. Promise.race(promise) ---> waits for the first promise to settle and its result/error becomes the outcome.

4. Promise.any(promise) ---> waits for the first promise to fulfill (and not rejected), and its result becomes the outcome. throws aggregate Error if all the promises are rejected.

5. Promise.resolve(value) ---> makes a resolved promise with the given value.

6. Promise.reject(error) ---> makes a rejected promise with the given error. 
