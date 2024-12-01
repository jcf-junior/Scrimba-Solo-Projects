
import { itemsInCart } from "./menuItemsEventListeners.js"

const checkoutSection = document.getElementById('checkout-section')
const orderConfirmation = document.getElementById('order-confirmation')
const checkoutBtn = document.getElementById('checkout-btn')
const checkoutSummaryContainer = document.getElementById('checkout-summary-container')

const checkoutHtmlToRender = []

// If user has selected 1 item === true: classlist.toggle('hidden')


export function getCheckoutItems(checkoutItemsArr = itemsInCart){
    const itemsHtmlToRender = []
    if (checkoutItemsArr) {

        
        checkoutItemsArr.map(function(item){
            itemsHtmlToRender.push(
                `
                <div class="checkout-item-container">
                    <h2 class="checkout-item-title">${item.name}</h2>
                    <button type="button" id="checkout-remove-btn">remove</button>
                    <p class="checkout-item-price price">$${item.price}</p>
                </div>
                `
            )
        })
    }

    return itemsHtmlToRender.join('')
}

export function renderCheckout(itemsArr = checkoutSummaryContainer) {
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
                <p class="price">$26</p>
            </div>

            <div class="checkout-btn-container">
                <button id="checkout-btn" type="button" class="checkout-btn buy-btn">Complete Order</button>
            </div>

        </div>

    `

    return
}

