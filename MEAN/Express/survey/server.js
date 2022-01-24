// import all dependencies
const express = require('express')
const path = require('path')
const bp = require('body-parser')
const session = require('express-session')

// Create the server
const app = express()

// initial settings
app.use(express.static(path.join(__dirname, '/static/stylesheets')))
app.use(bp.urlencoded({ extended: true }))
app.use(session({ secret: 'sessionKey' }))

// set up ejs and view files
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// set up root route
app.get('/', function (req, res) {
  console.log('Received root request')
  res.render('index')
})

app.post('/user', function (req, res) {
  console.log('Received request for result')
  console.log(req.body)
  res.render('result', { user: req.body })
})

app.get('/return', function (req, res) {
  console.log('Received request to return')
  res.redirect('/')
})

// Start server at port 8080
app.listen(8080, function () {
  console.log('Listening at port 8080')
})
