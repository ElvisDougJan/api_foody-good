const Usuario = require('./../models/Usuario')()

class UsuarioController {

  constructor(Usuario) {
    this.Usuario = Usuario
  }

  async consultaTodosUsuarios(req, res) {
    await Usuario.find({})
      .populate('funcoes')
      .exec((err, usuariosEncontrados) => {
        err
          ? res.status(404).json(`Erro ao consulta usuários. A consulta retornou ${err}`) && console.log(err)
          : res.status(200).json(usuariosEncontrados)
      })
  }

  consultaUsuarioID(req, res) {
    Usuario.findOne({ _id: req.params._id })
      .populate('funcoes')
      .exec((err, usuarioEncontrado) => {
        err || !usuarioEncontrado
          ? res.status(404).json(`Usuário não encontrado. A consulta retornou ${err}`) && console.log(err)
          : res.status(200).json(usuarioEncontrado)
      })
  }

  salvaUsuario(req, res) {
    Usuario.create(req.body, (err, usuarioCadastrado) => {
      err
        ? res.status(400).json(`Erro ao criar usuário. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(usuarioCadastrado)
    })
  }

  atualizaUsuario(req, res) {
    Usuario.updateOne({ _id: req.params._id }, req.body, (err, success) => {
      err
        ? res.status(400).json(`Erro ao atualizar usuário. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json('Usuário atualizado') && console.log(success)
    })
  }

  deletaUsuario(req, res) {
    Usuario.findByIdAndRemove(req.params._id, (err, usuarioEncontrado) => {
      err || !usuarioEncontrado
        ? res.status(400).json(`Não foi possível deletar este usuário. ERRO: O resultado da consulta de função retornou ${err}`)
        : res.status(200).json('Usuário deletado com sucesso!')
    })
  }
}

module.exports = new UsuarioController(Usuario)