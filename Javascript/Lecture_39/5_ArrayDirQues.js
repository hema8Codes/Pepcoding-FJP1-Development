const fs = require('fs-extra');
const path = require("path")

// not correct this is only trail version

const flatten = (parent_dir, child_dir, depth) => {

    const curr_dir = path.join(parent_dir, child_dir);

    fs.readdir(curr_dir, (err, files) => {
        for(let i = 0; i < files.length; i++){
            if(depth>0){
            if(fs.lstatSync(files[i]).isDirectory()){
                flatten(curr_dir, path.join(curr_dir, files[i]), depth - 1);
                console.log(curr_dir);
            }
            fs.move(path.join(curr_dir, files[i]), path.join(parent_dir, files[i]), (err) => {
                if(!err){
                    console.log('Success!');
                }
            })
        }
        }
    })
}    


const flatDir = (depth) => {
    flatten('./root', '' , depth);
}    

flatDir(0); 