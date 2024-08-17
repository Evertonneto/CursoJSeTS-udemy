// class Pessoa{
//     constructor(nome,sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;

//     }



//     falar(){
//         console.log(`olá meu nome é ${this.nome} ${this.sobrenome}`)
//     }
// }

// let pessoa = new Pessoa('Everton','Nunes')
// console.log(pessoa)
// console.log(pessoa.nome)

let _nome = Symbol('nome')
let _sobrenome = Symbol('sobrenome')

class Pessoa{
    constructor(nome,sobrenome){
        this[_nome] = nome;
        this[_sobrenome] = sobrenome;
    }

    get nome (){
       return this[_nome]
    }

    set nome(nome) {
        this[_nome] = nome
    }

    get sobrenome(){
        return this[_sobrenome]
    }

    set sobrenome(sobrenome){
        this[_sobrenome] = sobrenome
    }


}

let pessoa = new Pessoa('Everton','Nunes')

console.log(pessoa.nome)
