
// flatten 2D ARRAY
// convert 2D Array into 1D Array

let arr2d = [
    [10, 20, 30],
    [22, 17],
    [54, 58, 92, 34],
    [61, 31, 55, 92],
    [17]
]

let arr = arr2d.reduce(function(pv, cv, ci, oarr){
    let narr_joined = pv.concat(cv);
    console.log("[" + pv + "]" + "-" + "[" + cv + "]" + "-" + ci);
    return narr_joined;
}, [])

console.log(arr);
// [], [10,20,30] - 0
// [10,20,30], [22,17] - 1
// [10,20,30,22,17], [54,58,92,34] - 2
// [10,20,30,22,17,54,58,92,34], [61,31,55,92] - 3
// [10,20,30,22,17,54,58,92,34,61,31,55,92], [17] - 4
// [10, 20, 30, 22, 17, 54,58, 92, 34, 61, 31, 55, 92, 17]