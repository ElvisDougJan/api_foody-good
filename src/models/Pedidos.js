const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const PedidoSchema = new Schema({
    numero_pedido: {type: String, default: ''},
    valor_total: {type: String, default: ''},
    forma_pagamento: { type: String, default: ''}
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.pedidos || db.model('pedidos', PedidoSchema)
}
