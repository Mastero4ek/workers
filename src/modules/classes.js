class Person {
	constructor(name, surname, age, gender) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.gender = gender;
	}
}

export class Worker extends Person {
	constructor(name, surname, age, gender, postJob, position) {
		super(name, surname, age, gender);

		this.postJob = postJob;
		this.position = position;
	}

	static workerArr = JSON.parse(localStorage.getItem('workers')) || [];

	static removeWorker(i) {
		Worker.workerArr.splice(Worker.workerArr.indexOf(i), 1);
	}

	addWorker(worker) {
		Worker.workerArr.push(worker);
	}
}

export class Trainee extends Worker {
	constructor(name, surname, age, gender, postJob, position, salary) {
		super(name, surname, age, gender, postJob, position);

		this._salary = 15000;
	}

	set salary(num) {
		this._salary = num;
	}

	get salary() {
		return this._salary;
	}
}

export class Junior extends Worker {
	constructor(name, surname, age, gender, postJob, position, salary) {
		super(name, surname, age, gender, postJob, position);

		this._salary = 30000;
	}

	set salary(num) {
		this._salary = num;
	}

	get salary() {
		return this._salary;
	}
}

export class Middle extends Worker {
	constructor(name, surname, age, gender, postJob, position, salary) {
		super(name, surname, age, gender, postJob, position);

		this._salary = 80000;
	}

	set salary(num) {
		this._salary = num;
	}

	get salary() {
		return this._salary;
	}
}

export class Senior extends Worker {
	constructor(name, surname, age, gender, postJob, position, salary) {
		super(name, surname, age, gender, postJob, position);

		this._salary = 150000;
	}

	set salary(num) {
		this._salary = num;
	}

	get salary() {
		return this._salary;
	}
}