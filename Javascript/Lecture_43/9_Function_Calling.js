
function fun(a, b){
    console.log(a + " " + b);
    console.log(arguments);
}

fun();
fun(10);
fun(10, 20);
fun(10, 20, 30);