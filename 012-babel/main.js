class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class PessoaFisica extends Pessoa{
    constructor(nome,idade,sexo,cpf){
        super(nome,idade);
        this.sexo = sexo
        this.cpf = cpf;
    }
}

