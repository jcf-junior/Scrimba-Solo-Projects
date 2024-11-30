const checkoutSection = document.getElementById('checkout-section')
const orderConfirmation = document.getElementById('order-confirmation')
const checkoutBtn = document.getElementById('checkout-btn')
// If user has selected 1 item === true: classlist.toggle('hidden')

let orderPaid = false


if (orderPaid === true) {
    checkoutSection.classList.add('hidden')
    orderConfirmation.classList.remove('hidden')
    console.log('order paid is now true');
}


// const checkoutSection = document.getElementById('checkout-section')
// const orderConfirmation = document.getElementById('order-confirmation')
// const paymentModal = document.getElementById('payment-modal')
// const modalPayBtn = document.getElementById('modal-pay-btn')

// // If user has selected 1 item === true: classlist.toggle('hidden')

// let orderPaid = false

// modalPayBtn.addEventListener('click', function(){
//     checkoutSection.classList.add('hidden')
//     paymentModal.classList.add('hidden')
//     orderConfirmation.classList.remove('hidden')
//     console.log('order paid is now true');
// })

// if (orderPaid === true) {
//     checkoutSection.classList.add('hidden')
//     paymentModal.classList.add('hidden')
//     orderConfirmation.classList.remove('hidden')
//     console.log('order paid is now true');
// }