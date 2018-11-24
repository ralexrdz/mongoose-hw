var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: String,
  coloresfavoritos: [String],
  edad: {
    type: Number,
    default: 18
  },
  profesion: {
    estudio: String,
    exp: String,
    escuela: String
  }
})

module.exports = userSchema
