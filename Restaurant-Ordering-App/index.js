import {menuArray} from '/data.js'

const menuSection = document.getElementById('menu-section')


document.getElementById('menu-section').innerHTML = menuSection.innerHTML = `
    <p>hello, this is working</p>`

function getMenuItemsHtml(menuArray) {

    const htmlToRender = []

    menuArray.map(function(menuItem){
        const {name, ingredients, id, price, emoji} = menuItem

        const newEmoji = emojiToDataURL(emoji)

        htmlToRender.push(`
            <div class="menu-item">
                <div class="menu-item-card-container">
                    <img class="menu-item-img" src="${newEmoji}" alt="">
                    <div class="menu-item-info">
                        <h2 class="menu-item-title">
                            ${name}
                        </h2>
                        <p class="menu-item-description">${ingredients.join(', ')}</p>
                        <p class="menu-item-price">$${price}</p>
                    </div>
                    <button class="menu-item-add-btn"><p>+</p></button>
                </div>
            </div>
            `)
    })

    return renderItems(htmlToRender.join(''))
}

function emojiToDataURL(emoji, fontSize = 64) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Ajustar o tamanho do canvas (um pouco maior para evitar cortes)
    const padding = fontSize * 0.2; // Ajuste para evitar cortes
    canvas.width = fontSize;
    canvas.height = fontSize + padding;
    
    // Configurar estilo da fonte
    context.font = `${fontSize}px sans-serif`;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    
    // Desenhar o emoji centralizado
    context.fillText(emoji, canvas.width / 2, canvas.height / 2);
    
    // Retornar URL de dados
    return canvas.toDataURL();
}


function renderItems(htmlToRender) {

    return menuSection.innerHTML = htmlToRender
}

getMenuItemsHtml(menuArray)