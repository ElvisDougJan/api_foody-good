const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const FuncoesSchema = new Schema({
    descricao: { type: String },
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.funcoes || db.model('funcoes', FuncoesSchema)
}
