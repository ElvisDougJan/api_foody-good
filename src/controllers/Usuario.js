const Usuario = require('./../models/Usuario')()

class UsuarioController {

  constructor(Usuario) {
    this.Usuario = Usuario
  }

  async consultaTodosUsuarios(req, res) {
    await Usuario.find({}, (err, usuariosEncontrados) => {
      err
        ? res.status(404).json('Erro ao consulta usuários') && console.log(err)
        : res.status(200).json(usuariosEncontrados)
    })
  }

  consultaUsuarioID(req, res) {
    Usuario.findOne({ _id: req.params._id }, (err, usuarioEncontrado) => {
      err || !usuarioEncontrado
        ? res.status(404).json('Usuário não encontrado') && console.log(err)
        : res.status(200).json(usuarioEncontrado)
    })
  }

  salvaUsuario(req, res) {
    Usuario.create(req.body, (err, usuarioCadastrado) => {
      err
        ? res.status(400).json('Erro ao criar usuário') && console.log(err)
        : res.status(200).json(usuarioCadastrado)
    })
  }

  atualizaUsuario(req, res) {
    Usuario.updateOne({ _id: req.params._id }, req.body, (err, sucess) => {
      err
        ? res.status(400).json('Erro ao atualizar usuário') && console.log(err)
        : res.status(200).json('Usuário atualizado') && console.log(sucess)
    })
  }

  deletaUsuario(req, res) {
    Usuario.deleteOne({ _id: req.params._id }, (err, usuarioEncontrado) => {
      err || !usuarioEncontrado._id
        ? res.status(400).json('Erro ao apagar usuário. Provavelmente este usuário já foi deletado.') && console.log(err)
        : res.status(200).json('Usuário deletado com sucesso!')
    })
  }
}

module.exports = new UsuarioController()