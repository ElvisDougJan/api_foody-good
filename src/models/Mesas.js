const Schema = require('mongoose').Schema

module.exports = () => {
  const db = require('../config/connection')()

  const MesasSchema = new Schema({
    numero: { type: Number },
  }, {
      timestamps: {
        createdAt: 'criadoEm',
        updatedAt: 'alteradoEm'
      },
      versionKey: false
    })

  return db.models.mesas || db.model('mesas', MesasSchema)
}
