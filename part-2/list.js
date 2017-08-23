const { productList, shoperOrders, realShoppers } = require('./database')
const print = require('node-print')

const listProducts = section => {
	let list = productList(section)
	console.log('List all products from ' + section + '...')
  print.pt(list)
}

const listOrders = id => {
	let list = shopperOrders(id)
  console.log('List all orders from user ' + id + '...')
  print.pt(list)
}

const listShoppers = () => {
	let list = realShoppers()
  console.log('List all real shoppers...')
  print.pt(list)
}

module.exports = { listProducts, listOrders, listShoppers }
