import InsumosController from './../controllers/Insumos'

export default (app) => {
  app.get('/insumos', async (req, res) => {
    await InsumosController.consultaTodosInsumos(res)
  })

  app.get('/insumo/:_id', (req, res) => {
    InsumosController.consultaInsumoID(req, res)
  })

  app.post('/salva-insumo', async (req, res) => {
    await InsumosController.salvaInsumo(req, res)
  })

  app.put('/atualiza-insumo/:_id', (req, res) => {
    InsumosController.atualizaInsumo(req, res)
  })

  app.delete('/deleta-insumo/:_id', (req, res) => {
    InsumosController.deletaInsumoID(req, res)
  })
}