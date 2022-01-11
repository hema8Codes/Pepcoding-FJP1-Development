
function enterFirstName(firstName) {
    return function enterLastName(lastName){
        return function enterAge(age) {
            return function printDetails(){
                console.log("Your name is " + firstName + " " + lastName + " and your age is " + age);
            }
        }
    } 
}

console.log("Kindly Enter your first Name");
let enterLN = enterFirstName("Hemakshi");
console.log("Kindly Enter your last Name");
let enterA = enterLN("Pandey");
console.log("Kindly Enter your age");
let printDT = enterA(15);
console.log("Doing random Stuff");
printDT();

