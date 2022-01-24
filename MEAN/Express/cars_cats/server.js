const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/static')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/static/cars.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/cars.html'))
})

app.get('/static/cats.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/cats.html'))
})

app.get('/static/form.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/form.html'))
})

app.listen(8330, function () {
  console.log('Listening on port 8330')
})
