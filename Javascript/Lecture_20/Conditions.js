let clargs = process.argv;
let n = parseInt(clargs[2]);

if(n % 2 == 0){
    console.log(n + " is even");
} else {
    console.log(n + " is odd");
}