const modals = () => {

	function bindModal(triggerSelector, modalSelector, closeSelector) {

		const trigger = document.querySelectorAll(triggerSelector),
					modal = document.querySelectorAll(modalSelector),
					close = document.querySelectorAll(closeSelector),
					html = document.querySelector('html');

		for (let i = 0; i < trigger.length; i++) {

			trigger[i].addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault;
				}
				
				modal[i].classList.add("active");
				document.body.classList.add("overflow-hidden");

			});

			close[i].addEventListener('click', () => {		
				modal[i].classList.remove("active");
				document.body.classList.remove("overflow-hidden");
			});

			modal[i].addEventListener('click', (e) => {
				if (e.target === modal[i]) {
					modal[i].classList.remove("active");
					document.body.classList.remove("overflow-hidden");
				}
			});

		}

	}


	function bindContactModal(triggerSelector, modalSelector, closeSelector, AnotherModal) {

		const trigger = document.querySelectorAll(triggerSelector),
					modal = document.querySelector(modalSelector),
					AnotherModals = document.querySelectorAll(AnotherModal),
					close = document.querySelector(closeSelector),
					html = document.querySelector('html');

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault;
				}
				
				AnotherModals.forEach(item => {
					item.classList.remove("active");
				});
				modal.classList.add("active");
				document.body.classList.add("overflow-hidden");
				html.classList.add("overflow-hidden");

			});
		});

		close.addEventListener('click', () => {		
			modal.classList.remove("active");
			document.body.classList.remove("overflow-hidden");
			html.classList.remove("overflow-hidden");
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.classList.remove("active");
				document.body.classList.remove("overflow-hidden");
				html.classList.remove("overflow-hidden");
			}
		});

	}

	bindModal('.service-item', '.modal', '.modal-cross');
	bindContactModal('.btn-contact', '.modal-contact', '.modal-cross-contact', '.modal-service');

};

export default modals;