const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const rotaIndex = require('./src/routes/index')
const rotaUsuario = require('./src/routes/Usuario')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(rotaIndex)
app.use(rotaUsuario)

module.exports = app