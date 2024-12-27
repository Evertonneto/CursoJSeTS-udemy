const express = require('express')

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{

    res.send(` <form action="/" method="post">
    <label for="nome">Nome:</label>
    <br>
    <input type="text" id="nome" name="nome" required>
    <br><br>

    <label for="email">E-mail:</label>
    <br>
    <input type="email" id="email" name="email" required>
    <br><br>

    <label for="mensagem">Mensagem:</label>
    <br>
    <textarea id="mensagem" name="mensagem" rows="4" cols="30" required></textarea>
    <br><br>

    <button type="submit">Enviar</button>
  </form>`)
});

app.get('/suporte/:area?/:id_usuario?',(req,res)=>{

  console.log(req.params.area)
  console.log(req.params.id_usuario)
  

  res.send(`
    <h1>Olá ${req.query.username} - id: ${req.params.id_usuario}, Seja bem-vindo ao suporte de(o) ${req.params.area}.</h1>
    <h1>Em que podemos te ajudar?</h1><form action="/suporte" method="post">
    <label for="mensagem">Mensagem:</label>
    <br>
    <textarea id="mensagem" name="mensagem" rows="4" cols="30" required></textarea>
    <br><br>

    <button type="submit">Enviar</button>
  </form>`)
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(`Respostas recebida:{
      Nome: ${req.body.nome},
      Email: ${req.body.email},
      Mensagem: ${req.body.mensagem}
      }`)
})

app.post('/suporte',(req,res)=>{
  console.log(req.body)
  res.send('Mensagem recebida:')
})

app.listen(3333,()=>{
    console.log('Server is running on port 3333')})







// const express = require('express')

// const app = express()

// app.get('/',(req,res)=>{
//   res.send('<h1>Seja bem vindo, Everton!</h1>')
// })

// app.listen(3002,()=>{
//     console.log('Server is running on port 3002')
// })



