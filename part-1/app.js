const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000


app.listen(port, () => {
	console.log(`App is listening on port ${port}!`)
} )