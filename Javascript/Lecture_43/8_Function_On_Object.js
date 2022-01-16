
// let obj = {
//     fun: function(){
//         console.log("This person is called " + this.fullName + ". Her age is " + this.age);
//     },
//     fullName: "Hemakshi Pandey",
//     age: 15
// };

// obj.fun();



let obj = {
    fun1: function(){
        console.log("This person is called " + this.fullName + ". Her age is " + this.age);
    },
    fun2: function(){
        console.log("This person is called " + obj.fullName + ". Her age is " + obj.age);
    },
    fun3: function(){
        console.log("This person is called " + fullName + ". Her age is " + age);
    },
    fullName: "Hemakshi Pandey",
    age: 15
};

obj.fun1(); // this is same in java and js
obj.fun2(); // this works in js but not in java
obj.fun3(); // this works in java but not in JS