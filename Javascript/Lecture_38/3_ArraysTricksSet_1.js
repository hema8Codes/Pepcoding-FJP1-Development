
let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr[10] = 500; // no array out of index exception, increases the length
displayArray(arr);

arr["kuchbhi"] = 1000; // because every array can be used like an object also
displayArray(arr);
console.log(arr["kuchbhi"]);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}