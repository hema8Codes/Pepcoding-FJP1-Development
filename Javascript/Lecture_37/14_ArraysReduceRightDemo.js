const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue, currentIndex) {
  
  console.log(accumulator + "  " + currentValue + "  " + currentIndex);  
  return accumulator + currentValue;
}

let sum = numbers.reduceRight(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21