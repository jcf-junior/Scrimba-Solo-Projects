const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButtonEl = document.getElementById('generate-btn')

let password1El = document.getElementById('password1')
let password2El = document.getElementById('password2')

let passLength = 15
let password = ''

console.log(password1El.textContent)

function generateComplexPassword() {    
    password = ''
    for (let i = 0; i < passLength; i++ ) {
        password += characters[Math.floor( Math.random() * characters.length )]
    }
    return password
}

function displayPassword() {

    password1El.textContent = ''
    password2El.textContent = ''
    password1El.textContent = generateComplexPassword()
    password2El.textContent = generateComplexPassword()
}

function copyPassword(passToCopy = 0) {
    console.log('passToCopy executed')
    if (passToCopy == 1) {
        let copyPass = password1El

        if (password1El.textContent.length > 0) {
            navigator.clipboard.writeText(copyPass.textContent)
            console.log('pass1 copied')
        }
    } else if (passToCopy == 2) {

        let copyPass = password2El

        if (password2El.textContent.length > 0) {
            navigator.clipboard.writeText(copyPass.textContent)
            console.log('pass2 copied')
        }
    } else {
        console.log('Something\'s wrong, pass can\'t be copied')
    }

}

// generateButtonEl.addEventListener('click', displayPassword())

function lightMode() {
    let bodyEl = document.body
    let lightBtnEl = document.getElementById('light-btn')

    bodyEl.classList.toggle('light-mode')
    // lightBtnEl.textContent = 'Dark Mode'

}