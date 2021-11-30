window.addEventListener('DOMContentLoaded', () => {

	const service = document.querySelectorAll(".service-item");
	let mouseOver = false;

	for (let i = 0; i < service.length; i++) {

		service[i].onmouseover = (event) => {
			service.forEach(item => {item.classList.remove("hover")});
			service[i].classList.add("hover");
			mouseOver = true;
		};

		service[i].onmouseout = function(event) {
			service[i].classList.remove("hover");
			mouseOver = false;
		};

	}

	let acc = 0;

	function sort (acc) {
		setTimeout(() => {
			sort(acc);
		}, 5000);
		if (!mouseOver) {
			service.forEach(item => {item.classList.remove("hover")});
			service[acc].classList.add("hover");
		}
		acc == 3 ? acc = 0 : acc += 1;
	}

	sort(acc);

});