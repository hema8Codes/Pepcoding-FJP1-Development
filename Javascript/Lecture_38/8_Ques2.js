// Print all subarrays using slice

let arr = [10, 20, 30, 40];

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j <= arr.length; j++){
        let sa = arr.slice(i, j);
        displayArray(sa);
    }
}

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
