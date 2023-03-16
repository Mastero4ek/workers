import { Worker, Trainee, Junior, Middle, Senior } from "./classes"

const workers = () => {
	const allInputs = document.querySelectorAll('input'),
		selects = document.querySelectorAll('.form__select'),
		checkbox = document.querySelectorAll('.form__radio'),

		name = document.querySelector('input[id=name]'),
		surname = document.querySelector('input[id=surname]'),
		age = document.querySelector('input[id=age]'),

		gender = document.querySelectorAll('input[name=gender]'),
		male = document.querySelector('input[id=male]'),
		female = document.querySelector('input[id=female]'),

		postJob = document.querySelector('select[id=postjob]'),
		position = document.querySelector('select[id=position]'),

		employment = document.querySelectorAll('input[name=employment]'),
		fullTime = document.querySelector('input[id=ft]'),
		partTime = document.querySelector('input[id=pt]'),

		formError = document.querySelectorAll('.form__label-error'),

		form = document.querySelector('.form__elements'),
		table = document.querySelector('.table__elements'),

		workersCount = document.getElementById('workers-count'),
		salaryCount = document.getElementById('salary-count'),

		overlay = document.getElementById('overlay'),
		popup = document.getElementById('popup');

	let workers = JSON.parse(localStorage.getItem('worker-value')) || {};

	name.addEventListener('change', () => workers.name = name.value);
	surname.addEventListener('change', () => workers.surname = surname.value);
	age.addEventListener('change', () => workers.age = age.value);

	const getEmployment = () => {
		for (let i = 0; i < employment.length; i++) {
			employment[i].addEventListener('change', () => {
				if (employment[i].type == "radio" && employment[i].checked) {
					workers.employmentCheck = employment[i].value;
					localStorage.setItem('worker-value', JSON.stringify(workers));
				}
			});
		}
	}
	getEmployment();

	const getGender = () => {
		for (let i = 0; i < gender.length; i++) {
			gender[i].addEventListener('change', () => {
				if (gender[i].type == "radio" && gender[i].checked) {
					workers.genderCheck = gender[i].value;
					localStorage.setItem('worker-value', JSON.stringify(workers));
				}
			});
		}
	}
	getGender();

	const getPosition = () => {
		position.addEventListener('change', () => {
			let positionIndex = position.selectedIndex,
				positionOption = position.options;

			switch (true) {
				case position.value == 'fe':
					workers.positionCheck = cutStr(positionOption[positionIndex].textContent, ' ');
					workers.salaryWorker = 0;
					localStorage.setItem('worker-value', JSON.stringify(workers));
					break;

				case position.value == 'be':
					workers.positionCheck = cutStr(positionOption[positionIndex].textContent, ' ');
					workers.salaryWorker = 10000;
					localStorage.setItem('worker-value', JSON.stringify(workers));
					break;

				case position.value == 'fs':
					workers.positionCheck = cutStr(positionOption[positionIndex].textContent, ' ');
					workers.salaryWorker = 30000;
					localStorage.setItem('worker-value', JSON.stringify(workers));
					break;
			}
		});
	}
	getPosition();

	const getPostjob = () => {
		postJob.addEventListener('change', () => {
			let postJobIndex = postJob.selectedIndex,
				postJobOption = postJob.options;

			switch (true) {
				case postJob.value == 'tra':
					workers.postjobCheck = cutStr(postJobOption[postJobIndex].textContent, ' ');
					localStorage.setItem('worker-value', JSON.stringify(workers));
					break;

				case postJob.value == 'jun':
					workers.postjobCheck = cutStr(postJobOption[postJobIndex].textContent, ' ');
					localStorage.setItem('worker-value', JSON.stringify(workers));
					break;

				case postJob.value == 'mid':
					workers.postjobCheck = cutStr(postJobOption[postJobIndex].textContent, ' ');
					localStorage.setItem('worker-value', JSON.stringify(workers));
					break;

				case postJob.value == 'sen':
					workers.postjobCheck = cutStr(postJobOption[postJobIndex].textContent, ' ');
					localStorage.setItem('worker-value', JSON.stringify(workers));
					break;
			}
		});
	}
	getPostjob();

	const cutStr = (str, char) => {
		return str.replace(new RegExp(`${char}.*`), '');
	}

	const getSalary = (worker) => {
		worker.salary = worker.salary + workers.salaryWorker - (worker.salary * (+workers.employmentCheck / 100));
		return worker.salary;
	}

	const createWorker = () => {
		switch (true) {
			case postJob.value == 'tra':
				const trainee = new Trainee(workers.name, workers.surname, workers.age, workers.genderCheck, workers.postjobCheck, workers.positionCheck);

				workers.employmentCheck == '30' ? getSalary(trainee) : trainee.salary = trainee.salary + workers.salaryWorker;

				trainee.addWorker(trainee);
				break;

			case postJob.value == 'jun':
				const junior = new Junior(workers.name, workers.surname, workers.age, workers.genderCheck, workers.postjobCheck, workers.positionCheck);

				workers.employmentCheck == '30' ? getSalary(junior) : junior.salary = junior.salary + workers.salaryWorker;

				junior.addWorker(junior);
				break;

			case postJob.value == 'mid':
				const middle = new Middle(workers.name, workers.surname, workers.age, workers.genderCheck, workers.postjobCheck, workers.positionCheck);

				workers.employmentCheck == '30' ? getSalary(middle) : middle.salary = middle.salary + workers.salaryWorker;

				middle.addWorker(middle);
				break;

			case postJob.value == 'sen':
				const senior = new Senior(workers.name, workers.surname, workers.age, workers.genderCheck, workers.postjobCheck, workers.positionCheck);

				workers.employmentCheck == '30' ? getSalary(senior) : senior.salary = senior.salary + workers.salaryWorker;

				senior.addWorker(senior);
				break;
		}
	}

	const isString = (str) => {
		return typeof str == 'string' &&
			isNaN(str) &&
			!(str.startsWith(' ') || str.endsWith(' '));
	}

	const isNumber = (num) => {
		return !isNaN(parseFloat(num)) &&
			isFinite(num) &&
			!(num.startsWith(' ') || num.endsWith(' '));
	}

	const checkInputs = () => {
		allInputs.forEach((item) => {
			if(item.value == '') {
				item.classList.add('error');
			}
		});

		selects.forEach((item) => {
			if(item.value == '') {
				item.classList.add('error');
			}
		});

		if(!Array.from(employment).some((input) => input.checked)) {
			employment.forEach(item =>  item.nextElementSibling.classList.add('error'))
		}

		if(!Array.from(gender).some((input) => input.checked)) {
			gender.forEach(item =>  item.nextElementSibling.classList.add('error'))
		}

		if (!isString(name.value) || !isString(surname.value) || !isNumber(age.value) ||
			(!male.checked && !female.checked) || (!fullTime.checked && !partTime.checked) ||
			position.value == '' || postJob.value == '') {

			overlay.classList.add('show');
			popup.style.transform = 'scale(1)';
		} else {
			createWorker();
			renderWorker();
			getTotal();
			renderTotal();
			reset();

			// checkbox.forEach((item) => {
			// 	const elem = item.nextElementSibling;

			// 	elem.classList.remove('error');
			// 	item.checked = false;
			// });

			localStorage.setItem('workers', JSON.stringify(Worker.workerArr));
			localStorage.setItem('worker-value', JSON.stringify(workers));
		}
	}

	const renderTotal = () => {
		salaryCount.innerHTML = `${workers.totalSalary} руб.`;
		workersCount.innerHTML = `${workers.totalWorkers} чел.`;
	}

	const renderWorker = () => {
		table.innerHTML = '';

		Worker.workerArr.forEach((item, i) => {
			const tr = document.createElement('tr');

			tr.classList.add('table__items');

			tr.insertAdjacentHTML('beforeend', `
				<td class="table__item">${item.name}</td>

				<td class="table__item">${item.surname}</td>

				<td class="table__item">${item.age}</td>

				<td class="table__item">${item.gender}</td>

				<td class="table__item">${item.position}</td>

				<td class="table__item">${item.postJob}</td>

				<td class="table__item">${item._salary} руб.</td>

				<td class="table__item">
					<button type="button" class="table__button">Удалить</button>
				</td>
			`);

			table.append(tr);

			const removeBtn = tr.querySelector('.table__button');

			removeBtn.addEventListener('click', (event) => {
				let parentBtn = event.target.parentElement;

				Worker.removeWorker(i);

				getTotal();
				renderTotal();
				renderWorker();

				localStorage.setItem('workers', JSON.stringify(Worker.workerArr));
				localStorage.setItem('worker-value', JSON.stringify(workers));
			});
		});
	}

	const getTotal = () => {
		workers.totalSalary = +Worker.workerArr.reduce((sum, item) => {
			return sum + +item._salary;
		}, 0);

		workers.totalWorkers = Worker.workerArr.length;
	}

	const reset = () => {
		name.value = '';
		surname.value = '';
		age.value = '';
		postjob.value = '';
		position.value = '';

		male.checked = false;
		female.checked = false;
		fullTime.checked = false;
		partTime.checked = false;
	}

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		checkInputs();
	});

	renderWorker();
	renderTotal();
}

export default workers