
function outer(first) {
    console.log(" Inside outer ");
    return function inner(second){
        console.log("Inside inner");
        return first*second;
    }
}

let rVal = outer(2);
console.log("Before calling rVal that contains inner");
let ans = rVal(4);
console.log(ans);