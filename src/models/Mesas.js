const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const MesasSchema = new Schema({
    numero: { type: Number },
    pedidos: [{
      numero_pedido: { type: String },
      valor_total: { type: String },
      forma_pagamento: { type: String },
    }]
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.mesas || db.model('mesas', MesasSchema)
}
