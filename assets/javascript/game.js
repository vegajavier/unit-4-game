/// WHO IS THE G.O.A.T///
//// Player attributes as objects////

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
let pass = () => {
    let passButton = document.getElementsByClass("passbutton");
    let playerPass =Math.Floor(Math.random() * player.power);
    console.log(playerPass);  /////<---why dont you work????
    opponent.health -= playerPass;
    printToScreen();
    passButton.disabled = true;
     
}
  const printToScreen = () => {
    document.getElementsByClass(".player-health").innerText = player.health;
    document.getElementsByClass(".opponent-health").innerText = opponent1.health;
    document.getElementsByClass(".opponent-health").innerText = opponent2.health;
    document.getElementsByClass(".opponent-health").innerText = opponent3.health;
  }