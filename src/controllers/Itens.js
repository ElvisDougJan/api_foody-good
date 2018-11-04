const Itens = require('../models/Itens')()

class ItemController {

  constructor(Itens) {
    this.Itens = Itens
  }

  async consultaTodosItens(res) {
    await Itens.find({}, (err, itensEncontrados) => {
      err || !itensEncontrados
        ? res.status(404).json(`Erro ao consultar todos itens. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(itensEncontrados)
    })
  }

  consultaItemID(req, res) {
    Itens.findById(req.params._id, (err, itemEncontrado) => {
      err || !itemEncontrado
        ? res.status(404).json(`Item não encontrado. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(itemEncontrado)
    })
  }

  async salvaItem(req, res) {
    await Itens.create(req.body, (err, itemCriado) => {
      err
        ? res.status(400).json(`Erro ao criar nova item. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(itemCriado)
    })
  }

  atualizaItem(req, res) {
    Itens.findByIdAndUpdate(req.params._id, req.body, (err, itemEncontradoParaAtualizar) => {
      err || !itemEncontradoParaAtualizar
        ? res.status(400).json(`Não foi possível atualizar esta item. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json('Item atualizado com sucesso!')
    })
  }

  deletaItemID(req, res) {
    Itens.findByIdAndRemove(req.params._id, (err, itemEncontradoParaRemover) => {
      err || !itemEncontradoParaRemover
        ? res.status(400).json(`Não foi possível deletar esta item. ERRO: O resultado da consulta de item retornou ${err}`)
        : res.status(200).json('Item deletado com sucesso!')
    })
  }

}

module.exports = new ItemController(Itens)