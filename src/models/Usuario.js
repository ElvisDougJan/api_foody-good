const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const UsuarioSchema = new Schema({
    nome: { type: String, default: '' },
    cpf_cnpj: { type: String, default: '' },
    tipo: { type: String, default: '' },
    telefone: { type: String, default: '' },
    senha: { type: String, default: '' },
    endereco: {
      rua: { type: String, default: '' },
      numero: { type: String, default: '' },
      complemento: { type: String, default: ''},
      cidade: { type: String, default: '' },
      estado: { type: String, default: '' },
      pais: { type: String, default: '' },
      cep: { type: String, default: '' }
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
