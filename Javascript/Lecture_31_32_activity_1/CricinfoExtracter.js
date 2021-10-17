// the purpose of this project is to extract information of worldcup 2019 from cricinfo and present
// that in the form of excel and pdf scorecards
// the real purpose is to learn how to extract information and get experience with js
// A very good reason to ever make a project is to have good fun

// npm init -y
// npm install minimist
// npm install axios
// npm install jsdom
// npm install excel4node
// npm install pdf-lib

// node CricinfoExtracter.js --excel=Worldcup.csv --dataFolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results 

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");
let path = require("path");

let args = minimist(process.argv);
// console.log(args.source);
// console.log(args.excel);
// console.log(args.dataFolder);

// download using axios
// extract information using jsdom
// manipulate data using array function
// save in excel using excel4node
// create folders and prepare pdfs

let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function (response) {
    let html = response.data;
    // console.log(html);

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let matches = [];

    let matchDivs = document.querySelectorAll("div.match-score-block");
    for (let i = 0; i < matchDivs.length; i++) {
        let matchdiv = matchDivs[i];
        let match = {
            t1: "",
            t2: "",
            t1s: "",
            t2s: "",
            result: ""
        };
        let teamParas = matchdiv.querySelectorAll("div.name-detail > p.name");
        match.t1 = teamParas[0].textContent;
        match.t2 = teamParas[1].textContent;

        let scoreSpans = matchdiv.querySelectorAll("div.score-detail > span.score");
        if (scoreSpans.length == 2) {
            match.t1s = scoreSpans[0].textContent;
            match.t2s = scoreSpans[1].textContent;
        } else if (scoreSpans.length == 1) {
            match.t1s = scoreSpans[0].textContent;
            match.t2s = "";
        } else {
            match.t1s = "";
            match.t2s = "";
        }

        let resultSpan = matchdiv.querySelector("div.status-text > span");
        match.result = resultSpan.textContent;


        matches.push(match);
    }

    // console.log(matches);

    let matchesJSON = JSON.stringify(matches);
    fs.writeFileSync("matches.json", matchesJSON, "utf-8");

    let teams = [];

    for (let i = 0; i < matches.length; i++) {
        populateTeams(teams, matches[i]); // put team in teams array if missing
    }

    for (let i = 0; i < matches.length; i++) {
        populateMatchesInTeams(teams, matches[i]); // put team in teams array if missing
    }

    // console.log(JSON.stringify(teams));

    let teamsJSON = JSON.stringify(teams);
    fs.writeFileSync("teams.json", teamsJSON, "utf-8");

    createExcelFile(teams);
    createFolders(teams);

})

function createFolders(teams) {
    fs.mkdirSync(args.dataFolder); // creation of worldCup folder

    for (let i = 0; i < teams.length; i++) {
        let teamFolder = path.join(args.dataFolder, teams[i].name);
        fs.mkdirSync(teamFolder); // team name folder creation of each team (India, Australia, England etc) 
        //in worldCup folder -> eg worldCup\India 
        for (let j = 0; j < teams[i].matches.length; j++) {
            let matchFileName = path.join(teamFolder, teams[i].matches[j].vs + ".pdf");
            createScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
        }
    }
}


function createScoreCard(teamName, match, matchFileName) {
    // this function creates pdf for match in appropriate folder with correct details
    //here we will use pdf-lib to create the pdf

    let t1 = teamName;
    let t2 = match.vs;
    let t1s = match.selfScore;
    let t2s = match.oppScore
    let result = match.result;

    let pdfDocument = pdf.PDFDocument; // taken out the pdfDocument from pdf-lib -> pdf-lib has a property called as PDFDocument
    let originalTemplateBytes = fs.readFileSync("Template.pdf"); // getting the bytes from template
    let prmToLoadBytes = pdfDocument.load(originalTemplateBytes); // promise that I will load the Bytes
    prmToLoadBytes.then(function (pdfdoc) { // if I load the bytes and fulfill the promise, then I will call function(pdfdoc)
        let page = pdfdoc.getPage(0);
        page.drawText(t1, {
            x: 320,
            y: 705,
            size: 10
        });
        page.drawText(t2, {
            x: 320,
            y: 684,
            size: 10
        });
        page.drawText(t1s, {
            x: 320,
            y: 663,
            size: 10
        });
        page.drawText(t2s, {
            x: 320,
            y: 642,
            size: 10
        });
        page.drawText(result, {
            x: 320,
            y: 621,
            size: 10
        });
        let promiseToSave = pdfdoc.save();
        promiseToSave.then(function (changedBytes) {  // promise that I will save the file and if so then I will give you the Bytes
            fs.writeFileSync(matchFileName, changedBytes);
        })
    })
}

function createExcelFile(teams) {

    let wb = new excel.Workbook(); // Create a new instance of a Workbook class
    // Create a reusable style
    let hstyle = wb.createStyle({   // for styling inside work book  <- hstyle (header style)
        font: {
            color: "#A40F0F",
            size: 16
        },
        fill: {
            type: "pattern",
            patternType: "solid",
            fgColor: "#5DCBFA"  //foreground color
        },
        border: { // §18.8.4 border (Border)
            left: {
                style: "thick", //§18.18.3 ST_BorderStyle (Border Line Styles) ['none', 'thin', 'medium', 'dashed', 'dotted', 'thick', 'double', 'hair', 'mediumDashed', 'dashDot', 'mediumDashDot', 'dashDotDot', 'mediumDashDotDot', 'slantDashDot']
                color: "#1C1002"
            },
            right: {
                style: "thick",
                color: "#1C1002"
            },
            top: {
                style: "thick",
                color: "#1C1002"
            },
            bottom: {
                style: "thick",
                color: "#1C1002"
            },
            diagonal: {
                style: "thick",
                color: "#1C1002"
            },
            diagonalDown: false,
            diagonalUp: false,
            outline: true
        },
        alignment: {
            horizontal: ['center'],
            vertical: ['center'],
            wrapText: true
        }

    });

    let C1style = wb.createStyle({   // for styling inside work book  <- C1style (column 1 style)
        font: {
            size: 14
        },
        fill: {
            type: "pattern",
            patternType: "solid",
            fgColor: "#6FF99D"  //foreground color
        },
        border: {
            left: {
                style: "thick", //§18.18.3 ST_BorderStyle (Border Line Styles) ['none', 'thin', 'medium', 'dashed', 'dotted', 'thick', 'double', 'hair', 'mediumDashed', 'dashDot', 'mediumDashDot', 'dashDotDot', 'mediumDashDotDot', 'slantDashDot']
                color: "#1C1002"
            },
            right: {
                style: "thick",
                color: "#1C1002"
            },
            top: {
                style: "thick",
                color: "#1C1002"
            },
            bottom: {
                style: "thick",
                color: "#1C1002"
            },
            diagonal: {
                style: "thick",
                color: "#1C1002"
            },
            diagonalDown: false,
            diagonalUp: false,
            outline: true
        },
        alignment: {
            horizontal: ['center'],
            vertical: ['center'],
            wrapText: true
        }
    });
    let C2style = wb.createStyle({   // for styling inside work book  <- C2style (column 2 style)
        font: {
            size: 14
        },
        fill: {
            type: "pattern",
            patternType: "solid",
            fgColor: "#7893FF"  //foreground color
        },
        border: {
            left: {
                style: "thick", //§18.18.3 ST_BorderStyle (Border Line Styles) ['none', 'thin', 'medium', 'dashed', 'dotted', 'thick', 'double', 'hair', 'mediumDashed', 'dashDot', 'mediumDashDot', 'dashDotDot', 'mediumDashDotDot', 'slantDashDot']
                color: "#1C1002"
            },
            right: {
                style: "thick",
                color: "#1C1002"
            },
            top: {
                style: "thick",
                color: "#1C1002"
            },
            bottom: {
                style: "thick",
                color: "#1C1002"
            },
            diagonal: {
                style: "thick",
                color: "#1C1002"
            },
            diagonalDown: false,
            diagonalUp: false,
            outline: true
        },
        alignment: {
            horizontal: ['center'],
            vertical: ['center'],
            wrapText: true
        }
    });
    let C3style = wb.createStyle({   // for styling inside work book  <- C3style (column 3 style)
        font: {
            size: 14
        },
        fill: {
            type: "pattern",
            patternType: "solid",
            fgColor: "#FFF678"  //foreground color
        },
        border: {
            left: {
                style: "thick", //§18.18.3 ST_BorderStyle (Border Line Styles) ['none', 'thin', 'medium', 'dashed', 'dotted', 'thick', 'double', 'hair', 'mediumDashed', 'dashDot', 'mediumDashDot', 'dashDotDot', 'mediumDashDotDot', 'slantDashDot']
                color: "#1C1002"
            },
            right: {
                style: "thick",
                color: "#1C1002"
            },
            top: {
                style: "thick",
                color: "#1C1002"
            },
            bottom: {
                style: "thick",
                color: "#1C1002"
            },
            diagonal: {
                style: "thick",
                color: "#1C1002"
            },
            diagonalDown: false,
            diagonalUp: false,
            outline: true
        },
        alignment: {
            horizontal: ['center'],
            vertical: ['center'],
            wrapText: true
        }
    });
    let C4style = wb.createStyle({   // for styling inside work book  <- C4style (column 4 style)
        font: {
            size: 14
        },
        fill: {
            type: "pattern",
            patternType: "solid",
            fgColor: "#FFB258"  //foreground color
        },
        border: {
            left: {
                style: "thick", //§18.18.3 ST_BorderStyle (Border Line Styles) ['none', 'thin', 'medium', 'dashed', 'dotted', 'thick', 'double', 'hair', 'mediumDashed', 'dashDot', 'mediumDashDot', 'dashDotDot', 'mediumDashDotDot', 'slantDashDot']
                color: "#1C1002"
            },
            right: {
                style: "thick",
                color: "#1C1002"
            },
            top: {
                style: "thick",
                color: "#1C1002"
            },
            bottom: {
                style: "thick",
                color: "#1C1002"
            },
            diagonal: {
                style: "thick",
                color: "#1C1002"
            },
            diagonalDown: false,
            diagonalUp: false,
            outline: true
        },
        alignment: {
            horizontal: ['center'],
            vertical: ['center'],
            wrapText: true
        }
    });

    for (let i = 0; i < teams.length; i++) {
        // Add Worksheets to the workbook
        let sheet = wb.addWorksheet(teams[i].name);

        sheet.cell(1, 1).string("Opponent / Vs").style(hstyle);
        sheet.cell(1, 2).string("Self Score").style(hstyle);
        sheet.cell(1, 3).string("Opp Score").style(hstyle);
        sheet.cell(1, 4).string("Result").style(hstyle);

        for (let j = 0; j < teams[i].matches.length; j++) {
            let vs = teams[i].matches[j].vs;  // taking out opponent from object  
            let selfScore = teams[i].matches[j].selfScore;  // taking out selfscore from object  
            let oppScore = teams[i].matches[j].oppScore;  // taking out oppscore from object  
            let result = teams[i].matches[j].result; // taking out result from object 
            sheet.column(1).setWidth(30);
            sheet.column(2).setWidth(20);
            sheet.column(3).setWidth(20);
            sheet.column(4).setWidth(50);
            sheet.row(j + 2).setHeight(37);
            sheet.cell(j + 2, 1).string(vs).style(C1style);
            sheet.cell(j + 2, 2).string(selfScore).style(C2style);
            sheet.cell(j + 2, 3).string(oppScore).style(C3style);
            sheet.cell(j + 2, 4).string(result).style(C4style);
        }
    }
    wb.write(args.excel);

}

function populateTeams(teams, match) {

    //    let t1idx = teams.findIndex(function(team){
    //        if(team.name == match.t1){
    //            return true;
    //        }else{
    //            return false;
    //        }
    //    });

    let t1idx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t1) {
            t1idx = i;
            break;
        }
    }

    if (t1idx == -1) {
        let team = {
            name: match.t1,
            matches: []
        };
        teams.push(team);
    }

    //    let t2idx = teams.findIndex(function(team){
    //     if(team.name == match.t2){
    //         return true;
    //     }else{
    //         return false;
    //     }
    //   }); 

    let t2idx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t2) {
            t2idx = i;
            break;
        }
    }

    if (t2idx == -1) {
        let team = {
            name: match.t2,
            matches: []
        };
        teams.push(team);
    }

}

function populateMatchesInTeams(teams, match) { // put Match In Appropriate team
    let t1idx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t1) {
            t1idx = i;
            break;
        }
    }

    let team1 = teams[t1idx];
    team1.matches.push({
        vs: match.t2,
        selfScore: match.t1s,
        oppScore: match.t2s,
        result: match.result
    });

    let t2idx = -1;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name == match.t2) {
            t2idx = i;
            break;
        }
    }

    let team2 = teams[t2idx];
    team2.matches.push({
        vs: match.t1,
        selfScore: match.t2s,
        oppScore: match.t1s,
        result: match.result
    })

}









