  

function carregarConteudo(msg,time){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve(msg)
        },time)
    })
}

carregarConteudo('Banco de Dados',2000)
.then((resolve)=>{
    console.log(resolve)
    return carregarConteudo('Filtrar Dados',1600)
})
.then((resolve)=>{
    console.log(resolve)
    return carregarConteudo('Exibir Dados',2000)
}).then((resolve)=>{
    console.log(resolve)
})
.catch((e)=>{
    console.log("Erro", e)
})


