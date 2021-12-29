let arr = [5, 83, 24, 67, 71, 12, 24, 7];

// return cubes of values whose square <= 1000
// [5, 24, 12, 24, 7];
 
let cubes = arr.filter(v => v * v <= 1000).map(v => v * v * v);
console.log(cubes);

// Q1 gives me cubes of number whose cubes are less than 10000

let cubes2 = arr.filter(v => v * v * v <= 10000).map(v => v * v * v);
console.log(cubes2);

let arrnew=arr.filter((v,i)=>(v*v*v)<10000).map((v,i)=>v*v*v);
console.log(arrnew); 

let ans1 = arr.map(v => v * v * v).filter(v3 => v3 <= 10000);

// Q2 what is this returning = V6 for elements whose square <= 1000

let ans2 = arr.map(val => val * val).filter(v2 => v2 <= 1000).map(v2 => v2 * v2 * v2);
console.log(ans2);

