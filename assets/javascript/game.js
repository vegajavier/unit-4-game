/// WHO IS THE G.O.A.T
//1. START GAME
function startGame() {

}

let player = {
    health: 100,
    power: 25,
    counterAttack: 15,
}
let opponent1 ={
    health:100,
    power: 15,
    counterAttack: 15,
}

let opponent2 ={
    health:100,
    power: 15,
    counterAttack: 10,
}

let opponent3 ={
    health:100,
    power: 15,
    counterAttack: 5,
}

const printToScreen = () => {
    document.getElementsByClassName('player-health').innerText = player.health;
    document.getElementsByClassName('opponent-health').innerText = opponent1.health;
    document.getElementsByClassName('opponent-health').innerText = opponent2.health;
    document.getElementsByClassName('opponent-health').innerText = opponent3.health;
    
}


// 2. CHOOSE AN OPPONENT