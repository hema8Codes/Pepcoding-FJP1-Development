const fs = require("fs")
const path = require("path")
const fsex = require('fs-extra')

const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath,file)).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, file))
    }
  })

  return arrayOfFiles
}

const result = getAllFiles("root")
// [ "FILE_PATH", "FILE_PATH", "FILE_PATH" ]
console.log(result);

try {
    const arrayOfFiles = fs.readdirSync("./root")
    console.log(arrayOfFiles)
  } catch(e) {
    console.log(e)
  }



const src = '/tmp/file.txt'
const dest = '/tmp/this/path/does/not/exist/file.txt'

// With async/await:
async function example (src, dest) {
    try {
      await fs.move(src, dest)
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  }
  
  example(src, dest)