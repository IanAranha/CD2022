// import the express module
const express = require('express')
const path = require('path')

// invoke the express model and create a server with this command and store ref to it in a variable.
const app = express()

// first route
app.get('/', function (request, response) {
  response.send('<h1>This is a static comment</h1>')
})

// second route telling server to ise
app.use(express.static(path.join(__dirname, '/static')))

// Tell server port to listen at
app.listen(8000, function () {
  console.log('Listening at port 8000')
})
