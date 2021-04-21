var vid = document.querySelector("audio");
vid.volume = 0.1;
const gameUitleg = document.querySelector('.gameUitleg');
const btnStart = document.querySelector('#btnSubmit');
const mail = document.querySelector('#inpMail');

//maak een algemene apiAdress (kopiëer)
var apiAdress = "https://adembacaj.be/escape/api/";

//kopiëer deze opties-variable
var opties = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function () {
            gameUitleg.style.visibility = "visible";
    }, 6000);
});


btnStart.addEventListener('click', function(e) {
    e.preventDefault();
    if(mail.value != ""){
        if(ValidateEmail(mail.value)){
            SpelStart(mail.value, 4);
        }
    }
    else{
        alert("voeg een e-mailadres in.");
    }

});


//deze api-call zal naar [https://adembacaj.be/escape/api/spel-start.php] een request verzenden
function SpelStart(mail, roomid){

    opties.body = JSON.stringify({
        //door te sturen parameters (in dit geval email & roomId)
      
        email: mail, //emailadres van de speler
        roomId: roomid //jullie (escape)roomId zie: [https://adembacaj.be/escape/api/docs-page.html#section-3]
      
      });

    // geef na het apiAdress de gewenste endpoint in string
    fetch(apiAdress + "spel-start.php", opties)
    .then(function (response) {
        return response.json();
    })
    .then(function(responseData) {

        var ontvangenData = responseData;

        console.table(ontvangenData);

        //verwerk data
        //...
    })
    .catch(function (error) {
        console.log("error : " + error);
      });

    return true;
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    alert("dit is geen geldig mailadres.")
    return (false)
}
