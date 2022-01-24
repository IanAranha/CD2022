const express = require('express')
const path = require('path')
const bp = require('body-parser')
const sess = require('express-session')

// Start the server
const app = express()

// Set the default directory to views folder
app.set('views', path.join(__dirname, '/views'))

// Using the body-parser
app.use(bp.urlencoded({ extended: true }))

// Using session
app.use(sess({ secret: 'secret_string' }))

// Set view engine to ejs
app.set('view engine', 'ejs')

// Set path for CSS files and JavaScript libraries
app.use(express.static(path.join(__dirname, '/static/stylesheets')))
app.use(express.static(path.join(__dirname, '/views')))
app.use(express.static(path.join(__dirname, '/node_modules')))

// Root Route
app.get('/', function (req, res) {
  console.log('Received request for home page')
  console.log(`Displaying the session: ${req.session.email}`)
  res.render('index', { title: 'my Express project' })
})

// Route to process new user
app.post('/users', function (req, res) {
  console.log('Received request to process user')
  console.log('User data\n\n', req.body)
  console.log('User processed, now redirecting')
  req.session.email = req.body.email
  console.log(`Displaying the session: ${req.session.email}`)
  res.redirect('/')
})

// Route to extract data from url
app.get('/users/:id', function (req, res) {
  console.log('The user id you requested is: ', req.params.id)
  res.send(`You requested the user with id: ${req.params.id}`)
})

app.listen(7700, function () {
  console.log('Listening at port 7700')
})
