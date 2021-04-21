const inputAnswerFromUser = document.querySelector('#inpCode');
const btnSubmit = document.querySelector('#inpSubmit');
const errorMessage = document.querySelector('.errMsg');
const imgAscii = document.querySelector('.FotoAscii');
const btnStart = document.querySelector('#btnStart');
const geheimBericht = document.querySelector('.geheimeCode')
const frmBericht = document.querySelector('.frmCode');
const timerMessage = document.querySelector('#timer');
const antwoordCode = ["Gigabom", "Buitenaards", "Americium", "XenosBomb", "Bombroom", "Predator", "Nuclear"];

let huidigeCode = 0;
let timer;
function randomAsciiCode() {
    let gekozenNummer = "0";
    let asciiCode = "";
    do {
        gekozenNummer = Math.floor(Math.random() * antwoordCode.length);
    }
    while (gekozenNummer == huidigeCode)
    huidigeCode = gekozenNummer;
    console.log("gekozne nummer : " + gekozenNummer);
    console.log(antwoordCode[gekozenNummer]);
    for (let i = 0; i < antwoordCode[gekozenNummer].length; i++) {
        let asciiWaardeKarakter = antwoordCode[gekozenNummer].toLowerCase().charCodeAt(i);
        asciiCode += String.fromCharCode(asciiWaardeKarakter + 4)
    }
    console.log(asciiCode);
    return asciiCode
}

btnStart.addEventListener('click', function (e) {
    // Instellen van de timer
    let aftellingNaar = new Date();
    aftellingNaar.setSeconds(aftellingNaar.getSeconds() + 302);
    // Alles terug displayen
    frmBericht.style.display = "block";
    geheimBericht.style.display = "block";
    btnStart.style.display = "none";
    geheimBericht.innerHTML = randomAsciiCode();

    // Het starten van de timer
    timer = setInterval(function () {
        let tijdNu = new Date().getTime();
        let verschilTijd = aftellingNaar - tijdNu;

        // Time calculations for days, hours, minutes and seconds
        let secondenOver = Math.floor((verschilTijd % (1000 * 60)) / 1000);
        let minutes = Math.floor((verschilTijd % (1000 * 60 * 60)) / (1000 * 60));

        // Display the result in the element with id="demo"
        timerMessage.innerHTML = minutes + ":" + secondenOver;

        // If the count down is finished, write some text
        if (verschilTijd < 0) {
            clearInterval(timer);
            frmBericht.style.display = "none";
            geheimBericht.style.display = "none";
            timerMessage.innerHTML = "";
            btnStart.style.display = "block";
            errorMessage.innerHTML = "Je tijd is op! Probeer het opnieuw... Of niet";
        }
    }, 1000);
})

btnSubmit.addEventListener('click', function () {
    if (inputAnswerFromUser.value.toLowerCase() != antwoordCode[huidigeCode].toLowerCase()) {
        errorMessage.innerHTML = 'U heeft een foute antwoord gegeven.';
    } else {
        clearInterval(timer);
        errorMessage.innerHTML = "U heeft het raadsel opgelost... De deur rechts van je opent";
        btnStart.style.display = "none";
        imgAscii.style.display = "none";
        timerMessage.innerHTML = "";
        //Naar de volgende room
    }
    errorMessage.value = '';
});
