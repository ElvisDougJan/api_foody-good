const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const PedidoSchema = new Schema({
    numero_pedido: { type: String },
    valor_total: { type: String },
    forma_pagamento: { type: String },
    mesas: { type: Schema.Types.ObjectId, ref: 'mesas' },
    // usuarios: { type: Schema.Types.ObjectId, ref: 'usuarios' }
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.pedidos || db.model('pedidos', PedidoSchema)
}
