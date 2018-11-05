import MesaController from './../controllers/Mesas'

export default (app) => {
  app.get('/mesas', async (req, res) => {
    await MesaController.consultaTodasMesas(res)
  })

  app.get('/mesa/:_id', (req, res) => {
    MesaController.consultaMesaID(req, res)
  })

  app.post('/salva-mesa', async (req, res) => {
    await MesaController.salvaMesa(req, res)
  })

  app.put('/atualiza-mesa/:_id', (req, res) => {
    MesaController.atualizaMesa(req, res)
  })

  app.delete('/deleta-mesa/:_id', (req, res) => {
    MesaController.deletaMesaID(req, res)
  })
}