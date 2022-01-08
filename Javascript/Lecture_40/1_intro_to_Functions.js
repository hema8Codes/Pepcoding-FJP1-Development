
// // function definition -> code 
// function sayHello(name){
//     console.log("Hello, ", name);
// }
// // function invocation -> this line actually runs that code
// sayHello("Hemakshi");

// // haven't called the function -> function name print
// console.log(sayHello);
// console.log("11", sayHello);

// // print the function after calling it -> returned value

// let rVal = sayHello("Janet");
// console.log("16", rVal);

// console.log("18", sayHello("Janet"));

// // if you don't pass anything to the function -> parameter undefined
// sayHello();

// 2. With return value

function sayHello(name) {
    console.log("Hello", name);
    return "returned from a function"
}

let retVal = sayHello("Elena");
console.log(retVal);