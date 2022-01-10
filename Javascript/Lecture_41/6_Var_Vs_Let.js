
// reassign
// function scope , redeclare, you can access a var variable before declaration

// console.log(a);
// var a;
// a = 10;
// var a;
// console.log(a);

// Before declaration -> for a variable declared using let keyword, that is in TMZ (Temporal Dead Zone).
// We cannot access the variable before declaration by let keyword. - > TMZ
// You can't redeclare a variable using let keyword
// Let keyword if block scope
// These things makes 'let' a safer options than 'var'

let a;
console.log(a);