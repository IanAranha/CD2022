const http = require('http')

const fs = require('fs')

const port = 7077

const server = http.createServer(function (request, response) {
  console.log('client request url: ', request.url)
  // routing

  if (request.url === '/') {
    fs.readFile('views/index.html', 'utf-8', function (errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/stylesheets/style.css') {
    fs.readFile('./stylesheets/style.css', 'utf-8', function(errors, contents) {
      response.writeHead(200, { 'content-type': 'text/css' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cars/Chevy-Bolt-image-1.jpeg') {
    fs.readFile('images/cars/Chevy-Bolt-image-1.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cars/ford_mustang.jpeg') {
    fs.readFile('images/cars/ford_mustang.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cars/hyundai-kona.jpeg') {
    fs.readFile('images/cars/hyundai-kona.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cars/nissan_leaf.jpeg') {
    fs.readFile('images/cars/nissan_leaf.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cats/cat1.jpeg') {
    fs.readFile('images/cats/cat1.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cats/cat2.jpeg') {
    fs.readFile('images/cats/cat2.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cats/cat3.jpeg') {
    fs.readFile('images/cats/cat3.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/images/cats/cat4.jpeg') {
    fs.readFile('images/cats/cat4.jpeg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'image/jpg' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf-8', function(errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/cats') {
    fs.readFile('./views/cats.html', 'utf-8', function(errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/cars/new') {
    fs.readFile('./views/new.html', 'utf-8', function(errors, contents) {
      response.writeHead(200, { 'content-type': 'text/html' })
      response.write(contents)
      response.end()
    })
  } else {
    fs.readFile('views/error.html', 'utf-8', function (errors, contents) {
      response.writeHead('404', { 'content-type': 'text/html' })
      response.write(contents)
      response.end('File not found!')
    })
  }
})

server.listen(port)
console.log(`Listening to localhost at port: ${port}`)
