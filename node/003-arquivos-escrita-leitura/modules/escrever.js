const fs = require('fs').promises
const path = require('path')

const caminho = path.resolve(__dirname,'..','texte.txt')

fs.writeFile(caminho,'Jesus é o caminho, a verdade e a vida!\n',{flag:'a',encoding:'utf-8'})