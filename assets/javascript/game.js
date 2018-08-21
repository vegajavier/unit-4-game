/// WHO IS THE G.O.A.T
//1. START GAME


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
const pass = () => {
    let playerAttack = Math.floor(Math.random() * player.power);
    console.log(playerAttack);
    

}

const printToScreen = () => {
    document.getElementsByClassName("player-health").innerText = player.health;
    document.getElementsByClassName("opponent-health").innerText = opponent1.health;
    document.getElementsByClassName("opponent-health").innerText = opponent2.health;
    document.getElementsByClassName("opponent-health").innerText = opponent3.health;
    
}

printToScreen ()




// 2. CHOOSE AN OPPONENT