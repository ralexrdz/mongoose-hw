var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bedu-homework')

var ObjectId = mongoose.Types.ObjectId

// DEFINICION DE ESQUEMA

let userSchema = require('./user-schema.js')

userSchema.methods.findTweets = function (cb) {
  return Tweet.find({ _id: this.tweets }, cb)
}

var User = mongoose.model('User', userSchema) // buscará collecation "users"

// Manera uno de insertar
// var userToInsert = new User({ name: 'Max', lastname: 'Mclovin' }) // un nuevo Documento instancia del Moldelo User
// userToInsert.edad = 25
// userToInsert.profesion.escuela = 'UNAM'
// userToInsert.save()

var someUser = new User({})

someUser.findTweets()

// Manera dos
User.create({ name: 'Scooby', lastname: 'Doo' }, function (err, res) {
  if (err) console.log(err)
  console.log(res)
})
