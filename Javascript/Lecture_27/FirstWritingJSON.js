// node FirstWritingJSON.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

let teams = [
    {
        name: "India",
        rank: 1,
        matches: [
            {
                vs: "England",
                result: "Win"

            },
            {
                vs: "Australia",
                result: "Win"

            }
        ]

    },
    {
        name: "Australia",
        rank: 3,
        matches: [
            {
                vs: "India",
                result: "Loss"

            },
            {
                vs: "England",
                result: "Win"

            }
        ]

    },
    {
        name: "England",
        rank: 2,
        matches: [
            {
                vs: "Australia",
                result: "Loss"

            },
            {
                vs: "India",
                result: "Loss"

            }
        ]

    }
];

let json = JSON.stringify(teams); // JSO -> JSON
// stringify convert JSO to JSON. JSO can't be printed or saved. It has to be converted to json via JSON. stringify() so that it can be printed or saved.


fs.writeFileSync(args.dest, json, "utf-8");
console.log(teams[2].matches[1].vs);