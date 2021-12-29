
// some returns true if someone in the array fullfills the criteria
let arr = [3, 9, 15, 17, 21];
let isThereAnyEvenElement = arr.some(function(v, i){
    console.log(v + " - " + i);
    if(v % 2 == 0){
        return true;
    }else {
        return false;
    }
})
console.log(isThereAnyEvenElement);

let arr2 = [3, 9, 16, 17, 21];
let isThereAnyEvenElement2 = arr2.some(function(v, i){
    console.log(v + " - " + i);
    if(v % 2 == 0){
        return true;
    }else {
        return false;
    }
})

console.log(isThereAnyEvenElement2);