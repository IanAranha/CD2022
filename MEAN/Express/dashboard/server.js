// Import all dependencies
const express = require('express')
const path = require('path')
const bp = require('body-parser')
const mongoose = require('mongoose')

// create the server
const app = express()

// Connect mongoose to the Mongo Community DB
mongoose.connect('mongodb://localhost/diver_DB', { useNewUrlParser: true })

// Create a new schema that will be the model for the MongoDB
const DiversSchema = new mongoose.Schema({
  diverName: { type: String },
  diverLocation: { type: String },
  diverSkillLevel: { type: String },
  diverAge: { type: Number },
  comment: { type: String }
}, { timestamps: true })

// Individual event constructor
const Diver = mongoose.model('Diver', DiversSchema)

// static file settings and body-parser set up
app.use(express.static(path.join(__dirname, '/static/stylesheets')))
app.use(bp.urlencoded({ extended: true }))

// Tell server where the view files are located and the templating engine used.
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Set up home route
app.get('/', function (req, res) {
  console.log('Hit home route')
  Diver.find()
    .then(data => res.render('index', { divers: data }))
    .catch(err => res.json(err))
})

app.get('/divers/new', function (req, res) {
  console.log('Hit create new divers route')
  res.render('new')
})

app.post('/divers', function (req, res) {
  console.log('Hit new divers to DB route')
  console.log(req.body)
  const diver = new Diver()
  diver.diverName = req.body.diverName
  diver.diverLocation = req.body.diverLocation
  diver.diverSkillLevel = req.body.diverSkillLevel
  diver.diverAge = req.body.diverAge
  diver.comment = req.body.comment
  diver.save()
    .then(newDiverData => console.log('Diver created: ', newDiverData))
    .catch(err => console.log(err))
  res.redirect('/')
})

// delete a certain record
app.get('/destroy/:id', function (req, res) {
  console.log('Hit delete route.')
  console.log('xxxxx')
  console.log(req.params.id)
  console.log('Ian is King')
  Diver.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      console.log('Deleted record')
      res.redirect('/')
    } else {
      console.log('Delete failed' + err)
    }
  })
})

// show one report to get it to edit.
app.get('/edit/:id', function (req, res) {
  console.log('Hit show one route')
  const id = req.params.id
  console.log(id)
  console.log(typeof id)
  Diver.findOne({ _id: id })
    .then(diver => {
      console.log(diver)
      res.render('edit', { diver: diver })
    })
    .catch(err => res.json(err))
})

// Update selected record
app.post('/update/:id', function (req, res) {
  console.log('Hit the update route')
  const id = req.params.id
  console.log(id)
  Diver.findOne({ _id: id })
    .then(diver => {
      diver.diverName = req.body.diverName
      diver.diverLocation = req.body.diverLocation
      diver.diverSkillLevel = req.body.diverSkillLevel
      diver.diverAge = req.body.diverAge
      diver.comment = req.body.comment
      return diver.save()
    })
    .then(saveResult => res.redirect('/'))
    .catch(err => res.json(err))
})

app.get('/return', function (req, res) {
  console.log('Return to home page')
  res.redirect('/')
})

// start server and app
app.listen(7500, function () {
  console.log('Listening at port 7500')
})
