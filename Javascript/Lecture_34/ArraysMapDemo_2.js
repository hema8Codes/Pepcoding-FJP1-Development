let arr = [
    "Harry Potter",
    "Severus Snape",
    "Lily Evans",
    "Ronald Weasely",
    "Albus Dumbledore",
    "Dean Thomas",
    "Draco Malfoy"
]

let iarr = arr.map(function(v, i){
    console.log(v + "@ " + i);
    let names = v.split(" ");
    console.log(names);
    let ans = names[0][0] + ". " + names[1][0] + ".";

    return ans;
});

console.log(iarr);