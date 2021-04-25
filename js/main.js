const burgerEl = document.querySelector('.menu-burger'),
	  navEl = document.querySelector('.nav');

burgerEl.addEventListener('click', e => {
	burgerEl.classList.toggle('active');
	navEl.classList.toggle('active')
});

const makeModal = modalSel => {
	const modalEl = document.querySelector(modalSel);
		  btnEl = document.querySelector(modalSel + '-btn'),
		  closeEl = document.querySelector(modalSel + ' .modal-wrapper__bg'),

	btnEl.addEventListener('click', () => modalEl.classList.add('active'));
	closeEl.addEventListener('click', () => modalEl.classList.remove('active'));
}

makeModal('#modal-1');
makeModal('#modal-2');

const nextScreen = document.querySelector('.next-screen-link')
const header = document.querySelector('.header');

nextScreen.addEventListener('click', e => window.scrollTo(0, header.clientHeight));

const buttonTop = document.querySelector('.buttonTop');
buttonTop.addEventListener('click', e => window.scrollTo(0, 0))