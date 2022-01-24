const express = require('express')
const app = express()
const path = require('path')

// Set the default directory to views folder
app.set('views', path.join(__dirname, '/views'))

// Set for folder for CSS. and JavaScript libraries
console.log(__dirname)
app.use(express.static(path.join(__dirname, '/static')))
app.use(express.static(path.join(__dirname, '/static/stylesheets')))
app.use(express.static(path.join(__dirname, '/static/images')))
app.use(express.static(path.join(__dirname, './views')))
app.use(express.static(path.join(__dirname, '/node_modules')))

// Set the view engine to ejs
app.set('view engine', 'ejs')

// Set route
app.get('/', (req, res) => {
  console.log('Received request for home page')
  res.render('index.html')
})

app.get('/cars', (req, res) => {
  console.log('Received request for cars page')
  res.render('cars')
})

app.get('/cats', (req, res) => {
  console.log('Received request for cats page')
  res.render('cats')
})

app.listen(8000, function () {
  console.log('Listening at port 8000')
})
