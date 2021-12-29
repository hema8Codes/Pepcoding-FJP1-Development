
let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [21, 54, 12, 33, 98, 200, 76, 100, 11, 291, 34];

// sort and reverse
sarr.sort();
console.log(sarr);

sarr.reverse();
console.log(sarr);

// narr.sort(); // does an alphabetical sort
// console.log(narr);

narr.sort((a, b) => a - b); // numerical sort
console.log(narr);

narr.reverse();
console.log(narr);