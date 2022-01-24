const express = require('express')
const path = require('path')

const app = express()

// Set the default directory to views folder
app.set('views', path.join(__dirname, '/views'))
app.set('view engin', 'ejs')

// Set for folder for CSS. and JavaScript libraries
console.log(__dirname)
app.use(express.static(path.join(__dirname, '/static')))
app.use(express.static(path.join(__dirname, '/static/stylesheets')))
app.use(express.static(path.join(__dirname, '/static/images')))
app.use(express.static(path.join(__dirname, './views')))
app.use(express.static(path.join(__dirname, '/node_modules')))

// Set the view engine to ejs
app.set('view engine', 'ejs')

// Set route
app.get('/', (req, res) => {
  console.log('Received request for home page')
  res.render('index.html')
})

app.get('/cats', (req, res) => {
  console.log('Received request for cats page')
  res.render('cats')
})

app.get('/leopard', (req, res) => {
  const catInfo = [
    { taxonomic_name: 'Pantera pardus' },
    { characteristics: 'A leopard’s body is built for hunting. They have sleek, powerful bodies and can run at speeds of up to 57 kph. They are also excellent swimmers and climbers and can leap and jump long distances.' },
    { size: 'Males are 23.6 - 27.6 inches at shoulder. Females are generally smaller at 22.4–25.2 in' },
    { weight: 'Males are 81.6–198.4 lb, while females are 61.7–132.3 lb' }
  ]
  console.log('Received request for leopard page')
  res.render('leopard', { cats: catInfo })
})

app.listen(8000, function () {
  console.log('Listening at port 8000')
})
