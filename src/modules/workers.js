const workers = () => {
	const name = document.querySelector('input[id=name]'),
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
		popup = document.getElementById('popup'),
		close = document.getElementById('close');
		
	let	genderCheck = JSON.parse(localStorage.getItem('gender')) || '',
		employmentCheck = JSON.parse(localStorage.getItem('employment')) || '',

		positionCheck = JSON.parse(localStorage.getItem('position')) || '',
		postjobCheck = JSON.parse(localStorage.getItem('postjob')) || '',

		salaryWorker = JSON.parse(localStorage.getItem('salary')) || 0,

		totalWorkers = JSON.parse(localStorage.getItem('total-workers')) || 0,
		totalSalary = JSON.parse(localStorage.getItem('total-salary')) || 0;

	const getEmployment = () => {
		for (let i = 0; i < employment.length; i++) {
			employment[i].addEventListener('change', () => {
				if (employment[i].type == "radio" && employment[i].checked) {
		            employmentCheck = employment[i].value;

		            localStorage.setItem('employment', JSON.stringify(employmentCheck));
		        }
			});
	    }
	}
	getEmployment();

	const getGender = () => {
		for (let i = 0; i < gender.length; i++) {
			gender[i].addEventListener('change', () => {
				if (gender[i].type == "radio" && gender[i].checked) {
		            genderCheck = gender[i].value;

		            localStorage.setItem('gender', JSON.stringify(genderCheck));
		        }
			});
	    }
	}
	getGender();

	const getPosition = () => {
		position.addEventListener('change', () => {
			let positionIndex = position.selectedIndex,
				positionOption = position.options;

			switch(true) {
				case position.value == 'fe':
				positionCheck = `${positionOption[positionIndex].textContent}`;
				positionCheck = cutStr(positionCheck, ' ');
				salaryWorker += 0;

				localStorage.setItem('salary', JSON.stringify(salaryWorker));
				localStorage.setItem('position', JSON.stringify(positionCheck));
				break;

				case position.value == 'be':
				positionCheck = `${positionOption[positionIndex].textContent}`;
				positionCheck = cutStr(positionCheck, ' ');
				salaryWorker += 10000;

				localStorage.setItem('salary', JSON.stringify(salaryWorker));
				localStorage.setItem('position', JSON.stringify(positionCheck));
				break;

				case position.value == 'fs':
				positionCheck = `${positionOption[positionIndex].textContent}`;
				positionCheck = cutStr(positionCheck, ' ');
				salaryWorker += 30000;

				localStorage.setItem('salary', JSON.stringify(salaryWorker));
				localStorage.setItem('position', JSON.stringify(positionCheck));
				break;
			}
		});
	}
	getPosition();

	const getPostjob = () => {
		postJob.addEventListener('change', () => {
			let postJobIndex = postJob.selectedIndex,
				postJobOption = postJob.options;

			switch(true) {
				case postJob.value == 'tra':
				postjobCheck = `${postJobOption[postJobIndex].textContent}`;
				postjobCheck = cutStr(postjobCheck, ' ');

				localStorage.setItem('postjob', JSON.stringify(postjobCheck));

				break;

				case postJob.value == 'jun':
				postjobCheck = `${postJobOption[postJobIndex].textContent}`;
				postjobCheck = cutStr(postjobCheck, ' ');

				localStorage.setItem('postjob', JSON.stringify(postjobCheck));

				break;

				case postJob.value == 'mid':
				postjobCheck = `${postJobOption[postJobIndex].textContent}`;
				postjobCheck = cutStr(postjobCheck, ' ');

				localStorage.setItem('postjob', JSON.stringify(postjobCheck));

				break;

				case postJob.value == 'sen':
				postjobCheck = `${postJobOption[postJobIndex].textContent}`;
				postjobCheck = cutStr(postjobCheck, ' ');

				localStorage.setItem('postjob', JSON.stringify(postjobCheck));

				break;
			}
		});
	}
	getPostjob();

	const cutStr = (str, char) => {

	    return str.replace(new RegExp(`${char}.*`), '');
	}

	const getSalary = (worker) => {
		worker.salary = worker.salary + salaryWorker - (worker.salary * (+employmentCheck / 100));

		return worker.salary;
	}

	const createWorker = () => {
		switch(true) {
			case postJob.value == 'tra':
				const trainee = new Trainee(name.value, surname.value, age.value, genderCheck, postjobCheck, positionCheck);

				employmentCheck == '30' ? getSalary(trainee) : trainee.salary = trainee.salary + salaryWorker;
				
				trainee.addWorker(trainee);
			break;

			case postJob.value == 'jun':
				const junior = new Junior(name.value, surname.value, age.value,  genderCheck, postjobCheck, positionCheck);

				employmentCheck == '30' ? getSalary(junior) : junior.salary = junior.salary + salaryWorker;

				junior.addWorker(junior);
			break;

			case postJob.value == 'mid':
				const middle = new Middle(name.value, surname.value, age.value,  genderCheck, postjobCheck, positionCheck);

				employmentCheck == '30' ? getSalary(middle) : middle.salary = middle.salary + salaryWorker;

				middle.addWorker(middle);
			break;

			case postJob.value == 'sen':
				const senior = new Senior(name.value, surname.value, age.value,  genderCheck, postjobCheck, positionCheck);

				employmentCheck == '30' ? getSalary(senior) : senior.salary = senior.salary + salaryWorker;

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
		if(!isString(name.value) || !isString(surname.value) || !isNumber(age.value) ||
			(!male.checked && !female.checked) || (!fullTime.checked && !partTime.checked)) {

			overlay.classList.add('show');
			popup.style.transform = 'scale(1)';
		} else {
			createWorker();
			renderWorker();

			getTotal();
			renderTotal();

			reset();

			localStorage.setItem('total-workers', JSON.stringify(totalWorkers));
			localStorage.setItem('total-salary', JSON.stringify(totalSalary));
			localStorage.setItem('workers', JSON.stringify(Worker.workerArr));
		}
	}

	const renderTotal = () => {
		salaryCount.innerHTML = `${totalSalary} руб.`;
		workersCount.innerHTML = `${totalWorkers} чел.`;
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

				localStorage.setItem('total-workers', JSON.stringify(totalWorkers));
				localStorage.setItem('total-salary', JSON.stringify(totalSalary));
				localStorage.setItem('workers', JSON.stringify(Worker.workerArr));
			});
		});
	}

	const getTotal = () => {
		totalSalary = +Worker.workerArr.reduce((sum, item) => {

			return sum + +item._salary;

		}, 0);

		totalWorkers = Worker.workerArr.length;
	}

	const reset = () => {
		name.value = '';
		surname.value = '';
		age.value = '';

		genderCheck = '';
		employmentCheck = '';
		positionCheck = '';
		postjobCheck = '';
		salaryWorker = 0;

		postjob.value = '';
		position.value = '';

		male.checked = false;
		female.checked = false;
		fullTime.checked = false;
		partTime.checked = false;
	}

	close.addEventListener('click', () => {
		overlay.classList.remove('show');
		popup.style.transform = '';
	});

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		checkInputs();
	});

	renderWorker();
	renderTotal();
}

export default workers