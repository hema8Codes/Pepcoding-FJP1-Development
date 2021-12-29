
// count all primes using reduce

let arr = [51, 23, 37, 44, 73, 82, 97, 45];
let cp = arr.reduce(function(pv, cv, ci, oarr){

    let flag = true;

    console.log(pv + " - " + cv);

    for(let div = 2; div * div <= cv; div++){
        if(cv % div == 0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        return pv + 1;
    } else {
        return pv;
    }

}, 0);


console.log(cp);

// 0, 51
// 0, 23
// 1, 37
// 2, 44
// 2, 73
// 3, 82
// 3, 97
// 4, 45
// 4

