class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }


}

class PessoaFisica extends Pessoa{
    constructor(nome, cpf){
        super(nome);
        this.cpf = cpf;
    }

    falar(){
        console.log(`Meu nome é ${this.nome} e meu cpf é ${this.cpf}`);
    }
}

const p1 = new Pessoa('João');
p1.falar();
const p2 = new PessoaFisica('Maria', '123456789');
p2.falar();