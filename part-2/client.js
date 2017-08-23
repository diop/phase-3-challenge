const pgp = require('pg-promise')();
const CONNECTION_STRING = `postgresql://localhost:5432/grocery_store`
const db = pgp( CONNECTION_STRING )

module.exports = client
