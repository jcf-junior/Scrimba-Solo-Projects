import {menuArray} from '/js/data.js'
import {getMenuItemsHtml} from '/js/renderMenuItems.js'
import { getCheckoutItems } from '/js/renderCheckout.js'

getMenuItemsHtml(menuArray)
getCheckoutItems([])