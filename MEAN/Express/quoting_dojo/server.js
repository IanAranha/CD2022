
// Import all dependencies
const express = require('express')
const path = require('path')
const bp = require('body-parser')
const mongoose = require('mongoose')

// Create the server
const app = express()

// Connect mongoose to server
mongoose.connect('mongodb://localhost/quotesDB', { useNewUrlParser: true })

// Create a schema which will create the db in MongoDB.
const QuoteSchema = new mongoose.Schema({
  name: { type: String },
  quote: { type: String }
}, { timestamps: true })

// model constructor
const Quote = mongoose.model('quotes', QuoteSchema)

// Initial settings
app.use(express.static(path.join(__dirname, '/static/stylesheets')))
app.use(bp.urlencoded({ extended: true }))

// Setup ejs and view engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// setup home route
app.get('/', function (req, res) {
  console.log('Hit home route')
  res.render('index')
})

app.post('/post_quote', function (req, res) {
  console.log('Hit post_quote route')
  console.log(req.body)
  const quote = new Quote()
  quote.name = req.body.name
  quote.quote = req.body.comment
  quote.save()
    .then(newQuoteData => console.log('Quote created: ', newQuoteData),
      console.log('Saved the quote'))
    .catch(err => console.log(err))
  res.redirect('/')
})

app.get('/quotes', function (req, res) {
  console.log('Hit get route to post page')
  Quote.find().sort({ 'createdAt ': 1 })
    .then(data => res.render('quotes', { data: data }))
    .catch(err => res.json(err))
})

app.post('/return', function (req, res) {
  console.log('Hit redirect route')
  res.redirect('/')
})

// Start the app
app.listen(8500, function () {
  console.log('Listening at port 8500')
})
