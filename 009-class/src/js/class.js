class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        
    }

    falar(){
        console.log(`olá meu nome é ${this.nome} ${this.sobrenome}`)
    }
}

let pessoa = new Pessoa('Everton','Nunes')
console.log(pessoa)