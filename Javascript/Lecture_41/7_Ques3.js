

// next question 
var a;

function fn() { 

    console.log("Before declaration 8", a);

    var a;

    console.log("After declaration 12", a);

    a = 20;

    if(true) {
        let a = 30;
        console.log("16", a);
    }
    
    console.log("After initialization 21", a);

}

a = 10;

fn();