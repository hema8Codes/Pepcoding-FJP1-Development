
// Like substring
// start is inclusive, end is exclusive

// let arr = [10, 20, 30, 40, 50];
// let na1 = arr.slice(1, 4); // from 1 to 3 (4 not included)
// displayArray(na1);

// let na2 = arr.slice(1); // from 1 to end
// displayArray(na2);

// let na3 = arr.slice();
// displayArray(na3); // the entire array (can be used for cloning)

// let na4 = arr.slice(-3, -1); // from -3 to -2
// displayArray(na4);

// let na5 = arr.slice(-3); // from -3 to end
// displayArray(na5);

// let na6 = arr.slice(1, -2); // from -3 to end
// displayArray(na6);

// function displayArray(arr){
//     console.log(arr + " = " + arr.length);
// }

// shallow copies
// let o1 = {
//     age: 100
// };
// let o2 = {
//     age: 200
// }
// let o3 = {
//     age: 300
// }

// let anarr = [o1, o2, o3];
// displayObjectArray(anarr);

// let scopy = anarr.slice();
// displayObjectArray(scopy);

// scopy[0].age =110;
// displayObjectArray(anarr);
// displayObjectArray(scopy);

// function displayObjectArray(arr){
//     let str = "";

//     for(let i = 0; i < arr.length; i++){
//         str += arr[i].age + ", ";
//     }

//     console.log(str + ".");
// }

console.log("String Case -> primitive");

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

var t = animals.slice(2,4);
console.log(t);

t[0] = 'aaa';
console.log(t);
console.log(animals);

console.log("Object form of array Case");

var animals = [{name: 'ant'}, {name: 'bison'}, {name: 'camel'}, {name: 'duck'}, {name: 'elephant'}];

var t = animals.slice(2,4);
console.log(t);

t[0].name = 'aaa';
console.log(t);
console.log(animals);

// another example

let arr = [10, 20, 30, 40, 50, 60];
let na = arr.slice(); //slice for cloning is fine for integer array because ints are value type

displayArray(arr);
displayArray(na);
na[3] = 400;
displayArray(arr);
displayArray(na);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
