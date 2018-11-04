const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const FuncaoSchema = new Schema({
    descricao: { type: String, default: '' }
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.funcoes || db.model('funcoes', FuncaoSchema)
}
