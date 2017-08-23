const { productList, shoperOrders, realShoppers } = require('./database')
const print = require('node-print')

const listProducts = section => {
	let list = productList(section)
	console.log('message...')
  print.pt(list)
}

const listOrders = id => {
	let list = shopperOrders(id)
  console.log('message...')
  print.pt(list)
}

const listShoppers = () => {
	let list = realShoppers()
  console.log('message...')
  print.pt(list)
}

module.exports = print
