const objetoLiteral = {
    nome:'Everton',
    sobrenome:'Nunes Ramalho Neto',
    idade:22,
}

console.log(objetoLiteral)

const pessoa = new Object();
pessoa.nome='Everton'
pessoa.sobrenome='Nunes Ramalho Neto'

console.log(pessoa)


//*Função de fábrica de objetos - factory functions
function factoryFunction(nome,sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${nome} ${sobrenome}`
        }
    }
}

const p1 = factoryFunction('Everton','Nunes')

console.log(p1.nomeCompleto())


// *Função Construtora
function ConstructorFunction(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () =>{
        return `${this.nome} ${this.sobrenome}`
    };
}

const p2 = new ConstructorFunction('Everton','Nunes Ramalho Neto')
console.log(p2.nomeCompleto())

function ConstructorFunctionWithProperties(nome,sobrenome,idade){

    let nomePrivado = nome
    let sobrenomePrivado = sobrenome
    let idadePrivado = idade

    this.nomeCompleto = function(){
        return `${nomePrivado} ${sobrenomePrivado}`
    }

    Object.defineProperties(this,{
       nome:{
        enumerable:true,
        set: function(value){
            nomePrivado = value
        },
        get: function(){
            return nomePrivado
        }
       },
       sobrenome:{
        enumerable:true,
        set: function(value){
            sobrenomePrivado = value
        },
        get: function(){
            return sobrenomePrivado
        }
       },
       idade:{
        enumerable:true,
        set: function(value){
            idadePrivado = value
        },
        get: function(){
            return idadePrivado
        }
       }
    })

}




const p3 = new ConstructorFunctionWithProperties('Everton','Nunes',22)
const p4 = new ConstructorFunctionWithProperties('Jorge','Matheus',32)

p3.nome = 'Paulo'

console.log(p3.nome)
console.log(p3.sobrenome)
console.log(p3.idade)

// function Pessoa(nome,idade,peso){
//     this.info = () =>{
//         return `Nome[${nome}],Idade[${idade}],Peso[${peso}]`
//     }

//     Object.defineProperties(this,{
//         nome:{
//             enumerable:true,
//             writable:true,
//             configurable:true,
//             value:nome
//         },
//         idade:{
//             enumerable:true,
//             writable:true,
//             configurable:true,
//             value:idade
//         },
//         peso:{
//             enumerable:true,
//             writable:true,
//             configurable:true,
//             value:peso
//         }
//     })
// }

// let jorge = new Pessoa('Paulo',23,90)
// jorge.nome = 'Jorge'
// console.log(jorge.nome)
// console.log(jorge.idade)
// console.log(jorge.peso)
// console.log(jorge.info())

function Pessoa(nome,idade,peso){
	Object.defineProperty(this,'nome',{
		enumerable:true,
		configurable:true,
		writable:true,
		value:nome
	}),
	Object.defineProperty(this,'idade',{
		enumerable:true,
		configurable:true,
		writable:true,
		value:idade
	}),
	Object.defineProperty(this,'peso',{
		enumerable:true,
		configurable:true,
		writable:true,
		value:peso
	})
	
	
}

let pessoa1 = new Pessoa('Everton',22,90)

console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1.peso)

let obj = Object.create({},{
    name:{
        value:"teste"
    }
})

console.log(obj.name)


function ConstructorFunction2(nome,sobrenome){
	let nomePrivado = nome
	let sobrenomePrivado = sobrenome

	Object.defineProperties(this,{
		nome:{
			enumerable:true,
			set: function (novoNome) {
				nomePrivado = novoNome
			},
			get: function(){
				return nomePrivado
			}
		},
		sobreNome:{
			enumerable:true,
			set: function (novoSobrenome) {
				sobrenomePrivado = novoSobrenome
			},
			get: function(){
				return nomePrivado
			}

		}
	})

}

let pessoaEverton = new ConstructorFunction2('Everton','Nunes')

pessoaEverton.nome = "Teste 1"

console.log(pessoaEverton.nome)