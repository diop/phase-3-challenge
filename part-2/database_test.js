const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const db = require('./database')

describe('product-list', () => {
  it('returns an array', (done) => {
    db.productList('dairy')
      .then((list) => {
        expect(list).to.be.a('Array');
        done();
      })
      .catch(console.log);
  });

  it('lists the correct section', (done) => {
    db.productList('dairy')
      .then((list) => {
        expect(list.length).to.equal(7);
        expect(list[4].name).to.equal('Milk');
        done();
      })
      .catch(console.log);
  });
});

describe('shopper-orders', () => {
  it('returns an array', (done) => {
    db.shopperOrders('3')
      .then((list) => {
        expect(list).to.be.a('Array');
        done();
      })
      .catch(console.log);
  });

  it('has the right number of orders', (done) => {
    db.shopperOrders('3')
      .then((list) => {
        expect(list.length).to.equal(2);
        done();
      })
      .catch(console.log);
  });

  it('produces the correct sum', (done) => {
    db.shopperOrders('3')
      .then((list) => {
        expect(list[1].sum).to.equal(19.65);
        done();
      })
      .catch(console.log);
  })
});

describe('read-shoppers', () => {
  it('returns an array', (done) => {
    db.realShoppers()
      .then((list) => {
        expect(list).to.be.a('Array');
        done();
      })
      .catch(console.log);
  });

  it('returns the right number of shoppers', (done) => {
    db.realShoppers()
      .then((list) => {
        expect(list.length).to.equal(4);
        done();
      })
      .catch(console.log);
  });

  it('counts orders correctly', (done) => {
    db.realShoppers()
      .then((list) => {
        expect(list[2].count).to.equal('2');
        done();
      })
      .catch(console.log);
  });
});
