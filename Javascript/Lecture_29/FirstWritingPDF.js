// npm install pdf-lib
// node FirstWritingPDF.js --source=teams.json --dest=worldCup

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON); //conversion to JSON to JSO -> array of teams object

fs.mkdirSync(args.dest); // creation of worldCup folder

for(let i = 0; i < teams.length; i++){
    let teamFolder = path.join(args.dest, teams[i].name);
    fs.mkdirSync(teamFolder); // team name folder creation of each team (India, Australia, England) 
                            //in worldCup folder -> eg worldCup\India 
    for(let j = 0; j < teams[i].matches.length; j++){
        let matchFileName = path.join(teamFolder,teams[i].matches[j].vs + ".pdf");
        createScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
    }
}


function createScoreCard(teamName, match, matchFileName){
  // this function creates pdf for match in appropriate folder with correct details
  //here we will use pdf-lib to create the pdf
  console.log(teamName);
  console.log(match.vs);
  console.log(match.result);
  console.log(matchFileName);
  console.log("---------------------------");

}