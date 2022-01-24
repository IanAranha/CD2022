const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/static')))

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/', function (request, response) {
  response.render('index')
})

app.get('/users', function (request, response) {
  const usersArray = [
    { name: 'Rebecca', email: 'rebecca@rebecca.com' },
    { name: 'Rachel', email: 'rachel@rachel.com' },
    { name: 'Ryan', email: 'ryan@ryan.com' }
  ]
  response.render('users', { users: usersArray })
})

app.listen(8500, function () {
  console.log('Listening at port 8500')
})
