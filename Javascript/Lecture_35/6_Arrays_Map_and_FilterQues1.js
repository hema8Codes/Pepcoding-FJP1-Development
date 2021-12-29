
let products = [
    { name: "T-Shirt" , price: 25},
    { name: "Headphones" , price: 125},
    { name: "Keyboard" , price: 75},
    { name: "Monitor" , price: 200},
];

//return names of all products in uppercase who has price >= 100


console.log("names of all products in uppercase who has price >= 100");

let fprds = products.filter(p => p.price >= 100).map(p => p.name.toUpperCase());
console.log(fprds);

let fprds2 = products.filter( function(v, i, oarr){
    if(v.price >= 100){
        return true;
    }else{
        return false;
    }
}).map(function(v, i, oarr){
    return v.name.toUpperCase();
});

console.log(fprds2);

console.log("names of all products >= 100 in uppercase and < 100 lowercase");

// all >= 100 name uppercase and < 100 lowercase

let mprds = products.map(function(v){
    if(v.price >= 100){
        return v.name.toUpperCase();
    }else{
        return v.name.toLowerCase();
    }
});

console.log(mprds);


let mprds2 = products.map(p => p.price >=100 ? p.name.toUpperCase() : p.name.toLowerCase());

console.log(mprds2);



