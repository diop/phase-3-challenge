const expect = require('chai').expect
const db = require('./database')

describe('product-list', () => {
  it('returns an array', (done) => {
    db.productList('dairy')
      .then((list) => {
        expect(list).to.be.a('Array');
        done();
      })
      .catch(console.log);
  })
})

describe('shopper-orders', () => {
  it('returns an array', (done) => {
    db.shopperOrders('3')
      .then((list) => {
        expect(list).to.be.a('Array');
        done();
      })
      .catch(console.log);
  })
})

describe('read-shoppers', () => {
  it('returns an array', (done) => {
    db.realShoppers()
      .then((list) => {
        expect(list).to.be.a('Array');
        done();
      })
      .catch(console.log);
  })
})
