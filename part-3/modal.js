
const cartButton = document.getElementById("cart-button")
const modal = document.getElementById(".modal")
const modalContent = document.querySelector(".modal-content")
const cartCounter = document.getElementById("cart-item-count")
const closeButton = document.querySelector(".cart-close")
const clearCartButton = document.querySelector(".modal-footer button")

function openModal() {
	modal.classList.add("show-modal")
	modalContent.classList.add("show-modal")
}

function closeModal() {
  modal.classList.remove("show-modal")
  modalContent.classList.remove("show-modal")
}

cartButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)