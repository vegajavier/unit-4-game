//Global variables
$(document).ready(function () {

    let players = {
        'montana': {
            name: 'montana',
            health: 120,
            attack: 8,
            image: "assets/images/giphy.gif",
            enemyAttackBack: 15
        },
        'brady': {
            name: 'brady',
            health: 100,
            attack: 14,
            image: "assets/images/giphy (2).gif",
            enemyAttackBack: 5
        },
        'marino': {
            name: 'marino',
            health: 150,
            attack: 8,
            image: "assets/images/giphy (3).gif",
            enemyAttackBack: 20
        },
        'manning': {
            name: 'manning',
            health: 180,
            attack: 7,
            image: "assets/images/giphy (5).gif",
            enemyAttackBack: 20
        }
    }
});

let currentCharacter;
let currentOpponent;
let fighters;
let indexofCurrChar;
let fightresult;
let turncounter = 1;
let killcounter = 0;
