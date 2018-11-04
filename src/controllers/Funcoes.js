const Funcoes = require('../models/Funcao')()

class FuncaoController {

  constructor(Funcoes) {
    this.Funcoes = Funcoes
  }

  async consultaTodasFuncoes(res) {
    await Funcoes.find({}, (err, funcoesEncontradas) => {
      err
        ? res.status(404).json(`Erro ao consultar todos usuários. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(funcoesEncontradas)
    })
  }

  consultaFuncaoID(req, res) {
    Funcoes.findOne({ _id: req.params._id }, (err, usuarioEncontrado) => {
      err || !usuarioEncontrado
        ? res.status(404).json(`Usuário não encontrado. ERRO ${err}`) && console.log(err)
        : res.status(200).json(usuarioEncontrado)
    })
  }

  async salvaFuncao(req, res) {
    await Funcoes.create(req.body, (err, funcaoCriada) => {
      err
        ? res.status(400).json(`Erro ao criar nova função. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(funcaoCriada)
    })
  }

  atualizaFuncao(req, res) {
    Funcoes.updateOne({ _id: req.params._id }, req.body, (err, funcaoEncontrada) => {
      err || !funcaoEncontrada
        ? res.status(400).json(`Não foi possível atualizar esta função. ERRO: ${err}`) && console.log(err)
        : res.status(200).json('Função atualizada com sucesso!')
    })
  }

  deletaFuncaoID(req, res) {
    Funcoes.deleteOne({ _id: req.params._id }, (err, funcaoEncontrada) => {
      err || typeof funcaoEncontrada._id === undefined || !funcaoEncontrada._id
        ? res.status(400).json(`Não foi possível deletar esta função. ERRO: O resultado da consulta de função retornou ${err}`)
        : res.status(200).json('Função deletada com sucesso!')
    })
  }

}

module.exports = new FuncaoController()