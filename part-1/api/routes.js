const express = require('express')
const router = express.Router()
const daysOfWeek = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 }


router.get('/days/:day', (request, response) => {
  let day = request.params.day.toLowerCase()
  !daysOfWeek[day] ?
    response.status(400).send(`response: '${day}' is not a valid day!`) :
    response.status(200)
      .set('Content-Type', 'text/plain')
      .send(`response: ${daysOfWeek[day]}`)
})

router.post('/array/concat', (request, response, next) => {
  let array1 = request.body.array1
  let array2 = request.body.array2
  let concat = array1.concat(array2)
  Array.isArray(array1) && Array.isArray(array2) ?
  response.header('content-type', 'application/json').json( {"result": concat} ) :
  response.status(400)
    .header('content-type', 'application/json')
    .json( {"error": "Input data should be of type Array."} )
})

module.exports = router
