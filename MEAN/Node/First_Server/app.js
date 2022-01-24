const http = require('http')

const fs = require('fs')

const server = http.createServer(function (request, response) {
  console.log('client request url:', request.url)

  // routing
  if (request.url === '/') {
    fs.readFile('index.html', 'utf-8', function (errors, contents) {
      console.log('************')
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/dojo') {
    fs.readFile('dojo.html', 'utf-8', function (errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else {
    response.writeHead('404')
    response.end('File not found')
  }
})

server.listen(8000)
console.log('Running on localhost port 8000')
