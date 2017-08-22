
const cartButton = document.getElementById("cart-button")
const modal = document.getElementById(".modal")
const modalContent = document.querySelector(".modal-content")

function openModal() {
	modal.classList.add("show-modal")
	modalContent.classList.add("show-modal")
}

cartButton.addEventListener("click", openModal)