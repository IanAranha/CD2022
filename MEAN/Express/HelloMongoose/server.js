const express = require('express')
const path = require('path')
const bp = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

// create the server
const app = express()

// use the server
app.use(express.static(path.join(__dirname, '/static')))
app.use(bp.urlencoded({ extended: true }))
app.use(session({ secret: 'SessionKey' }))

// setting up ejs and views
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// connect mongoose to mongoDB
mongoose.connect('mongodb://localhost/firstMongoDB', { useNewUrlParser: true })

// create models and schemas
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
})

// create an object that will interface with Mongo
const User = mongoose.model('User', userSchema)

// establish routing
app.get('/', function (req, res) {
  console.log('Received Root request')
  res.render('index')
})

app.post('/users', function (req, res) {
  console.log('Received request for user')
  console.log(req.body)
  const user = new User()
  user.name = req.body.name
  user.age = req.body.age
  user.save()
    .then(newUserData => console.log('user created: ', newUserData))
    .catch(err => console.log(err))
  res.redirect('/')
})

// start server at port 3500
app.listen(3500, function () {
  console.log('Listening at port 3500')
})
