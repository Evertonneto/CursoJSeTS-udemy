// function reducer(inicial){
//     for(let i = 1;i<arguments.length;i++){
//         inicial +=  arguments[i]
//     }

//     return inicial
// }

// console.log(reducer(1000,2,3))

//!Operador rest e parametros

function reducer(inicial,...numeros){
    for(let numero of numeros){
        inicial +=  numero
    }

    return inicial
}

console.log(reducer(1000,2,5,6,7))

//!funcao que retorna função
function multiplicador(multi){
    return function(valor){
        return multi * valor
    }
}

const dobrar = multiplicador(2)
const triplicar = multiplicador(3)
const quadruplicar = multiplicador(4)

console.log(dobrar(5))
console.log(triplicar(3))
console.log(quadruplicar(7))

const teste = 2

//!closures
function retornarFuncao(){
    const nome = 'ton'
    return function(){
        return teste;
    }
}

const funcao = retornarFuncao()
console.log(funcao())


//!callback functions

console.log('--------------')

function f1(callback){
    setTimeout(()=>{
        console.log('f1')
        if(callback) callback()
    },random())
}
function f2(callback){
    setTimeout(()=>{
        console.log('f2')
        if(callback) callback()
    },random())
}
function f3(callback){
    setTimeout(()=>{
        console.log('f3')
        if(callback) callback()
    },random())
}

f1(f1Callback)

function f1Callback(){
    f2(f2Callback)
}

function f2Callback(){
    f3(f3Callback)
}

function f3Callback(){
    console.log("olá mundo")
}

function random(){
    max = 3000
    min = 1000
    return Math.floor(Math.random()*(max-min)+min)
}


(function(idade, peso, altura) {
    const nome = "Everton"

    function criarNome(){
        return nome + ' ' + "Nunes"
    }

    function chamarNome(){
        console.log(criarNome())
    }

    chamarNome()

    console.log(`${idade}`);
    console.log(`${peso}`);
    console.log(`${altura}`);
    
})(25, 70, 1.75);
