const mongoose = require('mongoose')
let db

module.exports = () => {
  if (!db) {
    db = mongoose.connect('mongodb://admin:4dm1nr00t@ds151383.mlab.com:51383/foody-good', { useNewUrlParser: true })
  }
  return mongoose.connection
}