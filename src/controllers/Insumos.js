const Insumos = require('../models/Insumos')()

class InsumosController {

  constructor(Insumos) {
    this.Insumos = Insumos
  }

  async consultaTodosInsumos(res) {
    await Insumos.find({}, (err, insumosEncontrados) => {
      err || !insumosEncontrados
        ? res.status(404).json(`Erro ao consultar todos insumos. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(insumosEncontrados)
    })
  }

  consultaInsumoID(req, res) {
    Insumos.findById(req.params._id, (err, insumoEncontrado) => {
      err || !insumoEncontrado
        ? res.status(404).json(`Insumo não encontrado. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json(insumoEncontrado)
    })
  }

  async salvaInsumo(req, res) {
    await Insumos.create(req.body, (err, insumoCriado) => {
      err
        ? res.status(400).json(`Erro ao criar novo insumo. ERRO: ${err}`) && console.log(err)
        : res.status(200).json(insumoCriado)
    })
  }

  atualizaInsumo(req, res) {
    Insumos.findByIdAndUpdate(req.params._id, req.body, (err, insumoEncontradoParaAtualizar) => {
      err || !insumoEncontradoParaAtualizar
        ? res.status(400).json(`Não foi possível atualizar este insumo. A consulta retornou ${err}`) && console.log(err)
        : res.status(200).json('Insumo atualizado com sucesso!')
    })
  }

  deletaInsumoID(req, res) {
    Insumos.findByIdAndRemove(req.params._id, (err, insumoEncontradoParaRemover) => {
      err || !insumoEncontradoParaRemover
        ? res.status(400).json(`Não foi possível deletar este insumo. ERRO: O resultado da consulta de insumo retornou ${err}`)
        : res.status(200).json('Insumo deletado com sucesso!')
    })
  }

}

module.exports = new InsumosController(Insumos)