const router = require('express').Router()
const UsuarioController = require('./../controllers/Usuario')

router.get('/usuarios', async (req, res) => {
  await UsuarioController.consultaTodosUsuarios(req, res)
})

router.get('/usuario/:_id', (req, res) => {
  UsuarioController.consultaUsuarioID(req, res)
})

router.post('/salva-usuario', (req, res) => {
  UsuarioController.salvaUsuario(req, res)
})

router.put('/atualiza-usuario/:_id', (req, res) => {
  UsuarioController.atualizaUsuario(req, res)
})

router.delete('/deleta-usuario/:_id', (req, res) => {
  UsuarioController.deletaUsuario(req, res)
})

module.exports = router