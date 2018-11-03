const express = require('express')
const app = express()
const rotaIndex = require('./src/routes/index')

app.use(rotaIndex)

module.exports = app