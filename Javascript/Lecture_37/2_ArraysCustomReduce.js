
// cb -> callback
// iv -> initial value

Array.prototype.myReduce = function(cb, iv){

    let oarr = this;
    let pv;

    if(iv == undefined){

        pv = oarr[0];
        for(let i = 1; i < oarr.length; i++){
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr);
        }

    }else{

        pv = iv;
        for(let i = 0; i < oarr.length; i++){
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr);
        }

    }

    return pv;
}

let arr = [10, 20, 30, 40, 50];

// pv -> previous value
// cv -> current value
// ci -> current index
// oarr -> original array

let sum = arr.myReduce(function(pv, cv, ci, oarr){
    console.log(pv + " - " + cv + " - " + ci)
    return pv + cv;
});

// 10, 20, 1
// 30, 30, 2
// 60, 40, 3
// 100, 50, 4
// 150

console.log(sum);


let sum2 = arr.myReduce(function(pv, cv, ci, oarr){
    console.log(pv + " - " + cv + " - " + ci)
    return pv + cv;
}, 5); // passing intial value as 5

// 5, 10, 0
// 15, 20, 1
// 35, 30, 2
// 65, 40, 3
// 105, 50, 4
// 155

console.log(sum2);

let sum3 = arr.myReduce((pv, cv, ci) => pv + cv, 5);
console.log(sum3);