const series = document.querySelectorAll('.serie');
const btnShow = document.querySelector('#btnShow');
const btnTry = document.querySelector('#btnTry');
const btnRetry = document.querySelector('#btnRetry');
const inpCode = document.querySelector('#inpCode');
const btnSend = document.querySelector('#btnSend');
const codes = document.querySelectorAll('.code');
let controle = true;
document.querySelectorAll('.btn').forEach(btn => {
	btn.disabled = true;
});
btnTry.disabled = true;


for (let i = 0; i < series.length; i++) {
	series[i].querySelector('.btn' + (Math.floor(Math.random() * 5) + 1)).classList.add('juist');
}

btnShow.addEventListener('click', function(){	
	document.querySelectorAll('.juist').forEach(btn => {
		btn.checked = true;

	});
	setTimeout(function(){
		document.querySelectorAll('.juist').forEach(btn => {
			btn.checked = false;
			btnShow.disabled = true;
		});
		document.querySelectorAll('.btn').forEach(btn => {
			btn.disabled = false;
		});
		btnTry.disabled = false;
	}, 5000);
});

btnRetry.addEventListener('click', function(){
	document.location.reload();
});

btnTry.addEventListener('click', function(){
	for (let i = 0; i < series.length; i++) {
		for (let j = 0; j < 5; j++) {
			if (series[i].querySelector('.btn' + (j+1)).classList.contains('juist')) {
				if (!(series[i].querySelector('.btn' + (j+1)).checked)) {
					controle = false
				} 
			}
		}
	}
	if (controle == true) {
		btnSend.classList.remove('hidden');
		inpCode.classList.remove('hidden');
		codes.forEach(code => {
			code.classList.remove('hidden');
		});
	}
});



codes.forEach(code => {
	code.style.top = (Math.random() * 100) + '%';
	code.style.left = (Math.random() * 100) + '%';
});
