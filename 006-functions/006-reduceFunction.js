const numeros = [1, 2, 3, 4, 5, 100, 200, 400, 500]

const total = numeros.reduce((acumulador,valor)=>{
    return acumulador += valor
},0)

console.log(total)

const pessoas = [
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 101 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 72 },
    { nome: "Wallace", idade: 97 },
  ];
  
let maisVelha = pessoas.reduce((acumulador,valor)=>{
     return acumulador.idade < valor.idade ?
     valor
     :
     acumulador
},{idade:0})

console.log(maisVelha)


const calculados = numeros.filter((numero)=>{
    if (numero % 2 === 0){
        return numero
    }
}).map((valor)=>{
    return valor*2
}).reduce((acumulador,valor)=>{
    return acumulador+= valor
},0)

console.log(calculados)

