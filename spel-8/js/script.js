const inputCode = document.querySelector('#inpCode');
const btnSubmit = document.querySelector('#inpSubmit');
const MOGELIJKE_ANTWOORDEN = ["U", "De letter U", "letter u"];
const lblEror = document.querySelector('.errMsg');

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkAlsRaadselJuistIs() > 0) {
        // Verwijs hier naar volgende pagina
        lblEror.innerHTML = "";
    }
    else {
        lblEror.innerHTML = "Fout antwoord, probeer opnieuw";
    }
    inputCode.value = "";
})

function checkAlsRaadselJuistIs() {
    let aantalJuist = 0;
    MOGELIJKE_ANTWOORDEN.forEach(Antwoord => {
        if (inputCode.value.toLowerCase() == Antwoord.toLowerCase()) {
            aantalJuist++;
        }
    })
    return aantalJuist;
}