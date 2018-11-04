const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const rotaIndex = require('./src/routes/index')
const rotaUsuario = require('./src/routes/Usuario')
const rotaFuncoes = require('./src/routes/Funcoes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

rotaIndex(app)
rotaUsuario(app)
rotaFuncoes(app)

module.exports = app