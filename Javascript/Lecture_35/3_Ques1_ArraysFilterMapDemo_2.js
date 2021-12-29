let arr = [
    {
        name: "Harris Pierce",
        age: 50,
        gender: "M"
    },
    {
        name: "Lea Clearwater",
        age: 25,
        gender: "F"
    },
    {
        name: "Jacob Black",
        age: 18,
        gender: "M"
    },
    {
        name: "Edward Cullen",
        age: 17,
        gender: "M"
    },
    {
        name: "Isabella Swanson",
        age: 68,
        gender: "F"
    },
    {
        name: "Damon Salvatore",
        age: 36,
        gender: "M"
    },
    {
        name: "Elena Gilbert",
        age: 43,
        gender: "F"
    },
    {
        name: "Caroline Forbes",
        age: 23,
        gender: "F"
    }
]

// age of all ladies

// approach 1
let ladies = arr.filter( p => p.gender == "F");
console.log(ladies);
let lages = ladies.map(l => l.age);
console.log(lages);

// approach 2
let ladiesages = arr.filter( p => p.gender == "F").map(l => l.age);
console.log(ladiesages);

// approach 3
let ladiesages3 = arr.filter( (v, i, oarr) => v.gender == "F").map((v, i, oarr)=> v.age);
console.log(ladiesages3);

// approach 3
let ladies_ages = arr.filter(function(v, i){
    if(v.gender == 'F'){
        return true;
    }else{
        return false;
    }
}).map(function(v, i){
    return v.age;
});
console.log(ladies_ages);