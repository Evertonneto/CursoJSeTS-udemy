function Pessoa(nome,idade,altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
}

Pessoa.prototype.falar = () => {
    console.log('Olá')
}

let pessoa = new Pessoa('Everton',22,176);
let pessoa1 = new Pessoa('Everton',22,176);

console.log(pessoa)
console.log(pessoa1)
pessoa.falar()

function Teste(nome){
    this.nome = nome
}

let teste = new Teste('Everton')
console.log(teste)

//*ANINHANDO OBJETOS LITERAIS COM O PROTOTYPE

const objA = {
    chaveA:'A'
}

const objB = {
    chaveB:'B'
}
const objC = {
    chaveC:'C'
}

Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)

console.log(objC)

//* MANIPULANDO OBJETOS DE FUNÇÕES CONSTRUTORAS COM O PROTOTYPE

function Produto(preco,tamanho){
    this.preco = preco,
    this.tamanho = tamanho
}
//*ADICIONA O MÉTODO 
Produto.prototype.desconto = function(desconto){
    return this.preco = this.preco - (this.preco*(desconto/100))
}
Produto.prototype.aumento = function(aumento){
    return this.preco = this.preco + (this.preco*(aumento/100))
}

let p1 = new Produto(20,10)
p1.desconto(10)
console.log(p1)

const edificio = {
    preco:30000,
    tamanho:100
}

//*ADICIONA O PROTOTYPE DE PRODUTO COM A FUNÇÃO DESCONTO NO PROTOTYPE DE EDIFICIO
Object.setPrototypeOf(edificio,Produto.prototype);

edificio.desconto(10)

console.log(edificio)


//*CRIA UM OBJETO E ADICIONA O PROTOTYPE DE PRODUTO COM A FUNÇÃO DESCONTO NO PROTOTYPE DE P3, ASSIM COMO CRIA OS ATRIBUTOS
const p3 = Object.create(Produto.prototype,{
    preco:{
        writable:true,
        configurable:false,
        enumerable:true,
        value:10000
    },
    tamanho:{
        writable:true,
        configurable:false,
        enumerable:true,
        value:120
    }
})

p3.desconto(10)
console.log(p3)

//* HERANÇA COM PROTOTYPES

function Produto(nome,preco,){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(value){
    this.preco += value
}

Produto.prototype.desconto = function(value){
    this.preco -= value
}

function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco)
    this.cor = cor

}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(valor){
    this.preco += this.preco*(valor/100)
}

function Caneca(nome,preco,material){
    Produto.call(this,nome,preco)
    this.material = material
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca




const produto = new Produto('Gen',110)
const camiseta = new Camiseta('Regata',7.5,'Branca')
const caneca = new Caneca('Longa',50,'Porcelana')
camiseta.aumento(100)
caneca.aumento(10)

console.log(produto)
console.log(camiseta)
console.log(caneca)

function Pessoa(nome,idade,peso){
	this.nome = nome;
	this.idade = idade;
	this.peso = peso;
}

Pessoa.prototype.info = function(){
	console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e peso ${this.peso} KG`)
}

let everton = new Pessoa("Everton",22,74)
everton.info() // `Meu nome é Everton, tenho 22 anos e peso 74 KG`