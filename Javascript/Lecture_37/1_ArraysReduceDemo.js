
let arr = [10, 20, 30, 40, 50];

// pv -> previous value
// cv -> current value
// ci -> current index
// oarr -> original array

let sum = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " - " + cv + " - " + ci)
    return pv + cv;
});

// 10, 20, 1
// 30, 30, 2
// 60, 40, 3
// 100, 50, 4
// 150

console.log(sum);


let sum2 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + " - " + cv + " - " + ci)
    return pv + cv;
}, 5); // passing intial value as 5

// 5, 10, 0
// 15, 20, 1
// 35, 30, 2
// 65, 40, 3
// 105, 50, 4
// 155

console.log(sum2);

let sum3 = arr.reduce((pv, cv, ci) => pv + cv, 5);
console.log(sum3);