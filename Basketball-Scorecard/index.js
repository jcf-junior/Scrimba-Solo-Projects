let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

homeScore = 0
guestScore = 0

function homeAdd1points() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeAdd2points() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeAdd3points() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestAdd1points() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestAdd2points() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestAdd3points() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}