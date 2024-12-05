import {menuArray} from '/js/data.js'
import {getMenuItemsHtml} from '/js/renderMenuItems.js'
import {getCheckoutItems, 
    renderCheckout, 
    getCartItemsTotalPrice, 
    removeCartItems } from '/js/renderCheckout.js'
import {showPaymentModal} from '/js/paymentModal.js'

export const itemsInCart = []

// Event Listener for add button on menu items
document.addEventListener('click', function(e){
    if (e.target.dataset.itemId){

        // Convert item.id from the dataset object from string to num
        const itemId = Number(e.target.dataset.itemId)

        // Find the item with matching ID
        const itemToAdd = menuArray.find(item => item.id === itemId)

        // If it exists, add it to the cart array
        if (itemToAdd) {
            itemsInCart.push(itemToAdd)

            console.log(`${itemToAdd.name} was added to the cart`);
            console.log(itemsInCart.map((item) => item.name));
            getCartItemsTotalPrice(itemsInCart)
            
            renderCheckout(itemsInCart)


        } else {
            console.log(`The item with ID ${itemId} does not exist`);
        }
    }
})


// Event Listener for checkout items
document.addEventListener("click", function(e) {
    if (e.target.dataset.itemindex) {
        let indexToRemove = Number(e.target.dataset.itemindex)
        removeCartItems(indexToRemove)
    }
})

getMenuItemsHtml(menuArray)
// getCheckoutItems([])