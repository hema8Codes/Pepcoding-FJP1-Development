
let arr1 = [10, 20, 30];
console.log(arr1);

let arr2 = Array.of(10);
console.log(arr2);

let arr3 = Array.of(10, 20, 30, 40, 50);
console.log(arr3);

let arr4 = Array.from("Hemakshi"); // array like objects (for instance string, nodelist, arguments)
console.log(arr4);

let arr5 = arr4.map(ch => ch. charCodeAt(0)+ 1);
// let arr5 = arr4.map(ch => String.fromCharCode(ch. charCodeAt(0)+ 1));
console.log(arr5);

let arr6 = arr5.map(v => String.fromCharCode(v))
console.log(arr6);

let arr7 = arr4.map((ch, i) => i <= 1? String.fromCharCode(ch.charCodeAt(0) + 1) : String.fromCharCode(ch.charCodeAt(0) - 1));
console.log(arr7);

let str = arr6.join("");
console.log(str);