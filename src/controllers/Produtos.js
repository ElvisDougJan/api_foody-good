const Produtos = require('../models/Produtos')()

class ProdutosController {

  constructor(Produtos) {
    this.Produtos = Produtos
  }

  async consultaTodosProdutos(res) {
    await Produtos.find({}, (err, produtosEncontrados) => {
      err || !produtosEncontrados
        ? res.status(404).json(`Erro ao consultar todos produtos. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(produtosEncontrados)
    })
  }

  consultaProdutoID(req, res) {
    Produtos.findById(req.params._id, (err, produtoEncontrado) => {
      err || !produtoEncontrado
        ? res.status(404).json(`Produto não encontrado. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(produtoEncontrado)
    })
  }

  async salvaProduto(req, res) {
    await Produtos.create(req.body, (err, produtoCriado) => {
      err
        ? res.status(400).json(`Erro ao criar novo produto. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(produtoCriado)
    })
  }

  atualizaProduto(req, res) {
    Produtos.findByIdAndUpdate(req.params._id, req.body, (err, produtoEncontradoParaAtualizar) => {
      err || !produtoEncontradoParaAtualizar
        ? res.status(400).json(`Não foi possível atualizar este produto. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json('Produto atualizado com sucesso!')
    })
  }

  deletaProdutoID(req, res) {
    Produtos.findByIdAndRemove(req.params._id, (err, produtoEncontradoParaRemover) => {
      err || !produtoEncontradoParaRemover
        ? res.status(400).json(`Não foi possível deletar este produto. ERRO: O resultado da consulta de produto retornou ${err}`)
        : res.status(200).json('Produto deletado com sucesso!')
    })
  }

}

module.exports = new ProdutosController(Produtos)