const print = require('node-print')

const {
  getProductsBySection,
  getOrdersByShopperId,
  getAllRealShoppers
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
		case "product-list": productSection(arg2)
		    break;
		case "shopper-orders": ordersById(arg2)
		    break;
		case "real-shoppers": realshoppers()
		    break;
		default:
	}
}

input(process.argv[2], process.argv[3])