
function powerCreator(exp){

    let fun = function(base){
        let rv = Math.pow(base, exp);
        return rv;
    }

    return fun;

}

let squarer = powerCreator(2);
let val = squarer(8);
console.log(val);

// how can you change squarer to cuber without calling powerCreator again
// you can change powercreator

// change powerCreator
// to make it a producer of such functions
// whose exponent we can change on a later date