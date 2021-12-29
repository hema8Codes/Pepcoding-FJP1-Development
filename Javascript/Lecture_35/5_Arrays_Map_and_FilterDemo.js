// square of even numbers

let arr = [2, 5, 9, 18, 7, 34, 42, 45, 32];
let evenSq = arr.filter(v => v % 2 == 0).map(v => v * v);
console.log(evenSq);


