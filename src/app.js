import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import rotaIndex from './routes/index'
import rotaUsuario from './routes/Usuario'
import rotaFuncoes from './routes/Funcoes'
import rotaPedidos from './routes/Pedidos'
import rotaItens from './routes/Item'
import rotaInsumos from './routes/Insumos'
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

rotaIndex(app)
rotaUsuario(app)
rotaFuncoes(app)
rotaPedidos(app)
rotaItens(app)
rotaInsumos(app)

export default app