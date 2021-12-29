
// Remove all prime numbers from array

let arr = [10, 47, 15, 17, 92, 97, 93, 31, 46, 54];

for(let i = arr.length - 1; i >= 0; i--){
    let val = arr[i];
    let isPrime = IsPrime(val);
    if(isPrime == true){
        arr.splice(i, 1);
    }
}

displayArray(arr);


function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

function IsPrime(val){
    for(let div = 2; div * div <= val; div++){
        if(val % div == 0){
            return false;
        }
    }
    return true;
}