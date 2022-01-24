function getStuffFromDatabase (resolve) {
  let data = 'whee'
  setTimeout(function () {
    data = [
      { name: 'Todd' },
      { name: 'Michael' },
      { name: 'Portia' }
    ]
    resolve(data)
  }, 1000)
}

function requestDataFromDatabase () {
  console.log('running')
  // creates promise
  const data = new Promise(function (resolve, reject) {
    getStuffFromDatabase(resolve, reject) // kind of like a shiny callback
  })

  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function (data) {
    console.log(data, 'ASynchronous')
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name)
    }
  })
  data.catch(function () {
    console.log('failure')
  })
  console.log('end')
}

requestDataFromDatabase()
