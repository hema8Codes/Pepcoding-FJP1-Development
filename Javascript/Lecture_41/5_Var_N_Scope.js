
// next question 

function fn() { 

    console.log("Before declaration 6", a);

    var a;

    console.log("After declaration 10", a);

    a = 20;

    if(true) {
        var a = 30;
        console.log("16", a);
    }
    
    console.log("After initialization 19", a);

}

fn();