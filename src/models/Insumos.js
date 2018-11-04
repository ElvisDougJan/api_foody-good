const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const InsumosSchema = new Schema({
    Estoque: { type: Number },
    Unidade: { type: String },
    Descricao: { type: String },
    Preco: { type: String }
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.insumos || db.model('insumos', InsumosSchema)
}
