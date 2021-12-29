Array.prototype.myFilter  = function(cb){
    let oarr = this;
    let res = [];
    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rbv = cb(v, i, oarr);

        if(rbv == true){
            res.push(v);
        }
    }
    return res;
}

let arr = [2, 5, 9, 8, 15, 11, 6];
let odd_arr = arr.myFilter(function(v, i, oarr){
    console.log(v + " @ " + i + " [" + oarr + "]");
    if(v % 2 == 1){
        return true;
    } else {
        return false;
    }
});
console.log(odd_arr);