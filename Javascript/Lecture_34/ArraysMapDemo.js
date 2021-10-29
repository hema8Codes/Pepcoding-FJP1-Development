// node ArraysMapDemo
// Map is itself a function
// Map takes as input a callback function (with v(value) and i(index))
// our function given to the map function is a callback function to this map function
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass each value and index to callback
// callback will process the value and index and return a single value
// values returned by each run of callback will be collected in a new array
// Map returns that new array


let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function (v, i){
    console.log(v + "@" + i);
    return v * v;
});
console.log(sqarr);

// let sqarr = arr.map(v => v * v);
console.log(sqarr);