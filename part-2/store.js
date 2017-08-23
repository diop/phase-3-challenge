const { productList, shopperOrders, realShoppers, db } = require('./database')

const inputs = (arg1, arg2) => {
	switch (arg1) {
    case 'product-list':
    db.productList(arg2)
      .then(listProducts)
      .catch(error);
    break;
  case 'shopper-orders':
    db.shopperOrders(arg2)
      .then(listOrders)
      .catch(error;
    break;
  case 'real-shoppers':
    db.realShoppers()
      .then(listShoppers)
      .catch(error);
    break;
  default:
    console.log('Please enter a valid command.')
	}
}

inputs(process.argv[2], process.argv[3])
