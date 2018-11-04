import InsumoProdutoController from './../controllers/InsumoProduto'

export default (app) => {
  app.get('/insumo-produtos', async (req, res) => {
    await InsumoProdutoController.consultaTodosInsumoProduto(res)
  })

  app.get('/insumo-produto/:_id', (req, res) => {
    InsumoProdutoController.consultaInsumoProdutoID(req, res)
  })

  app.post('/salva-insumo-produto', async (req, res) => {
    await InsumoProdutoController.salvaInsumoProduto(req, res)
  })

  app.put('/atualiza-insumo-produto/:_id', (req, res) => {
    InsumoProdutoController.atualizaInsumoProduto(req, res)
  })

  app.delete('/deleta-insumo-produto/:_id', (req, res) => {
    InsumoProdutoController.deletaInsumoProdutoID(req, res)
  })
}