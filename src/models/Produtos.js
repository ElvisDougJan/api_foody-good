const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const ProdutosSchema = new Schema({
    Preco: { type: String },
    Estoque: { type: Number },
    Descricao: { type: String },
    Unidade: { type: String }
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.produtos || db.model('produtos', ProdutosSchema)
}
