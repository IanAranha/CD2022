// import dependencies
const express = require('express')

const path = require('path')

const bp = require('body-parser')

const session = require('express-session')

// create express server
const app = express()

// start using server
app.use(express.static(path.join(__dirname, '/static')))
app.use(bp.urlencoded({ extended: true }))
app.use(session({ secret: 'sessionKey' }))

session.counter = 0

// setting up ejs and view
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// set up root route
app.get('/', function (req, res) {
  console.log('Received get request for root route')
  req.session.counter = session.counter
  console.log(req.session.counter)
  res.render('index', { counts: req.session.counter })
})

app.post('/add', function (req, res) {
  console.log('Received Add request')
  session.counter += 1
  res.redirect('/')
})
app.post('/clear', function (req, res) {
  console.log('Received Clear request')
  session.counter = 0
  res.redirect('/')
})

// start server
app.listen(8000, function () {
  console.log('Listening on Port 8000')
})
