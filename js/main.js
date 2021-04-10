const burgerEl = document.querySelector('.menu-burger'),
	  navEl = document.querySelector('.nav');;

burgerEl.addEventListener('click', e => {
	burgerEl.classList.toggle('active');
	navEl.classList.toggle('active')
});