window.addEventListener('DOMContentLoaded', () => {

	const burgerBtn = document.querySelector('.header-btn_burger'),
				burgerWindow = document.querySelector('.header-list__wrapper'),
				burgerLinks = document.querySelectorAll('.header-list__item a');

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('active');
		burgerWindow.classList.toggle('active');
		document.body.classList.toggle('overflow-hidden');
	});

	burgerWindow.addEventListener('click', (e) => {
		if (e.target === burgerWindow) {
			burgerBtn.classList.remove('active');
			burgerWindow.classList.remove('active');
			document.body.classList.remove('overflow-hidden');
		}
	});

	burgerLinks.forEach(item => {
		item.addEventListener('click', () => {
			burgerBtn.classList.remove('active');
			burgerWindow.classList.remove('active');
			document.body.classList.remove('overflow-hidden');
		});
	});

});