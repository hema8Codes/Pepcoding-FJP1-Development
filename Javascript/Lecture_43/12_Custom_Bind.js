Function.prototype.myBind = function(){
    let orgFun = this; 
    let args = Array.from(arguments);
    
    let boundFun = function(){ // myfunction
        let thisForOrgFun = args[0];
        let argsForOrgFun = args.slice(1); // new parameters
        let argsFromInvocation = Array.from(arguments); // more parameters

        argsForOrgFun = argsForOrgFun.concat(argsFromInvocation);  // Total parameters

        orgFun.apply(thisForOrgFun, argsForOrgFun);
    }
    return boundFun;
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

// 4. Using myBind or custom bind
let o4 = {
    fullName: "Lily Evans",
    age: 16
}
let boundFunction = obj.fun.myBind(o4, "James Potter", "Sirius Black", "Remus Lupin");
boundFunction();
boundFunction("Harry Potter");

// Bind is not similar to call function. It doesn't make any call. It gives you a new function to call.