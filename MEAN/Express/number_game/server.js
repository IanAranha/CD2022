// import express from package manager
const express = require('express')

// import path to define routes
const path = require('path')

// import body-parser
const bp = require('body-parser')

// import session
const session = require('express-session')

// Create express app
const app = express()

// start using app
app.use(bp.urlencoded({ extended: true }))
app.use(session({ secret: 'sessionSecretWord' }))

// define path for static files for css
app.use(express.static(path.join(__dirname, '/static/stylesheets')))

// set up ejs and views folder
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// set the root route
app.get('/', function (req, res) {
  console.log('Received request for root route')
  console.log('Generating random number')
  let context = {}
  console.log('Session.guess: ', req.session.guess)
  console.log('Session.random: ', req.session.random)
  // if nothing in session.guess AND session.random. initiate new game.
  if (!req.session.guess && !req.session.random) {
    const random = Math.floor((Math.random() * 100) + 1)
    req.session.random = random
    console.log('Starting new game..')
    console.log('Generating Random...')
    console.log('Session.random: ', req.session.random)
    context = {
      status: 'hidden',
      msg: '',
      showForm: 'hidden'
    }
  } else if (req.session.guess > req.session.random) {
    console.log('Too high!')
    context = {
      status: 'block red',
      msg: 'High!',
      showForm: 'hidden'
    }
  } else if (req.session.guess < req.session.random) {
    console.log('Too Low!')
    context = {
      status: 'block red',
      msg: 'Low!',
      showForm: 'hidden'
    }
  } else if (req.session.guess === req.session.random) {
    console.log('You are right!')
    context = {
      status: 'block green',
      msg: 'You guessed the number!',
      showForm: 'show'
    }
  }
  res.render('index', { context: context })
})

app.post('/guess', function (req, res) {
  console.log('Received guess request and input')
  req.session.guess = parseInt(req.body.guess)
  console.log(req.session.guess)
  res.redirect('/')
})

app.post('/reset', function (req, res) {
  console.log('Clearing session')
  req.session.destroy()
  res.redirect('/')
})

app.listen(2000, function () {
  console.log('Listening at Port 2000')
})
