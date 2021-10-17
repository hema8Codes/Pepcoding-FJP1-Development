//npm init
// npm install minimist
// node FirstJSON.js

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

// JSON = JavaScript Object Notation
// JSON means saving data in the same format as of javascript objects

let s1 = {
    name: "Hemakshi",
    age: 20
}; // s1 is an object. name and age are properties
// name and age are also called data memeber

console.log(s1.name);
console.log(s1.age);

let ages_Arr = [10, 20, 30];
console.log(ages_Arr[0]);
console.log(ages_Arr[1]);
console.log(ages_Arr[2]);

let names_Arr = ["Hemakshi", "Morgan", "Audrey"];
console.log(names_Arr[0]);
console.log(names_Arr[1]);
console.log(names_Arr[2]);

let arrOfObjects = [
       {
           name: "Hemakshi",
           age: 20
       },
       {
           name: "Morgan",
           age: 22
       },
       {
           name: "Audrey",
           age: 21
       }
]

console.log(arrOfObjects[0].name);
console.log(arrOfObjects[0].age);

console.log(arrOfObjects[1].name);
console.log(arrOfObjects[1].age);

console.log(arrOfObjects[2].name);
console.log(arrOfObjects[2].age);





