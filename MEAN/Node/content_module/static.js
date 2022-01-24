const fs = require('fs')

module.exports = function (request, response) {
  if (request.url === ('/')) {
    fs.readFile('./index.html', 'utf-8', function (errors, contents) {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else {
    response.writeHead(404)
    response.end('File Not Found')
  }
}
