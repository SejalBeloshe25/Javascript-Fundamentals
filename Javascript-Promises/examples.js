const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a prmoise");
        // resolve("success");
        reject(" Network error")
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled");   
});

promise.catch((err) => {
    console.log("rejected", err);
    
});



let promise = new Promise(function (resolve, reject) {
    console.log("I am a promise");
    reject("some error occured");
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}



let promise = new Promise(function (resolve, reject) {
    // alert(" Hello")
    // console.log("Hello coders")

    resolve(56)
})

console.log("Hello one");
setTimeout(function () {
    console.log("Hello two in 2 seconds");
}, 2000)

console.log("My name is" + " hello three");

console.log(promise)

// example 1:
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("succcess")
    }
    else {
        reject("failed")
    }
})

p.then((message) => {
    console.log("this is in the then : " + message)
}).catch((message) => {
    console.log("this is in the catch: " + message)

})

// Example 2: 

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am a promise and i am resolved")
        resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
    }, 5000)
})

console.log(p1, p2)

p1.then((value) => {
    console.log(valuue)

})

p2.catch((error) => {
    console.log("some error occured in p2")

})


// Promise chaining:

function asyncFunc1(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log(" data1");
            resolve("success");
            // reject("network error")
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log(" data1");
            resolve("success");
        }, 4000);
    });
}

console.log("Fetching data1......");
asyncFunc1().then((res) => {
    console.log("Fethching data2.........");
    asyncFunc2().then((res) => {});
});






let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds");
        resolve(56)
    }, 2000)
})

p3.then((value) => {
    console.log(value)
    let p4 = new Promise((resolve, reject) => {
        resolve("Promise 4")
    })
    return p4
}).then((value) => {
    console.log("we are done")
    return 2
}).then((value) => {
    console.log("Now we are finally done.")
})

// 
const loadScript = (src) => {
    return new Promise((resolve, rejecct) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = srcdocument.body.appendChild(script)
        script.onload = (script) => {
            resolve("Script has been loaded sir")
        }
        script.onerror = () => { PromiseRejectionEvent(0) }
    }, 2000)
}
let p1 = loadScript(".js")
p1.then((value) => {
    console.log(value)
    return loadScript(".js")
}).then((value) => {
    console.log("second script ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script.");
})


// Attaching Multiple Handlers :
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey I am resolved")
        resolve(1);
    }, 2000)
})
p5.then(() => {
    console.log("Congratulations this promise is now resolved");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 6000)
    })
}).then((value) => {
    console.log(value)
})
p5.then(() => {
    console.log("Hurray")
})


// The Promise API :
let p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 8");
    }, 1000);
});

let p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 9");
        reject(new Error("Error"))
    }, 2000);
});

let p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 10");
    }, 3000);
});

p8.then((value) => {
    console.log(value);
})
p9.then((value) => {
    console.log(value);
})
p10.then((value) => {
    console.log(value);
})

// let promise_all = Promise.all([p8,p9,p10])        // to print all values 
// let promise_all = Promise.allSettled([p8,p9,10])
// let promise_all = Promise.race([p8,p9,p10])
// let promise_all = Promise.any([p8,p9,p10])
// let promise_all = Promise.resolve(6)
let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => {
    console.log(value)

})

