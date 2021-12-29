Array.prototype.myFind = function(cb){
    let oarr = this;
    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rv = cb(v, i, oarr);

        if(rv == true){
            return v;
        }
    }
    return undefined;
}
let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 34, gender: "F"}, 
    {name: "D", age: 34, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 38, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
];
// find gives value against first true, if there is no true then undefined
// First valid candidate (F and between 20 and 30)
let fvc = arr.myFind(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        return true;
    } else {
        return false;
    }
})
if(fvc != undefined){
    console.log(fvc.name + "@" + fvc.age + "#" + fvc.gender);
} else {
    console.log("Not Found")
}
