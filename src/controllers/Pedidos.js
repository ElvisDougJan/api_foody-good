const Pedidos = require('../models/Pedidos')()

class PedidoController {

  constructor(Pedidos) {
    this.Pedidos = Pedidos
  }

  async consultaTodosPedidos(res) {
    await Pedidos.find({})
      .populate('funcionario')
      .populate('mesas')
      .exec((err, PedidosEncontradas) => {
        err
          ? res.status(404).json(`Erro ao consultar todos usuários. A consulta retornou ${err}`) && console.log(err)
          : res.status(200).json(PedidosEncontradas)
      })
  }

  consultaPedidoID(req, res) {
    Pedidos.findById(req.params._id)
      .populate('funcionario')
      .populate('mesas')
      .exec((err, pedidoEncontrado) => {
        err || !pedidoEncontrado
          ? res.status(404).json(`Usuário não encontrado. A consulta retornou ${err}`) && console.log(err)
          : res.status(200).json(pedidoEncontrado)
      })
  }

  async salvaPedido(req, res) {
    await Pedidos.create(req.body, (err, pedidoCriado) => {
      err
        ? res.status(400).json(`Erro ao criar nova pedido. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(pedidoCriado)
    })
  }

  atualizaPedido(req, res) {
    Pedidos.findByIdAndUpdate(req.params._id, req.body, (err, PedidoEncontrado) => {
      err || !PedidoEncontrado
        ? res.status(400).json(`Não foi possível atualizar este pedido. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json('Pedido atualizado com sucesso!')
    })
  }

  async deletaPedidoID(req, res) {
    await Pedidos.findByIdAndDelete(req.params._id, (err, Pedido) => {
      err || !Pedido
        ? res.status(400).json(`Não foi possível deletar este pedido. ERRO: O resultado da consulta de pedido retornou ${err}`)
        : res.status(200).json('Pedido deletado com sucesso!')
    })
  }

}

module.exports = new PedidoController(Pedidos)