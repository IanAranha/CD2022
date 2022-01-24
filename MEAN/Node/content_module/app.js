// http server
const http = require('http')

const port = 6789
const staticContents = require('./static.js')

// Creating a server
const server = http.createServer(staticContents)

server.listen(port)
console.log(`Running on port ${port}`)
