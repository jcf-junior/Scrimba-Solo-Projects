/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthText = document.getElementById('length-text')
const volumeText = document.getElementById('volume-text')
const massText = document.getElementById('mass-text')

const inputBox = document.getElementById('input-box')
const inputBtn = document.getElementById('convert-btn')

inputBtn.addEventListener('click', function() {

    convertLength(inputBox.value)
    convertVolume(inputBox.value)
    convertMass(inputBox.value)

})


function convertLength(input) {
    const lengthMeters = input/3.281
    const lengthFeet = input*3.281 

    lengthText.textContent = `${input} meters = ${lengthFeet.toFixed(3)} feet | 
    ${input} feet = ${lengthMeters.toFixed(3)} meters`
    
    return
}

function convertVolume(input) {
    const volumeLiters = input/0.264
    const volumeGallons = input*0.264 

    volumeText.textContent = `${input} liters = ${volumeGallons.toFixed(3)} gallons | 
        ${input} gallons = ${volumeLiters.toFixed(3)} liters`

    return
}

function convertMass(input) {
    const massKg = input/2.204
    const massLbs = input*2.204 

    massText.textContent = `${input} kilos = ${massLbs.toFixed(3)} pounds | 
    ${input} pounds = ${massKg.toFixed(3)} kilos`

    return
}

