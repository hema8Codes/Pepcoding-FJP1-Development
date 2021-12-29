// Use the map function to produce the below output
// ["H.P.", "S.S.", "L.E.", "R.W.", "A.D.", "D.T.", "D.M."]
let arr = [
    "Harry Potter",
    "Severus Snape",
    "Lily Evans",
    "Ronald Weasely",
    "Albus Dumbledore",
    "Dean Thomas",
    "Draco Malfoy"
];

// my code

let iarr = arr.map(function(v, i, oarr){
    console.log(v + " @ " + i);
    let names = v.split(" ");
    console.log(names);
    let ans = names[0][0] + "." + names[1][0] + ".";
    return ans;
});
console.log(iarr);

// class code

let res = arr.map(function(v, i, oarr){

    let nameParts = v.split(" ");
    let fname = nameParts[0];
    let lname = nameParts[1];

    let fnfc = fname[0];
    let lnlc = lname[0];

    let initials = fnfc + "." + lnlc + ".";
    return initials;

});

console.log(res);