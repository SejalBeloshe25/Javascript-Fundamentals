const hello = () => {
    console.log("hello Sejal")
}
module.exports = hello;

const ahello = (name) => {
    console.log("hello" + name)
}
module.exports = { hello, ahello }    // same as below line
// module.exports = {hello : hello , ahello: ahello}