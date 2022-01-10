
// function fn(param1, param2) {
//     console.log("Inside fn", param1, param2);
// }

// fn("Hello", "Hi");
// // if there is something missing then default is undefined
// fn("Hello");
// fn();
// fn("Hello", "Hi", "By")




// arguments
//emulate

function fn2(param1, param2){
    console.log(arguments);
    console.log(param1, param2);
}

fn2("Hello", "Hi");
fn2("Hello");
fn2();
fn2("Hello", "Hi", "By")


