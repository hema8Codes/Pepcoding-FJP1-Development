
// memory for the functions are allocated before the code is executed
// functions are created in heap
// and their address are stored in stack
// no function onverloading in JS

iamReal();
// 1 
function iamReal() {
    console.log("I am real");
}
// 2
function iamReal() {
    console.log("He isn't -> I am the real one");
}
iamReal();

