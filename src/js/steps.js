window.addEventListener('DOMContentLoaded', () => {

	const animations = document.querySelectorAll('.animation');

	document.addEventListener('scroll', () => {
		animations.forEach(item => {
			if ((item.getBoundingClientRect().top * 100 / window.innerHeight) <= 69) {
				item.classList.add("animate");
			}
		})
	});

});