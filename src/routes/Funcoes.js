const FuncoesController = require('./../controllers/Funcoes')

module.exports = (app) => {
  app.get('/funcoes', async (req, res) => {
    await FuncoesController.consultaTodasFuncoes(res)
  })

  app.get('/funcoes/:_id', (req, res) => {
    FuncoesController.consultaFuncaoID(req, res)
  })

  app.post('/salva-funcao', async (req, res) => {
    await FuncoesController.salvaFuncao(req, res)
  })

  app.put('/atualiza-funcao/:_id', (req, res) => {
    FuncoesController.atualizaFuncao(req, res)
  })

  app.delete('/deleta-funcao/:_id', (req, res) => {
    FuncoesController.deletaFuncaoID(req, res)
  })
}