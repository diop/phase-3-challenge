const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

module.exports = connection
