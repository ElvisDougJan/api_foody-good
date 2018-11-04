const ItensController = require('./../controllers/Itens')

module.exports = (app) => {
  app.get('/itens', async (req, res) => {
    await ItensController.consultaTodosItens(res)
  })

  app.get('/item/:_id', (req, res) => {
    ItensController.consultaItemID(req, res)
  })

  app.post('/salva-item', async (req, res) => {
    await ItensController.salvaItem(req, res)
  })

  app.put('/atualiza-item/:_id', (req, res) => {
    ItensController.atualizaItem(req, res)
  })

  app.delete('/deleta-item/:_id', (req, res) => {
    ItensController.deletaItemID(req, res)
  })
}