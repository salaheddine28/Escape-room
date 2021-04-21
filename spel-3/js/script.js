const btn = document.querySelector('#btn');
const code = document.querySelector('.code');
const submit = document.querySelector('.submit');
const input = document.querySelector('#inp');
const inpCode = document.querySelector('#inpCode');


const bol = document.querySelector('#bol');
const circle = document.querySelector('.circle');


function validateForm() {
    var x = document.forms["myForm"]["text"].value;
    if (x == "192.168.37.63") {
        alert("Juiste code");
        window.location = "/spel-4/index.html";
        return false;
    }
}