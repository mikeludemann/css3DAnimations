var element = document.querySelector('.container__sub');

element.addEventListener('mouseover', function () {

	element.classList.add('flip');

});

element.addEventListener('mouseout', function () {

	element.classList.remove('flip');

});

/* ################################## */

var element = document.querySelector('.container__sub');

element.addEventListener('click', function () {

	element.classList.toggle('flip');

});
