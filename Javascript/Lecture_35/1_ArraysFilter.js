

// Filter is itself a function
// Filter takes as input a callback function 
// The callback function takes 3 parameter (v, i, arr)
// Filter will call the callback multiple times (once for each value)
// For each run of callback, filter will pass v, i and original array to callback
// Callback will process the value and index and return a single boolean value
// Single value returned by each run of callback will be used by filter
// Whenever a true is received by filter (returned by callback) then filter adds the v to a new array
// Filter returns that new array
// Length of returned array is equal to number of trues returned by callback


let arr = [2, 5, 9, 8, 15, 11, 6];
let odd_arr = arr.filter(function(v, i, oarr){
    console.log(v + " @ " + i + " [" + oarr + "]");
    if(v % 2 == 1){
        return true;
    } else {
        return false;
    }
});

console.log(odd_arr);