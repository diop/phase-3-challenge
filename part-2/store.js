#!/usr/local/bin/node

const db = require('./database')
const { listProducts, listOrders, listShoppers} = require('./list')

const inputs = (arg1, arg2) => {
	switch (arg1) {
    case 'product-list':
    db.productList(arg2)
      .then(listProducts)
			.catch(console.log)
    break;
  case 'shopper-orders':
    db.shopperOrders(arg2)
      .then(listOrders)
      .catch(console.log);
    break;
  case 'real-shoppers':
    db.realShoppers()
      .then(listShoppers)
      .catch(console.log);
    break;
  default:
    console.log('Please enter a valid command.')
	}
}

inputs(process.argv[2], process.argv[3])
