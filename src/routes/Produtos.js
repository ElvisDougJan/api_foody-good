import ProdutosController from './../controllers/Produtos'

export default (app) => {
  app.get('/produtos', async (req, res) => {
    await ProdutosController.consultaTodosProdutos(res)
  })

  app.get('/produto/:_id', (req, res) => {
    ProdutosController.consultaProdutoID(req, res)
  })

  app.post('/salva-produto', async (req, res) => {
    await ProdutosController.salvaProduto(req, res)
  })

  app.put('/atualiza-produto/:_id', (req, res) => {
    ProdutosController.atualizaProduto(req, res)
  })

  app.delete('/deleta-produto/:_id', (req, res) => {
    ProdutosController.deletaProdutoID(req, res)
  })
}