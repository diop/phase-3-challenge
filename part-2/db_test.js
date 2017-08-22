const chai = require('chai')
const assert = chai.assert
const getProductBySection = require('./db.js')

describe('getProductBySection', () => {
	it('should test product-list', () => {
		return getProductBySection('dairy')
		.then(results => {
			assert(results[0]['name'], 'Butter')
			assert(results[1]['name'], 'Cheese')
			assert(results[1]['section'], 'dairy')
			assert(results[4]['section'], 'dairy')
		})
	})
})