let clargs = process.argv;
let n = parseInt(clargs[2]);

let isPrime = true;
for(let div = 2; div * div <= n; div++){
    if(n % div == 0){
        isPrime = false;
        break;
    }
}

if(isPrime == true){
    console.log(n + " is prime");
} else {
    console.log(n + " is not prime");
}
