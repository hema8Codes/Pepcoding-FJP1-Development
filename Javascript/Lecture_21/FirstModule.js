// npm install minimist
let parser = require('minimist');
let args = parser(process.argv);

console.log(args);

if(args.age > 30){
    console.log("Hello " + args.name + " . You must go home.");
}else{
    console.log("Heya " + args.name + " . Where is the party tonight.");
}

//node FirstModule.js -x 4 -y 

//node FirstModule.js --name="Hemakshi Pandey" --age=23 

