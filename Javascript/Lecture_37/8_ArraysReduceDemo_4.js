
// compound function

let arr = [f, g, h];
arr.reduce(function(pv, cv, ci){
    let val = cv(pv);
    console.log(val);
    console.log(" " + pv + " " + "-" + " " + cv + " " + "-" + ci);
    return val;

}, 5)

// 5, f, 0
// f(5), g, 1 => 25, g, 1
// g(f(5)), h, 2 => 250, h, 2
// h(g(f(5))) => 50

function f(x) {
    return x * x;
}

function g(x) {
    return 10 * x;
}

function h(x) {
    return x / 5;
}

// method - 2

let f2 = (x) => x * x;
let g2= (x) => 10 * x;
let h2 = (x) => x / 5;

let arr2 = [f2, g2, h2];

let val2 = arr2.reduce((pv, cv, ci) => cv(pv), 5);
console.log(val2);

// h(g(f(5))) = h(g(25)) = h(250) = 50