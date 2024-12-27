const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const suporteController = require('./src/controllers/suporteController')

route.get('/',homeController.paginaInicial)
route.post('/',homeController.trataPost)
route.get('/contato',contatoController.paginaInicial)
route.get('/suporte',suporteController.paginaInicial)
route.post('/suporte',suporteController.mensagemSuporte)

module.exports = route