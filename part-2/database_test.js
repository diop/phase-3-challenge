const expect = require('chai').expect
const db = require('./database')

describe('productList', () => {
  it('returns an array', done => {
    db.productList('dairy')
      .then((list) => {
        expect(list).to.be.a('Array')
        done()
      })
      .catch(console.log);
  })
})

describe('shopperOrders', () => {
  it('returns an array', done => {
    db.shopperOrders('3')
      .then((list) => {
        expect(list).to.be.a('Array')
        done();
      })
      .catch(console.log);
  })
})

describe('realShoppers', () => {
  it('returns an array', done => {
    db.realShoppers()
      .then((list) => {
        expect(list).to.be.a('Array')
        done();
      })
      .catch(console.log)
  })
})
