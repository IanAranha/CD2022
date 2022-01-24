// simulated really slow DB call.

function getStuffFromDatabase (callback) {
  let data
  setTimeout(function () {
    if (typeof (callback) === 'function') {
    // it just got back from the DB!
      data = [
        { name: 'Todd' },
        { name: 'Michael' },
        { name: 'Portia' }
      ]
      callback(data)
    }
  }, 10000)
  // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
  return data
}

// simulated request;
function requestDataFromDatabase () {
  const data = getStuffFromDatabase(function myCallBack (data) {
    console.log(data, 'Asynchronous')
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name)
    }
  })
  console.log(data, 'Synchronous')
}

function catchFly () {
  console.log('I just caught a fly!')
}

// start calling functions here
console.log('***********************')
requestDataFromDatabase()

// keep running my program!
console.log('Hello')

catchFly()
