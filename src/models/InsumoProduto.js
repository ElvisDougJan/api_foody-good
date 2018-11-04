const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const InsumoProdutoSchema = new Schema({
    produtos: { type: Schema.Types.ObjectId, ref: 'produtos' },
    insumos: { type: Schema.Types.ObjectId, ref: 'insumos' }
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.insumoProdutos || db.model('insumoProdutos', InsumoProdutoSchema)
}
