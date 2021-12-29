
// node ArraysReduceDemo.js
// reduce is a function
// it takes as input a callback
// callback has 3 parameters - pv (previous value), cv (current value), ci(current index)
// for the first call to reduce, pv is 0th value, cv is 1st value and ci is 1


let arr = [10, 20, 30, 40, 50];
let val = arr.reduce(function(pv, cv, ci){
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
});

console.log(val);

let valarrow = arr.reduce((pv, cv, ci) => pv + cv);

console.log(valarrow);

let arr2 = [10, 20, 30, 40, 50];
let val2 = arr2.reduce(function(pv, cv, ci){
    console.log(pv + "-" + cv + "-" + ci);
    return pv * cv;
});

console.log(val2);

let val2arrow = arr.reduce((pv, cv, ci) => pv * cv);

console.log(val2arrow);


