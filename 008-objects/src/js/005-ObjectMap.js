const pessoas = [
	{id:3,nome:'Everton'},
	{id:2,nome:'Everton'},
	{id:1,nome:'Everton'},
]

for(const pessoa of pessoas){
	console.log(pessoa)
}



let pessoasMap = new Map()

for(const pessoa of pessoas){
    let {id} = pessoa 
	
	pessoasMap.set(id,{...pessoa})// adicionar ao map

}

// pessoasMap.delete(3) -- deletar valor
//pessoasMap.get(3) -- receber valor
// pessoasMap.set(1,2) -- setar nova chave e valor
// pessoasMap.has(1) -- verificar se existe a chave




