
// push appends 1 or more values at the end of array
// push returns the new length of array

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr.push(1000);
displayArray(arr);

arr.push(2000, 3000, 4000);
displayArray(arr);

let rv = arr.push(5000, 6000);
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
