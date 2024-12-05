import { renderCheckout } from "./renderCheckout.js"
import { itemsInCart } from "../index.js" 
import { checkoutSection } from "./renderCheckout.js"

const paymentModalSection = document.getElementById('payment-modal-section')
const paymentModalForm = document.getElementById('payment-modal-form')
const modalPayBtn = document.getElementById('modal-pay-btn')
const orderConfirmationMessage = document.getElementById('order-confirmation')

export function showPaymentModal() {
    paymentModalSection.classList.remove('hidden')
}

function renderConfirmationMessage() {
    const buyerName = document.getElementById('buyerName')
    orderConfirmationMessage.innerHTML =`
    <div class="order-confirmation-container">
        <h3>Thanks ${buyerName.value}! Your order is on its way!</h3>
    </div>
    `
}

paymentModalForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log('form submitted')
    paymentModalSection.classList.add('hidden')
    orderConfirmationMessage.classList.remove('hidden')
    checkoutSection.innerHTML = ''
    renderConfirmationMessage()
})