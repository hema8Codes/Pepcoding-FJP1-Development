
// pop removes 1 value from the end 
// pop returns the removed value

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

let rv = arr.pop();
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}