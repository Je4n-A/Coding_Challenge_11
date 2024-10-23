// Get HTML elements by their IDs
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value); //Product Price
    const quantity = parseInt(quantityInput.value); // Get quantity
    const totalPrice = productPrice * quantity; // Calculate total price
    
    totalPriceElement.textContent = totalPrice.toFixed(2); // Update total price element
}
// Add event listeners to update total price when product or quantity changes
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);
