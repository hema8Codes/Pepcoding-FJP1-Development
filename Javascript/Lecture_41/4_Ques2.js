
// G.E.C
console.log("Before declaration 3", a);
var a;
console.log("After declaration 5", a);
a = 10;
console.log("After initialization 7", a);

function fn() {

    console.log("Before declaration 11", a);

    var a;

    console.log("After declaration 15", a);

    a = 20;

    console.log("After initialization 19", a);


}

fn();

