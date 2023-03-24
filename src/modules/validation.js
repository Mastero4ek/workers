const validation = () => {
	const allInputs = document.querySelectorAll('input'),
		selects = document.querySelectorAll('.form__select'),
		checkbox = document.querySelectorAll('.form__radio');

	const isCyrillic = /[^а-яёА-ЯЁ\s\-]/g,
		isAge = /[^\d]/g,
		cutSpaceHyphen = /^[\s\-]+$/g,
		trimSpace = /\s{2,}/g,
		trimHyphen = /\-{2,}/g;

	const trimSimbol = (e) => {
		e.target.value = e.target.value.replace(trimSpace, " ");
		e.target.value = e.target.value.replace(cutSpaceHyphen, "");
		e.target.value = e.target.value.replace(trimHyphen, "-");
	};

	const capitalize = (e) => {
		e.target.value = e.target.value.replace(/(^|\s)\S/g, function (str) {
			return str.toUpperCase();
		});
	};

	const validationInput = (item, e) => {
		trimSimbol(e);

		if (item.name == 'age') {
			e.target.value = e.target.value.replace(isAge, "");

			if (+e.target.value < 18 || +e.target.value > 50) {
				e.target.value = '';
				item.classList.add('error');
			}
		} else
			if (item.name == 'name' | item.name == 'surname') {
				e.target.value = e.target.value.replace(isCyrillic, "");
				capitalize(event);

				if (e.target.value == '') {
					item.classList.add('error');
				}
			}
	};

	selects.forEach(item => item.addEventListener('change', () => item.classList.remove('error')));
	allInputs.forEach(item => item.addEventListener('focus', () => item.classList.remove('error')));

	checkbox.forEach((item) => {
		item.addEventListener('change', (e) => {
			if (item.checked) {
				const thisMark = e.target.nextElementSibling,
					parentElem = e.target.parentNode;

				thisMark.classList.remove('error');

				if (parentElem.previousElementSibling) {
					const prevElem = parentElem.previousElementSibling;
					prevElem.lastElementChild.classList.remove('error');
				} else {
					const nextElem = parentElem.nextElementSibling;
					nextElem.lastElementChild.classList.remove('error');
				}
			}
		});
	});

	selects.forEach(item => item.addEventListener('blur', () => {
		if (item.value == '') {
			item.classList.add('error');
		}
	}));

	allInputs.forEach(input => input.addEventListener('blur', event => validationInput(input, event)));
}

export default validation