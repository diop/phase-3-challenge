const chai = require('chai')
const assert = chai.assert
const getProductBySection = require('./database.js')
const getOrdersByShopperId = require('./database.js')
const getAllRealShoppers = require('./database.js')

describe('getProductBySection', () => {
	it('should test `product-list`', () => {
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
  it( 'should test `shopper-orders`', () => {
    return getOrdersByShopperId( '2' )
    .then( results => {
      assert(results[0]["id"], '2')
      assert(results[1]["id"], '7')
      assert(results[0]["total_cost"], '19.62')
      assert(results[1]["total_cost"], '9.33')
    })
  })
})

describe( 'getAllRealShoppers()', () => {
  it( ' should the command `real-shoppers`', () => {
    return getAllRealShoppers()
    .then( results => {
      assert(results[0]["fname"], 'Michael')
      assert(results[3]["fname"], 'Beyonce')
      assert(results[0]["count"], '4')
      assert(results[1]["count"], '4')
    })
  })
})