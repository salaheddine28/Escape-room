const btn = document.querySelector('#btn');
const code = document.querySelector('.code');
const submit = document.querySelector('.submit');
const input = document.querySelector('#inp');
const inpCode = document.querySelector('#inpCode');


btn.addEventListener('click', function() {
    code.classList.remove('hidden');
    submit.classList.remove('hidden');
});



const bol = document.querySelector('#bol');
const circle = document.querySelector('.circle');



function validateForm() {
    var x = document.forms["myForm"]["text"].value;
    if (x == 1234) {
        window.location="https://www.google.be/?hl=nl";
        return false;
    }
}



bol.addEventListener('click', function(e) {
    bol.disabled = true;
    let mdp = 1234;
    let a = document.createElement('a');
    let link = document.createTextNode(mdp.toString());
    a.style.opacity = '0.3';
    a.style.color = '#201446';
    a.appendChild(link);
    circle.appendChild(a);
    console.log(e);
    //}

})