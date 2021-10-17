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

  let t1 = teamName;
  let t2 = match.vs;
  let result = t1 + " " + match.result;
  
  let pdfDocument = pdf.PDFDocument; // taken out the pdfDocument from pdf-lib -> pdf-lib has a property called as PDFDocument
  let originalTemplateBytes = fs.readFileSync("Template.pdf"); // getting the bytes from template
  let prmToLoadBytes = pdfDocument.load(originalTemplateBytes); // promise that I will load the Bytes
  prmToLoadBytes.then(function(pdfdoc){ // if I load the bytes and fulfill the promise, then I will call function(pdfdoc)
     let page = pdfdoc.getPage(0);
     page.drawText(t1, {
      x: 320,
      y: 710,
      size: 10
    });
    page.drawText(t2, {
      x: 320,
      y: 696,
      size: 10
    });         
     page.drawText(result, {
       x: 320,
       y: 681,
        size: 10
     });
     let promiseToSave = pdfdoc.save(); 
     promiseToSave.then(function(changedBytes){  // promise that I will save the file and if so then I will give you the Bytes
       fs.writeFileSync(matchFileName, changedBytes);
     })
  })
}