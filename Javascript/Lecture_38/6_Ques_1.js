// rearrange array so that all even elements are at the front and all odd elements are at the back (push, pop, shift, unshift)

// approach 1

// let arr = [23, 89, 66, 45, 78, 13, 44, 34];
// let temp = [];
// while(arr.length > 0){
//     let val = arr.shift();
//     if(val % 2 == 0){
//         temp.unshift(val);
//     }else{
//         temp.push(val);
//     }
// }

// arr = temp;
// console.log(arr);


// approach 2

let arr = [20, 30, 12, 17, 9, 18, 43, 64, 11, 47];
let odd = [];
let even = [];

let i = 0;

while(arr.length > 0){
    let val = arr.shift();
    if(val % 2 == 0){
        even.push(val)
    }else{
        odd.push(val);
    }
}

arr = even.concat(odd);

displayArray(arr);
displayArray(odd);
displayArray(even);


function displayArray(arr){
    console.log(arr + " = " + arr.length);
}



