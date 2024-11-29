const checkoutSection = document.getElementById('checkout-section')
const orderConfirmation = document.getElementById('order-confirmation')

// If user has selected 1 item === true: classlist.toggle('hidden')

let orderPaid = false


if (orderPaid === true) {
    checkoutSection.classList.add('hidden')
    orderConfirmation.classList.remove('hidden')
    console.log('order paid is now true');
}