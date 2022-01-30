
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function(f1) {
        console.log(this.name + "[" + this.age + "] says hi to " + f1);
    }
}

let p1 = new Person("Harry", 15);
p1.sayHi("Dobby");
