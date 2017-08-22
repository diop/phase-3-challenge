
const cartButton = document.getElementById("cart-button")
const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal-container")
const cartCounter = document.getElementById("cart-item-count")
const closeButton = document.querySelector(".cart-close")
const clearCartButton = document.querySelector(".modal-footer button")
let itemsArray = []
let totalPrice

function openModal() {
	modalOverlay.classList.add("show-modal")
	modal.classList.add("show-modal")
}

function closeModal() {
  modalOverlay.classList.remove("show-modal")
  modal.classList.remove("show-modal")
}

function getItemData(element){
	const modalItemsRow = document.createElement("DIV")
	const itemNameNode = document.createElement("SPAN")
	const itemPriceNode = document.createElement("SPAN")
	const showTotalPrice = document.querySelector(".modal-total-price")
	const itemPriceAmtNode = document.createTextNode(price)
	const itemNameTextNode = document.createTextNode(name)

	let childNodes = element.target.parentElement.childNodes
	let name = childNodes[1].innerHTML
	let price = childNodes[3].innerHTML
	itemsArray.push ({ name, price })
	cartCounter.innerHTML = itemsArray.length
	getTotalPrice()
	showTotalPrice.innerHTML = "$" + totalPrice.toFixed(2)

	itemNameNode.appendChild(itemNameTextNode)
  	modalItemsRow.appendChild(itemNameNode)
  	itemPriceNode.appendChild(itemPriceAmtNode)
  	modalItemsRow.appendChild(itemPriceNode)
  	modalItems.appendChild(modalItemsRow)
}

function getTotalPrice() {
  totalPrice = itemsArray.reduce(getSum, 0)
  return totalPrice
}

cartButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)