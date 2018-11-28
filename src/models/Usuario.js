const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const UsuarioSchema = new Schema({
    nome: { type: String },
    cpf_cnpj: { type: String },
    funcoes: { type: Schema.Types.ObjectId, ref: 'funcoes' },
    telefone: { type: String },
    senha: { type: String },
    username: { type: String },
    endereco: {
      rua: { type: String },
      numero: { type: String },
      complemento: { type: String },
      cidade: { type: String },
      estado: { type: String },
      pais: { type: String },
      cep: { type: String }
    }
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.usuarios || db.model('usuarios', UsuarioSchema)
}
