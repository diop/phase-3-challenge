const pgp = require('pg-promise')();
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp( CONNECTION_STRING )


const getProductsBySection = section => {
	return db.any(`
    SELECT name, section
    FROM grocery_items
    WHERE section = '${section}'
  `) 
}

module.exports = {
  getProductsBySection,
}