
// Load express module
const express = require('express')

// Create a server using express and store it in a variable
const app = express()

// Create the first route

app.get('/', function (request, response) {
  response.send('<h1>This is the first express file!</h1>')
})

app.listen(8000, function () {
  console.log('Listening at port 8000')
})
