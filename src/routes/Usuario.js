const UsuarioController = require('./../controllers/Usuario')

module.exports = (app) => {
  app.get('/usuarios', async (req, res) => {
    await UsuarioController.consultaTodosUsuarios(req, res)
  })
  
  app.get('/usuario/:_id', (req, res) => {
    UsuarioController.consultaUsuarioID(req, res)
  })
  
  app.post('/salva-usuario', (req, res) => {
    UsuarioController.salvaUsuario(req, res)
  })
  
  app.put('/atualiza-usuario/:_id', (req, res) => {
    UsuarioController.atualizaUsuario(req, res)
  })
  
  app.delete('/deleta-usuario/:_id', (req, res) => {
    UsuarioController.deletaUsuario(req, res)
  })
}