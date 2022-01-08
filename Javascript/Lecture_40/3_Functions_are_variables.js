
// fn definition
function fn(param) {
    console.log("I am function definition", param);
    // param();
}

// string -> value
fn("Hello");
// boolean -> value
fn(true);
//address
// object
let obj = { name : "Hemakshi" };
fn(obj);
// array
let arr = [10, 20, 30];
fn(arr);


// function are also variables -> functions are first class citizens in JS

function chotaFn() {
    console.log("Hello i am a chota fn");
}

// function can also be passed as an argument in a function

fn(chotaFn);
