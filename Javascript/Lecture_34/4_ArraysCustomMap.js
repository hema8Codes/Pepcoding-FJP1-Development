
Array.prototype.myMap = function(callback){
    let res = [];
    for(let i = 0; i < this.length; i++){
        let val = this[i];
        let rv = callback(val, i, this);
        res.push(rv);
    }
    return res;
}
// Map is itself a function
// Map takes as input a callback function 
// The callback function takes 3 parameter (v, i, arr)
// Map will call the callback multiple times (once for each value)
// For each run of callback, map will pass v, i and original array to callback
// Callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array
// Map returns that new array equal in length to original array.
// Map returns that new array
let arr = [2, 5, 9, 8, 15, 11, 6];

let sqarr1 = arr.map(function (v, i){
    return v * v;
});
console.log(sqarr1);

let sqarr2 = arr.myMap(function (v, i){
    return v * v;
});
console.log(sqarr2);