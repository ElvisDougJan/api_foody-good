const Mesas = require('../models/Mesas')()

class MesaController {

  constructor(Mesas) {
    this.Mesas = Mesas
  }

  async consultaTodasMesas(res) {
    await Mesas.find({}, (err, mesasEncontradas) => {
      err || !mesasEncontradas
        ? res.status(404).json(`Erro ao consultar todas mesas. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(mesasEncontradas)
    })
  }

  consultaMesaID(req, res) {
    Mesas.findById(req.params._id, (err, mesaEncontrada) => {
      err || !mesaEncontrada
        ? res.status(404).json(`Mesa não encontrada. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(mesaEncontrada)
    })
  }

  async salvaMesa(req, res) {
    await Mesas.create(req.body, (err, mesaCriado) => {
      err
        ? res.status(400).json(`Erro ao criar nova mesa. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(mesaCriado)
    })
  }

  async atualizaMesa(req, res) {
    console.log(req.body.pedidos)
    let mesaAtualizada = {}
    await Mesas.findById(req.params._id)
      .then(mesa => {
        console.log('mesa::: ', mesa)
        mesaAtualizada = {
          numero: req.body.numero,
          pedidos: mesa.pedidos.push(req.body.pedidos)
        }
      })
      .catch(err => console.log(`ERRO AO BUSCAR MESA: ${err}`))

      console.log('mesaAtualizada: ', mesaAtualizada)

    //   await Mesas.findByIdAndUpdate(req.params._id, mesaAtualizada)
    //     .then(() => res.status(200).json('Mesa atualizada com sucesso!'))
    //     .catch(err => res.status(400).json(`Não foi possível atualizar esta mesa. A consulta retornou ${err}`) && console.log(err))
    }

  deletaMesaID(req, res) {
    Mesas.findByIdAndRemove(req.params._id, (err, mesaEncontradaParaRemover) => {
      err || !mesaEncontradaParaRemover
        ? res.status(400).json(`Não foi possível deletar esta mesa. ERRO: O resultado da consulta de mesa retornou ${err}`)
        : res.status(200).json('Mesa deletada com sucesso!')
    })
  }

}

module.exports = new MesaController(Mesas)