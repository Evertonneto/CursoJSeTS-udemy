const promises = [
	baixarPagina("puxar BD",3000),
	baixarPagina("filtrar",1000),
	baixarPagina("exibir página",500),
	//baixarPagina(100,500)
]

Promise.all(promises)
.then((result)=>{
	console.log(result)
})
.catch((e)=>{
	console.log("Error",e)
})

Promise.race(promises)
.then((result)=>{
	console.log(result)
})
.catch((e)=>{
	console.log("Error",e)
})

function baixarPagina(msg,time){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') reject("Bad type")
        setTimeout(() => {
            resolve(msg)
            }, time);
    })
}

function carregarPagina(){
    let emCache = false
    if(emCache) {
        return Promise.resolve("Página em cache")
    }
    return baixarPagina("baixar Página",2000)
}

carregarPagina().then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log('Error:',e)
})