
// print 1, 2, 3 instead of 3, 3, 3

// solution1 -> Execution Context
function outer(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        function outer1(){
            var j = i;
            return function () {
                console.log(j);
            }
        }
        arr.push(outer1());
    }
    return arr;
}

console.log("Before calling order");
var arr =  outer();
arr[0]();
arr[1]();
arr[2]();
console.log("After calling outer")