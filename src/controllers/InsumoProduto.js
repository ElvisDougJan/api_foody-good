const InsumoProduto = require('../models/InsumoProduto')()

class InsumoProdutos {

  constructor(InsumoProdutos) {
    this.InsumoProdutos = InsumoProdutos
  }

  async consultaTodosInsumoProduto(res) {
    await InsumoProduto.find({})
      .populate('produtos')
      .populate('insumos')
      .exec((err, insumoProdutoEncontrados) => {
        err || !insumoProdutoEncontrados
          ? res.status(404).json(`Erro ao consultar todos insumos de produtos. A consulta retornou ${err}`) && console.log(err)
          : res.status(200).json(insumoProdutoEncontrados)
      })
  }

  consultaInsumoProdutoID(req, res) {
    InsumoProduto.findById(req.params._id)
      .populate('produtos')
      .populate('insumos')
      .exec((err, insumoProdutoEncontrado) => {
        err || !insumoProdutoEncontrado
          ? res.status(404).json(`Insumo de produtos não encontrado. A consulta retornou ${err}`) && console.log(err)
          : res.status(200).json(insumoProdutoEncontrado)
      })
  }

  async salvaInsumoProduto(req, res) {
    await InsumoProduto.create(req.body, (err, insumoProdutoCriado) => {
      err
        ? res.status(400).json(`Erro ao criar novo insumo de produto. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(insumoProdutoCriado)
    })
  }

  atualizaInsumoProduto(req, res) {
    InsumoProduto.findByIdAndUpdate(req.params._id, req.body, (err, insumoProdutoEncontradoParaAtualizar) => {
      err || !insumoProdutoEncontradoParaAtualizar
        ? res.status(400).json(`Não foi possível atualizar este insumo de produo. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json('Insumo de produto atualizado com sucesso!')
    })
  }

  deletaInsumoProdutoID(req, res) {
    InsumoProduto.findByIdAndRemove(req.params._id, (err, insumoProdutoEncontradoParaRemover) => {
      err || !insumoProdutoEncontradoParaRemover
        ? res.status(400).json(`Não foi possível deletar este insumo de produto. ERRO: O resultado da consulta de insumo de produto retornou ${err}`)
        : res.status(200).json('Insumo de produto deletado com sucesso!')
    })
  }

}

module.exports = new InsumoProdutos(InsumoProduto)