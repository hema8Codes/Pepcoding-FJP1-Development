Function.prototype.myCall = function(){
    let orgFun = this; 
    let args = Array.from(arguments);
    
    let thisForCall = args[0];
    let params = args.slice(1);

    orgFun.apply(thisForCall, params);
}

Function.prototype.myCall2 = function(){
    let orgFun = this; 
    let args = Array.from(arguments);
    let thisForCall = args[0];
    let params = args.slice(1);

    thisForCall.fun = orgFun;
    thisForCall.fun(...params);
    delete thisForCall.fun;
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

// 2. Using call() method
obj.fun.myCall2({
    fullName: "Ginny Weasley",
    age: 14
}, "Fred", "George", "percy");

// call is a function. It is available on all functions. It can be used to call the functions.
// The use case is, if you want to override the default this.
