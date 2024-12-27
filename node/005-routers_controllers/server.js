const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')


app.use(express.urlencoded({extended:true}))

app.use(express.static(path.resolve(__dirname,"public")))

app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')
app.use(routes)


app.listen(3333,()=>
    {
        console.log('Server is running on port 3333')
    }
)





// const express = require('express')

// const app = express()

// app.get('/',(req,res)=>{
//   res.send('<h1>Seja bem vindo, Everton!</h1>')
// })

// app.listen(3002,()=>{
//     console.log('Server is running on port 3002')
// })



