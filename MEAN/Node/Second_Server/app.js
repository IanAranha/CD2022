const http = require('http')

const fs = require('fs')

const server = http.createServer(function (request, response) {
  console.log('client request url: ', request.url)

  // routing

  if (request.url === '/') {
    fs.readFile('index.html', 'utf-8', function (errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/ninjas') {
    fs.readFile('ninjas.html', 'utf-8', function (errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/dojos/new') {
    fs.readFile('dojos.html', 'utf-8', function (errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else {
    fs.readFile('error.html', 'utf-8', function (errors, contents) {
      response.writeHead('404', { 'content-type': 'text/html' })
      response.write(contents)
      response.end('File not found!')
    })
  }
})

server.listen(6789)
console.log('Running on localhost port 6789')
