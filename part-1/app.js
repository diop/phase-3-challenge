const express = require('express')
const app = express()
const api = require('./api/routes')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', api)

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}!`)
})
