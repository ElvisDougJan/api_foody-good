const PedidosContoller = require('./../controllers/Pedidos')

module.exports = (app) => {
  app.get('/pedidos', async (req, res) => {
    await PedidosContoller.consultaTodosPedidos(res)
  })

  app.get('/pedido/:_id', (req, res) => {
    PedidosContoller.consultaPedidoID(req, res)
  })

  app.post('/salva-pedido', async (req, res) => {
    await PedidosContoller.salvaPedido(req, res)
  })

  app.put('/atualiza-pedido/:_id', (req, res) => {
    PedidosContoller.atualizaPedido(req, res)
  })

  app.delete('/deleta-pedido/:_id', async (req, res) => {
    await PedidosContoller.deletaPedidoID(req, res)
  })
}