var mongoose = require('mongoose')
var Schema = mongoose.Schema

// PRUEBA PARA CONECARSE
mongoose.connect('mongodb://localhost/bedu-homework')

// DEFINICION DE ESQUEMA

var userSchema = require('./user-schema.js')

var tweetSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

var User = mongoose.model('User', userSchema) // buscará collecation "users"
var Tweet = mongoose.model('Tweet', tweetSchema) // buscará collecation "users"

User.find()
  // .select('-_id name')
  .where({ name: 'Scooby' })
  .exec(function (errorsito, resultix) {
    console.log('haciendo find')
    if (errorsito) console.log(errorsito)
    console.log(resultix)
  })
