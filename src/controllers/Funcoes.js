const Funcoes = require('../models/Funcao')()

class FuncaoController {

  constructor(Funcoes) {
    this.Funcoes = Funcoes
  }

  async consultaTodasFuncoes(res) {
    await Funcoes.find({}, (err, funcoesEncontradas) => {
      err || !funcoesEncontradas
        ? res.status(404).json(`Erro ao consultar todos usuários. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(funcoesEncontradas)
    })
  }

  consultaFuncaoID(req, res) {
    Funcoes.findById(req.params._id, (err, funcaoEncontrada) => {
      err || !funcaoEncontrada
        ? res.status(404).json(`Usuário não encontrado. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(funcaoEncontrada)
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
    Funcoes.findByIdAndUpdate(req.params._id, req.body, (err, funcaoEncontrada) => {
      err || !funcaoEncontrada
        ? res.status(400).json(`Não foi possível atualizar esta função. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json('Função atualizada com sucesso!')
    })
  }

  deletaFuncaoID(req, res) {
    Funcoes.findByIdAndRemove(req.params._id, (err, funcao) => {
      err || !funcao
        ? res.status(400).json(`Não foi possível deletar esta função. ERRO: O resultado da consulta de função retornou ${err}`)
        : res.status(200).json('Função deletada com sucesso!')
    })
  }

}

module.exports = new FuncaoController()