
import { itemsInCart } from "../index.js"
import {showPaymentModal} from '/js/paymentModal.js'

export const checkoutSection = document.getElementById('checkout-section')
const orderConfirmation = document.getElementById('order-confirmation')
const checkoutSummaryContainer = document.getElementById('checkout-summary-container')

const checkoutHtmlToRender = []

// Get items that were added to cart
export function getCheckoutItems(checkoutItemsArr = itemsInCart){
    const itemsHtmlToRender = []
    if (checkoutItemsArr) {

        // For each item in the checkout array, we push their html to be rendered
        checkoutItemsArr.map(function(item, index){
            itemsHtmlToRender.push(
                `
                <div class="checkout-item-container">
                    <h2 class="checkout-item-title">${item.name}</h2>
                    <button type="button" id="checkout-remove-btn" class="remove-btn" data-itemIndex="${index}">remove</button>
                    <p class="checkout-item-price price">$${item.price}</p>
                </div>
                `
            )
        })
    }

    return itemsHtmlToRender.join('')
}

// Sum the price of items in cart
export function getCartItemsTotalPrice(itemsInCartArr) {
    const totalPrice = itemsInCartArr.reduce((accumulator, item) => accumulator + item.price, 0)
    return totalPrice
}

// Render the html for the cart items
export function renderCheckout(cartItemsArr) {
    checkoutSection.innerHTML = 
    `
        <div class="checkout-container">
            <h2 class="center">Your order</h2>

            <div id="checkout-summary-container" 
            class="checkout-summary-container">
                
                ${getCheckoutItems()}

            </div>

            <div class="checkout-total-container">
                <h2 class="checkout-item-title">Total Price:</h2>
                <p class="price">$${getCartItemsTotalPrice(cartItemsArr)}</p>
            </div>

            <div class="checkout-btn-container">
                <button id="checkout-btn" type="button" class="checkout-btn buy-btn">Complete Order</button>
            </div>

        </div>`
        const checkoutBtn = document.getElementById('checkout-btn')
        checkoutBtn.addEventListener('click', () => showPaymentModal())

    return
}

export function removeCartItems(indexOfItemToRemove = 0) {
    // console.log("Item a remover: ", itemsInCart[indexOfItemToRemove])
    itemsInCart.splice(indexOfItemToRemove, 1)
    // console.log('items in cart after removal: ', itemsInCart)

    if (itemsInCart.length > 0) {
        renderCheckout(itemsInCart) 
    } else {
        checkoutSection.innerHTML = ''
    }
}


