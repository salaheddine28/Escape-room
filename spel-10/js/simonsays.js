// Constanten
const simonSays = document.querySelector('.simonSays');
const groeneButton = document.querySelector('#groeneButton');
const rodeButton = document.querySelector('#rodeButton');
const geleButton = document.querySelector('#geleButton');
const blauweButton = document.querySelector('#blauweButton');
const scoreSimonSays = document.querySelector('.score');
const alleButtons = document.querySelectorAll('.kleurenKnop');
const btnStart = document.querySelector('#btnSubmit');
const btnRetry = document.querySelector('#btnRetry');
btnRetry.style.display = "none";

// Variabelen
let volgordeSpel = [];
let volgordeSpeler = [];
let teller = 0;
let score = 0;
let klikbaar = false;

// Audio Files 
let lost = document.querySelector('#lostsoundmp3');
let win = document.querySelector('#winsoundmp3');
let tile = document.querySelector('#tilesoundmp3');
lost.volume = 0.2;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
btnStart.addEventListener('click', async function() {
    document.querySelector('.gameUitleg').style.display = "none";
    btnRetry.style.display = "flex";
    btnStart.style.display = "none";
    simonSays.style.visibility = "visible";
    await sleep(750);
    maakMove();
})
btnRetry.addEventListener('click', resetGame);

function resetGame(){
    volgordeSpel = [];
    score = 0;
    scoreSimonSays.innerHTML = score;
    volgordeSpeler = [];
    teller = 0;
    klikbaar = true;
    spelerTeller = 0;
    maakMove();
}

function maakMove() {
    let getal = Math.floor(Math.random() * alleButtons.length);
    volgordeSpel[teller] = alleButtons[getal].getAttribute('data-nummer');
    teller++;
    for (let i = 0; i < volgordeSpel.length; i++) {
        toonTegels(i);
    }
    klikbaar = true;
}

// Extra functie die om de seconde een nieuwe tegel zal tonen.
function toonTegels(i) {
    setTimeout(function () {
        tile.play();
        kiesKleur(volgordeSpel[i]);
        setTimeout(function () { origineleKleur(); }, 300);
    }, 1000 * i);
}

// Functie voor te controleren of het aan de speler is.
function isHetSpelersBeurt() {
    if (volgordeSpeler.length < volgordeSpel.length) {
        return true;
    }
    else {
        return false;
    }
}

// Teller voor het onthouden van de aantal moves van een speler.
let spelerTeller = 0;
alleButtons.forEach(button => button.addEventListener('click', function () {
    if (!klikbaar) {
        return;
    }

    if (isHetSpelersBeurt()) {
        kiesKleur(button.getAttribute('data-nummer'));
        tile.play();
        volgordeSpeler[spelerTeller] = button.getAttribute('data-nummer');
        spelerTeller++;
        setTimeout(function () { origineleKleur() }, 300);
    }

    if (!controleerOfGelijk()) {
        score = 0;
        scoreSimonSays.innerHTML = score;
        lost.play();
        return;
    }

    if (!isHetSpelersBeurt()) {
        if (controleerOfGelijk()) {
            score++;
            scoreSimonSays.innerHTML = score;
            if (score == 5) {
                win.play();
                simonSays.style.display = "none";
                return;
            }
        }
        klikbaar = false;
        spelerTeller = 0;
        volgordeSpeler = [];
        setTimeout(function () { maakMove() }, 1000);
    }
}));

// Functie voor het controleren of de speler input hetzelfde is als het spel.
function controleerOfGelijk() {
    let nietGelijk = 0;
    for (let i = 0; i < volgordeSpeler.length; i++) {
        if (volgordeSpel[i] != volgordeSpeler[i]) {
            nietGelijk++
        }
    }
    if (nietGelijk > 0) {
        return false;
    }
    else {
        return true;
    }
}

// Zorgt ervoor dat een licht zal geactiveerd worden op basis van een licht.
function kiesKleur(getal) {
    getal = getal - 1
    switch (getal) {
        case 0:
            alleButtons[getal].style.backgroundColor = "#6fff5c";
            break;
        case 1:
            alleButtons[getal].style.backgroundColor = "#f83e3e";
            break;
        case 2:
            alleButtons[getal].style.backgroundColor = "#5344f5";
            break;
        case 3:
            alleButtons[getal].style.backgroundColor = "#fdfa35";
            break;
    }
}

function origineleKleur() {
    alleButtons[0].style.backgroundColor = "#143110";
    alleButtons[1].style.backgroundColor = "#521b1b";
    alleButtons[2].style.backgroundColor = "#1a164b";
    alleButtons[3].style.backgroundColor = "#464515";
}