
Array.prototype.myFlat = function(td){

    let oarr = this;
    let res = [];

    customFlat(oarr, td, res);

    return res;
}

function customFlat(node, td, res){
    if(Array.isArray(node)){
    if(td > 0){
        for(let i = 0; i < node.length; i++){
            customFlat(node[i], td - 1, res);
        }
    }else{
        for(let i = 0; i < node.length; i++){
            res.push(node[i]);
        }        
    }
    } else {
        res.push(node);
    }
}

let arr2 = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];

let res4 = arr2.myFlat(0);
console.log(res4);

let res5 = arr2.myFlat(1);
console.log(res5);

let res6 = arr2.myFlat(2);
console.log(res6);

let res7 = arr2.myFlat(3);
console.log(res7);

let res8 = arr2.myFlat(Infinity);
console.log(res8);