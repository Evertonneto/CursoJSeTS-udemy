const pessoa = {
    nome:'Ton',
    age:22,
    job:'Front-end Developer',
    set: function(nome){
        this.nome = nome
    }
}
//* 1-Não permite alterações nos objetos
Object.freeze(pessoa)
pessoa.nome = 'Caio'
console.log(pessoa)

//* 2-método para clonar objetos
const copiaDePessoa = {...pessoa}
copiaDePessoa.nome = 'Teo'
console.log(copiaDePessoa)

//* 3-método para clonar objetos
const copiaDePessoaComAssign = Object.assign({},pessoa,{copy:true})
console.log(copiaDePessoaComAssign)

//* 4-verificar propriedades de um dos atributos do objeto
console.log(Object.getOwnPropertyDescriptor(pessoa,'nome'))
console.log(Object.getOwnPropertyDescriptor(pessoa,'age'))

//* 5- métodos para exibir os values dos objetos em um array
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

