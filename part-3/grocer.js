
const cartButton = document.getElementById("cart-button")
const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal-container")
const cartCounter = document.getElementById("cart-item-count")
const closeButton = document.querySelector(".cart-close")
const clearCartButton = document.querySelector(".modal-footer button")

function openModal() {
	modalOverlay.classList.add("show-modal")
	modal.classList.add("show-modal")
}

function closeModal() {
  modalOverlay.classList.remove("show-modal")
  modal.classList.remove("show-modal")
}

cartButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)