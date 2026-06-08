let a = prompt("enter 1st number")

let b = prompt("enter 2nd number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

// try {
//     console.log("the sum is", sum * x);

// } catch (error) {
//     console.log("Error occure d");
// }
// finally {
//     console.log("files are being are closed and db connection is closed.");

// }


function main() {
    let x = 1;
    try {
        console.log("the sum is", sum * x)
        return true
    } catch (error) {
        console.log("error occured");
        return false
    }
  
        console.log("files are being are closed and db connection is closed.")
}

let c = main()