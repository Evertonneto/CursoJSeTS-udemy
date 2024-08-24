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

// atributos privados em classes

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


// Herança com classes


class PessoaFisica extends Pessoa{
    constructor(nome,sobrenome,idade,cpf){
        super(nome,sobrenome)
        this.idade = idade 
        this.cpf = cpf
    }
}

let pessoa1 = new PessoaFisica("Everton","Nunes",22,"708.172.222-34")
console.log(pessoa1.cpf)





class Controle{
    constructor(marca){
        this.marca = marca
        this.volume = 0
    }
    // Método de instÂncia
    aumentarVolume(){
        this.volume += 2
    }
    diminuirVolume(){
        this.volume -= 2
    }

    //Método estático ou de classe
    static soma(x,y){
        return x + y
    }
}

console.log(Controle.soma(1,2))