let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function add1(team) {
    if(team == "home") {
        homeScore += 1
    } else {
        guestScore += 1
    }
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    updateScore()
}
function add2(team) {
    if(team == "home") {
        homeScore += 2
    } else {
        guestScore += 2
    }
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    updateScore()
}
function add3(team) {
    if(team == "home") {
        homeScore += 3
    } else {
        guestScore += 3
    }
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    updateScore()
}
function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    updateScore()
}
function updateScore() {
    homeScoreEl.classList.remove("leader")
    guestScoreEl.classList.remove("leader")
    if(homeScore > guestScore){
        homeScoreEl.classList.add("leader")
    } else if(guestScore > homeScore){
        guestScoreEl.classList.add("leader")
    } 
}

