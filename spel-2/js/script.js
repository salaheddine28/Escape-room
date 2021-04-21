const btn = document.querySelector('#btn');
const code = document.querySelector('.code');
const submit = document.querySelector('.submit');
const input = document.querySelector('#inp');
const inpCode = document.querySelector('#inpCode');





const bol = document.querySelector('#bol');
const circle = document.querySelector('.circle');



function validateForm() {
    var x = document.forms["myForm"]["text"].value;
    if (x == "#fe0000" || x == "#FE0000") {
        alert("Juiste code");
        window.location = "/spel-3/index.html";
        return false;
    }
}