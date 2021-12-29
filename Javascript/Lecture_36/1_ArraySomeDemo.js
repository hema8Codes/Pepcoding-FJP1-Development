
Array.prototype.mySome = function(cb){
    let oarr = this;
    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rv = cb(v, i, oarr);
        if(rv == true){
            return true;
        }
    }
    return false;
}

let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 34, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
];

// some takes each value 1 by 1 nd returns a true if any cb returns true
// return false only if all cb return false

// Is there a valid candidate (F and between 20 and 30)
let isThereAnyValidCandidate = arr.mySome(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        return true;
    } else {
        return false;
    }
})

console.log(isThereAnyValidCandidate);