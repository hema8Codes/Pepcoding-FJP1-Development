// node FirstExcelFile.js --source=teams.json --dest=teams.csv
// npm install excel4node
// npm install minimist
// npm init
let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");
let args = minimist(process.argv);
let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON); // Conversion of JSON to JSO

let wb = new excel.Workbook(); // Create a new instance of a Workbook class
// Create a reusable style
let hstyle = wb.createStyle({   // for styling inside work book  <- hstyle (header style)
    font: {
      color: "red",
    },
    fill: {
      type: "pattern", 
      patternType: "solid", 
      fgColor: "#00FF00"  //foreground color
    }

  });
for(let i = 0; i < teams.length; i++){
    // Add Worksheets to the workbook
    let sheet = wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("Opponent").style(hstyle); 
    sheet.cell(1,2).string("Result").style(hstyle); 

    sheet.cell(1,4).string("Rank").style(hstyle); 
    sheet.cell(1,5).number(teams[i].rank);     
    
    for(let j = 0; j < teams[i].matches.length; j++){
        let vs = teams[i].matches[j].vs;  // taking out opponent from object  
        let result = teams[i].matches[j].result; // taking out result from object 
        sheet.cell(2 + j, 1).string(vs);
        sheet.cell(2 + j, 2).string(result);
    }
}
wb.write(args.dest);
