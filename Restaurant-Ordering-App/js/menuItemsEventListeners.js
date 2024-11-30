import {menuArray} from '/js/data.js'

export const itemsInCart = []

document.addEventListener('click', function(e){

    console.log(...menuArray);

    if (e.target.dataset.itemId){
        // console.log(e.target.dataset.itemId)
        
        const itemId = Number(e.target.dataset.itemId)
        const itemToAdd = menuArray.find(item => item.id === itemId)

        if (itemToAdd) {
            itemsInCart.push(itemToAdd)
            console.log(`${itemToAdd.name} was added to the cart`);
            
            console.log(itemsInCart.map(item => item.name));
        
        } else {
            console.log(`The item with ID ${itemId} does not exist`);
        }
    }
})