


// document.addEventListener('click',(e)=>{
//     const el = e.target
//     const tag = el.tagName.toLowerCase()

//     if(tag === 'a'){
//         e.preventDefault()
//         carregarPagina(el)
//     }
// })

// async function carregarPagina(el){
//     const href = el.getAttribute('href')
//     console.log(href)
//     try{
//         // fetch(href).then((response)=>{
//         //     console.log(response)
//         //     return response.text()
//         // }).then((result)=> carregarResultado(result))

//         await axios(href).then((resolve)=>{
//             console.log(resolve.data)
//             carregarResultado(resolve.data)
           
//         })

//     }catch(e){
//         console.log(e.status,e.statusText)
//     }

// }

// function carregarResultado(result){
//     let resultado = document.querySelector('.resultado')
//     resultado.innerHTML = result
// }
axios(`pessoas.json`).then((response)=> {
    console.log(response.data)
    carregarConteudo(response.data)
})

const carregarConteudo = (data) => {
    let table =  document.querySelector('.tabela')
    
    for(let pessoa of data){
        let tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.email
        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.idade

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)

        console.log(tr)

        table.appendChild(tr)


    }


}