const readline = require('readline').createInterface({
    input:process.stdin,output:process.stdout,
})

const numeros = [1,2,3,4,5,6,7,8,9,10,100,200,-100,-200];


readline.question(`Qual o valor mínimo? ->`, entrada => {
    let numerosFiltrados = numeros.filter((valor,index,array)=>{
        return maioresQueEntrada(valor,index,array,entrada)
    })
    
    console.log(numerosFiltrados)
    readline.close()
});




function maioresQueEntrada(valor,index,array,entrada){
    return valor > entrada ? true : false
}

const numerosNaturais = [1,2,3,4,5]

let numerosNaturaisFiltrados = numerosNaturais.filter((valor,index,array)=>{
    return valor % 2 == 0? true : false
});

console.log(numerosNaturaisFiltrados)