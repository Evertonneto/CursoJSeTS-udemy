const inventory = [
    { name: "apples", quantity: 2, available:false },
    { name: "bananas", quantity: 0, available:false },
    { name: "cherries", quantity: 5, available:false },
  ];

const cherries = inventory.find(({name,available})=>{
    return name === 'cherries' || available == true
})

console.log(cherries)

const produtos = [
    {nome:'Salgado',preco:6.5},
    {nome:'Refrigerante',preco:2},
    {nome:'Bolo', preco:30},
    {nome:'Bala',preco:3},
]

let salgado = produtos.find(({nome},index,array)=>{
    return nome.toLowerCase() === 'salgado'
})


console.log(salgado)

let numeros = [1,2,3,4,5]

let numerosTres = numeros.find((value,index,array)=>{
	return value == 3
})

console.log(numerosTres) // [3]


