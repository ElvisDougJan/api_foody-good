const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const ItensSchema = new Schema({
    preco: { type: String },
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.itens || db.model('itens', ItensSchema)
}
