const db = require('./database')
const { productList, shopperOrders, realShoppers } = require('./database.js')

const inputs = (arg1, arg2) => {
	switch (arg1) {
    case 'product-list':
    db.productList(arg2)
      .then(listProducts)
      .catch(errorHandler);
    break;
  case 'shopper-orders':
    db.shopperOrders(arg2)
      .then(listOrders)
      .catch(errorHandler);
    break;
  case 'real-shoppers':
    db.realShoppers()
      .then(listShoppers)
      .catch(errorHandler);
    break;
  default:
    console.log('Please enter a valid command.')
	}
}

inputs(process.argv[2], process.argv[3])
