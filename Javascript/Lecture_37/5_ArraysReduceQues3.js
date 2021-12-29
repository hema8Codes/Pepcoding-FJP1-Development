
//union of two array

let arr1 = [10, 50, 70, 80, 90, 100, 30, 60];
let arr2 = [11, 50, 75, 85, 90, 100, 34, 60];

// a2ma1 -> a2 minus a1 -> a2 - a1

let a2ma1 = arr2.filter(v => arr1.includes(v) == false); // elements in a2 which are not in a1

console.log(a2ma1);

// arr1 U a2ma1

let union = arr1.concat(a2ma1);
console.log(union);

// union of arrays

let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34]
    [10, 51, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51]
    [11, 50, 75, 85, 92, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
    [10, 50, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
];

let union1 = arr2d.reduce(function(pv, cv, ci, oarr){
    let cvmpv = cv.filter(v => pv.includes(v) == false);
    let union = pv.concat(cvmpv);
    return union;
})
console.log(union1);

// [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92] (union of arrays)