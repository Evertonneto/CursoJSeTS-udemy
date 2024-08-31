const request = (obj) =>{
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method,obj.url,true)
        xhr.send()
    
        xhr.addEventListener('load',()=>{
            if(xhr.status >= 200 && xhr.status <=300){
                resolve(xhr.responseText)
            }else{
                reject({code:xhr.status,msg:xhr.statusText})
            }
        })

    })
}


document.addEventListener('click',(e)=>{
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregarPagina(el)
    }
})

async function carregarPagina(el){
    const href = el.getAttribute('href')
    try{
        const response = await request({
            method:'GET',
            url:href,
        })

        carregarResultado(response)
    }catch(e){
        console.log(e.status,e.statusText)
    }

}

function carregarResultado(result){
    let resultado = document.querySelector('.resultado')
    resultado.innerHTML = result
}