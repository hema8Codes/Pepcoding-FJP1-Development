
let arr = [2, 19, 34, 72, 11, 64, 55, 98];

let barr = arr.map(function(v, i){
    if(v % 2 == 0){
        return true;
    }else{
        return false;
    }
});

// let barr = arr.map(v => v % 2 == 0);

console.log(barr);