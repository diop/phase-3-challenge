const print = require('node-print')
const db = require('./database')

const {
  	productList,
  	shopperOrders,
  	realShoppers
} = require('./database.js')


const productSection = section => {
	let list = getProductsBySection(section)
	console.log('message...')
    print.pt(list)
}

const ordersById = id => {
	let list = getOrdersByShopperId(id)
    console.log('message...')
    print.pt(list)
}

const realShoppers = () => {
	let list = getAllRealShoppers()
    console.log('message...')
    print.pt(list)
}

const input = (arg1, arg2) => {
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
      .then(listRealShoppers)
      .catch(errorHandler);
    break;
  default:
    console.log('Please enter a valid command.')
	}
}

input(process.argv[2], process.argv[3])
