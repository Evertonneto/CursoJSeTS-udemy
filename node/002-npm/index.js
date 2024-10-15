const fs = require('fs').promises
const { read } = require('fs')
const path = require('path')

// async function readdir(rootDir){
//     rootDir = rootDir || path.resolve(__dirname)
//     const files = await fs.promises.readdir(rootDir)

//     walk(files)
// }

// function walk(files){
//     for(let file of files){
//         console.log(file)
//     }
// }

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files,rootDir)
}

async function walk(files,rootDir){
    for(let file of files){
        const fullPathFile = path.resolve(rootDir,file)
        const status = await fs.stat(fullPathFile)

        if(/\.git/g.test(fullPathFile))continue;
        if(/node_modules/g.test(fullPathFile))continue;
        
        if(status.isDirectory()){
            readdir(fullPathFile)
            continue
        }

        if(!/\.js$/g.test(fullPathFile) && !/\.css/g.test(fullPathFile)) continue

        console.log(fullPathFile)
    }
}

readdir('./');
