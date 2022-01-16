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

// 1. Normal Way
// obj.fun("Harry Potter", "Hermoine Granger");


// 2. Using call() method
// obj.fun.call({
//     fullName: "Ginny Weasley",
//     age: 14
// }, "Fred", "George");

// call is a function. It is available on all functions. It can be used to call the functions.
// The use case is, if you want to override the default this.


// 3. Using apply method
// let o3 = {
//     fullName: "Luna Lovegood",
//     age: 14
// }
// obj.fun.apply(o3, ["Dean Thomas", "Severus Snape", "Albus Dumbledore"]);

// apply is similar to call method. It just uses an array to pass arguments.

// 4. Using Bind Method
let o4 = {
    fullName: "Lily Evans",
    age: 16
}
let boundFunction = obj.fun.bind(o4, "James Potter", "Sirius Black", "Remus Lupin");
boundFunction();
boundFunction("Harry Potter");

// Bind is not similar to call function. It doesn't make any call. It gives you a new function to call.
