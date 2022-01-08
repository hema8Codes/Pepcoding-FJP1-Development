
// 1. function definition
function fn() {
    console.log("I am function definition");
}
fn();
// variable assignment
// let a = [10, 20, 30];
// let b = a;
// console.log(b);

// 2. function expression
let secondName = function originalName() {
    console.log("I am expression");
}
secondName();

console.log("Before");

// 3. IIFE -> Immediately Invoked Function Expression
(function drawBoard(){
    console.log("board is immediately drawn");
})();

// 4. Anonymous function
(function () {
    console.log("board is immediately drawn");
})

console.log("After");

let secondName2 = function () {
    console.log("I am expression");
}
secondName2();