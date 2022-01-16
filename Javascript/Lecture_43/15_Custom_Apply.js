Function.prototype.myApply = function(){
    let orgFun = this; 
    let args = Array.from(arguments);
    let thisForApply = args[0];
    let params = args[1];

    thisForApply.fun = orgFun;
    thisForApply.fun(...params);
    delete thisForApply.fun;
}
let obj = {
    fun: function(frnd1, frnd2){
        console.log("This person is called " + this.fullName + ". Her age is " + this.age + ".");
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");
        console.log(arguments);
    },
    fullName: "Hemakshi Pandey",
    age: 15
};
// 3. Using apply method
let o3 = {
    fullName: "Luna Lovegood",
    age: 14
}
obj.fun.myApply(o3, ["Dean Thomas", "Severus Snape", "Albus Dumbledore"]);
// apply is similar to call method. It just uses an array to pass arguments.