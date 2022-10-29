'use strict';
document.addEventListener('DOMContentLoaded', function () {
	let text1 = 'Dies ist ein neuer Absatz!';
	let text2 = 'Dies ist ein neuer Button!';
	document.getElementById('text')
		.addEventListener('click', function () {
			
		});
	document.getElementById('button2')
		.addEventListener('click', function () {
			createElement('#textblock', 'button', text2);
		});

	function createElement(parent, elem, content) {
		let container = document.querySelector(parent);
		let newElm = document.createElement(elem);
		newElm.innerText = content;
		container.appendChild(newElm);
	}
});