
import { itemsInCart } from "./menuItemsEventListeners.js"

const checkoutSection = document.getElementById('checkout-section')
const orderConfirmation = document.getElementById('order-confirmation')
const checkoutBtn = document.getElementById('checkout-btn')
const checkoutHtmlToRender = []

// If user has selected 1 item === true: classlist.toggle('hidden')


export function getCheckoutItems(checkoutItemsArr = []){
    if (checkoutItemsArr) {
        checkoutHtmlToRender.push(checkoutItemsArr.map(item => 
            item.name))
            console.log('CheckoutHtmlToRender array:', checkoutHtmlToRender);
    }

}

