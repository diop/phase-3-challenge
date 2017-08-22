const chai = require('chai')
const assert = chai.assert
const getProductBySection = require('./db.js')
const getOrdersByShopperId = require('./db.js')

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

describe( 'getOrdersByShopperId( id )', () => {
  it( 'test the database function for the command `shopper-orders`', () => {
    return getOrdersByShopperId( '2' )
    .then( results => {
      assert(results[0]["id"], '2')
      assert(results[1]["id"], '7')
      assert(results[0]["total_cost"], '19.62')
      assert(results[1]["total_cost"], '9.33')
    })
  })
})