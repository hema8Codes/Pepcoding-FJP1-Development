// node FirstFolderCreation.js --source=teams.json --dest=root
//npm install minimist
//npm init

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");  // we will not put the slash by ourselves
// to make folder paths, never append slashes yourself
// use path.join()

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON); // conversion of JSON to JSO

for(let i = 0; i < teams.length; i++){
    let folderName = path.join(args.dest, teams[i].name);
    fs.mkdirSync(folderName);
}
