
let arr = [10, 20, 30, 40, 50, 60];
arr.fill(5, 1, 4);
console.log(arr);

arr.fill(7, 2);
console.log(arr);

arr.fill(8);
console.log(arr);

let arr1 = [10, 20, 30, 40, 50, 60];
arr1.copyWithin(2, 4, 6);
console.log(arr1);

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
arr2.copyWithin(3, 0, 2);
console.log(arr2);