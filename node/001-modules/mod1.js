const path = require('path')

console.log(path.resolve(__filename))
console.log(path.resolve(__dirname))

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}


const textoMenor = "Laborum voluptate veniam ullamco aute sit ad mollit reprehenderit consectetur qui ad velit ut non."

const textoMaior = "Occaecat excepteur officia anim exercitation. Excepteur sunt nisi id nisi reprehenderit do voluptate cupidatat ut ex consequat aliqua. Est sunt aute do labore pariatur et sint. Exercitation exercitation deserunt deserunt fugiat sint tempor aliquip culpa mollit ex pariatur sint."

const errorMessage = "Erro ao carregar módulo"

module.exports ={
    Pessoa,
    textoMenor,
    textoMaior,
    errorMessage
}