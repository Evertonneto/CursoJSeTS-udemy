const numeros = [1, 2, 3, 4, 5, 100, 200, 400, 500];

let numerosDobrados = numeros.map((numero, index) => {
  return "ITEM "+ (index + 1) + ":" + numero*2;
});

console.log(numerosDobrados);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

let nomes = pessoas.map((pessoa,index,array)=>{
    return pessoa.nome
})

let res = pessoas.find((value)=>{
  return value.idade == 22
})

console.log("Find:"+ res)

console.log(nomes)


let idadeObj = pessoas.map((pessoa,index,array)=>{
    delete pessoa.nome
    return pessoa
})

console.log(idadeObj)

//*A seguinte função adiciona um index diferente a cada objeto
let withIndex = pessoas.map((pessoa,index,array)=>{
    if(index !== 0){
      let id = Math.floor(Math.random()*10)
      let res = array.find((value)=>{
        return value.id == id
      })
      while(res !== undefined){

        id = Math.floor(Math.random()*10)
        res = array.find((value)=>{
        return value.id == id
      })
      }

      pessoa.id = id
      return pessoa;
    }
    pessoa.id = Math.floor(Math.random()*10);
  
    return pessoa
})

console.log(withIndex)