
// let arr = [10, 20, [50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];

// let res1 = arr.flat();  // [ 10, 20, 50, 60, [ 90, 100 ], 30, 70, [ 110, 120 ], 80, 40 ]
// console.log(res1);

// let res2 = arr.flat(1); // [ 10, 20, 50, 60, [ 90, 100 ], 30, 70, [ 110, 120 ], 80, 40 ]
// console.log(res2);

// let res3 = arr.flat(2); // [10, 20, 50,  60,  90, 100, 30, 70, 110, 120, 80, 40]
// console.log(res3);




let arr2 = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];

// let res4 = arr2.flat(0);
// console.log(res4);

// let res5 = arr2.flat(1);
// console.log(res5);

// let res6 = arr2.flat(2);
// console.log(res6);

let res7 = arr2.flat(3);
console.log(res7);
