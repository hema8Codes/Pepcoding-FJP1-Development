

function fun(a, b){
    console.log(a + " " + b);
    console.log(arguments);
    let res = Array.from(arguments);
    let sq = res.map(x => x * x);
    console.log(sq);
}

// fun();
// fun(10);
// fun(10, 20);
fun(10, 20, 30);