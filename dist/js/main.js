(()=>{"use strict";var __webpack_modules__={528:()=>{eval("\n;// CONCATENATED MODULE: ./modules/classes.js\nclass Person {\n\tconstructor(name, surname, age, gender) {\n\t\tthis.name = name;\n\t\tthis.surname = surname;\n\t\tthis.age = age;\n\t\tthis.gender = gender;\n\t}\n}\n\nclass Worker extends Person {\n\tconstructor(name, surname, age, gender, postJob, position) {\n\t\tsuper(name, surname, age, gender);\n\n\t\tthis.postJob = postJob;\n\t\tthis.position = position;\n\t}\n\n\tstatic workerArr = JSON.parse(localStorage.getItem('workers')) || [];\n\n\tstatic removeWorker(i) {\n\t\tWorker.workerArr.splice(Worker.workerArr.indexOf(i), 1);\n\t}\n\n\taddWorker(worker) {\n\t\tWorker.workerArr.push(worker);\n\t}\n}\n\nclass Trainee extends Worker {\n\tconstructor(name, surname, age, gender, postJob, position, salary) {\n\t\tsuper(name, surname, age, gender, postJob, position);\n\n\t\tthis._salary = 15000;\n\t}\n\n\tset salary(num) {\n\t\tthis._salary = num;\n\t}\n\n\tget salary() {\n\t\treturn this._salary;\n\t}\n}\n\nclass Junior extends Worker {\n\tconstructor(name, surname, age, gender, postJob, position, salary) {\n\t\tsuper(name, surname, age, gender, postJob, position);\n\n\t\tthis._salary = 30000;\n\t}\n\n\tset salary(num) {\n\t\tthis._salary = num;\n\t}\n\n\tget salary() {\n\t\treturn this._salary;\n\t}\n}\n\nclass Middle extends Worker {\n\tconstructor(name, surname, age, gender, postJob, position, salary) {\n\t\tsuper(name, surname, age, gender, postJob, position);\n\n\t\tthis._salary = 80000;\n\t}\n\n\tset salary(num) {\n\t\tthis._salary = num;\n\t}\n\n\tget salary() {\n\t\treturn this._salary;\n\t}\n}\n\nclass Senior extends Worker {\n\tconstructor(name, surname, age, gender, postJob, position, salary) {\n\t\tsuper(name, surname, age, gender, postJob, position);\n\n\t\tthis._salary = 150000;\n\t}\n\n\tset salary(num) {\n\t\tthis._salary = num;\n\t}\n\n\tget salary() {\n\t\treturn this._salary;\n\t}\n}\n;// CONCATENATED MODULE: ./modules/workers.js\n\n\nconst workers = () => {\n\tconst name = document.querySelector('input[id=name]'),\n\t\tsurname = document.querySelector('input[id=surname]'),\n\t\tage = document.querySelector('input[id=age]'),\n\n\t\tgender = document.querySelectorAll('input[name=gender]'),\n\t\tmale = document.querySelector('input[id=male]'),\n\t\tfemale = document.querySelector('input[id=female]'),\n\n\t\tpostJob = document.querySelector('select[id=postjob]'),\n\t\tposition = document.querySelector('select[id=position]'),\n\n\t\temployment = document.querySelectorAll('input[name=employment]'),\n\t\tfullTime = document.querySelector('input[id=ft]'),\n\t\tpartTime = document.querySelector('input[id=pt]'),\n\n\t\tformError = document.querySelectorAll('.form__label-error'),\n\n\t\tform = document.querySelector('.form__elements'),\n\t\ttable = document.querySelector('.table__elements'),\n\n\t\tworkersCount = document.getElementById('workers-count'),\n\t\tsalaryCount = document.getElementById('salary-count'),\n\n\t\toverlay = document.getElementById('overlay'),\n\t\tpopup = document.getElementById('popup'),\n\t\tclose = document.getElementById('close');\n\n\tlet genderCheck = JSON.parse(localStorage.getItem('gender')) || '',\n\t\temploymentCheck = JSON.parse(localStorage.getItem('employment')) || '',\n\n\t\tpositionCheck = JSON.parse(localStorage.getItem('position')) || '',\n\t\tpostjobCheck = JSON.parse(localStorage.getItem('postjob')) || '',\n\n\t\tsalaryWorker = JSON.parse(localStorage.getItem('salary')) || 0,\n\n\t\ttotalWorkers = JSON.parse(localStorage.getItem('total-workers')) || 0,\n\t\ttotalSalary = JSON.parse(localStorage.getItem('total-salary')) || 0;\n\n\tconst getEmployment = () => {\n\t\tfor (let i = 0; i < employment.length; i++) {\n\t\t\temployment[i].addEventListener('change', () => {\n\t\t\t\tif (employment[i].type == \"radio\" && employment[i].checked) {\n\t\t\t\t\temploymentCheck = employment[i].value;\n\n\t\t\t\t\tlocalStorage.setItem('employment', JSON.stringify(employmentCheck));\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\tgetEmployment();\n\n\tconst getGender = () => {\n\t\tfor (let i = 0; i < gender.length; i++) {\n\t\t\tgender[i].addEventListener('change', () => {\n\t\t\t\tif (gender[i].type == \"radio\" && gender[i].checked) {\n\t\t\t\t\tgenderCheck = gender[i].value;\n\n\t\t\t\t\tlocalStorage.setItem('gender', JSON.stringify(genderCheck));\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\tgetGender();\n\n\tconst getPosition = () => {\n\t\tposition.addEventListener('change', () => {\n\t\t\tlet positionIndex = position.selectedIndex,\n\t\t\t\tpositionOption = position.options;\n\n\t\t\tswitch (true) {\n\t\t\t\tcase position.value == 'fe':\n\t\t\t\t\tpositionCheck = `${positionOption[positionIndex].textContent}`;\n\t\t\t\t\tpositionCheck = cutStr(positionCheck, ' ');\n\t\t\t\t\tsalaryWorker += 0;\n\n\t\t\t\t\tlocalStorage.setItem('salary', JSON.stringify(salaryWorker));\n\t\t\t\t\tlocalStorage.setItem('position', JSON.stringify(positionCheck));\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase position.value == 'be':\n\t\t\t\t\tpositionCheck = `${positionOption[positionIndex].textContent}`;\n\t\t\t\t\tpositionCheck = cutStr(positionCheck, ' ');\n\t\t\t\t\tsalaryWorker += 10000;\n\n\t\t\t\t\tlocalStorage.setItem('salary', JSON.stringify(salaryWorker));\n\t\t\t\t\tlocalStorage.setItem('position', JSON.stringify(positionCheck));\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase position.value == 'fs':\n\t\t\t\t\tpositionCheck = `${positionOption[positionIndex].textContent}`;\n\t\t\t\t\tpositionCheck = cutStr(positionCheck, ' ');\n\t\t\t\t\tsalaryWorker += 30000;\n\n\t\t\t\t\tlocalStorage.setItem('salary', JSON.stringify(salaryWorker));\n\t\t\t\t\tlocalStorage.setItem('position', JSON.stringify(positionCheck));\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t});\n\t}\n\tgetPosition();\n\n\tconst getPostjob = () => {\n\t\tpostJob.addEventListener('change', () => {\n\t\t\tlet postJobIndex = postJob.selectedIndex,\n\t\t\t\tpostJobOption = postJob.options;\n\n\t\t\tswitch (true) {\n\t\t\t\tcase postJob.value == 'tra':\n\t\t\t\t\tpostjobCheck = `${postJobOption[postJobIndex].textContent}`;\n\t\t\t\t\tpostjobCheck = cutStr(postjobCheck, ' ');\n\n\t\t\t\t\tlocalStorage.setItem('postjob', JSON.stringify(postjobCheck));\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase postJob.value == 'jun':\n\t\t\t\t\tpostjobCheck = `${postJobOption[postJobIndex].textContent}`;\n\t\t\t\t\tpostjobCheck = cutStr(postjobCheck, ' ');\n\n\t\t\t\t\tlocalStorage.setItem('postjob', JSON.stringify(postjobCheck));\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase postJob.value == 'mid':\n\t\t\t\t\tpostjobCheck = `${postJobOption[postJobIndex].textContent}`;\n\t\t\t\t\tpostjobCheck = cutStr(postjobCheck, ' ');\n\n\t\t\t\t\tlocalStorage.setItem('postjob', JSON.stringify(postjobCheck));\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase postJob.value == 'sen':\n\t\t\t\t\tpostjobCheck = `${postJobOption[postJobIndex].textContent}`;\n\t\t\t\t\tpostjobCheck = cutStr(postjobCheck, ' ');\n\n\t\t\t\t\tlocalStorage.setItem('postjob', JSON.stringify(postjobCheck));\n\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t});\n\t}\n\tgetPostjob();\n\n\tconst cutStr = (str, char) => {\n\n\t\treturn str.replace(new RegExp(`${char}.*`), '');\n\t}\n\n\tconst getSalary = (worker) => {\n\t\tworker.salary = worker.salary + salaryWorker - (worker.salary * (+employmentCheck / 100));\n\n\t\treturn worker.salary;\n\t}\n\n\tconst createWorker = () => {\n\t\tswitch (true) {\n\t\t\tcase postJob.value == 'tra':\n\t\t\t\tconst trainee = new Trainee(name.value, surname.value, age.value, genderCheck, postjobCheck, positionCheck);\n\n\t\t\t\temploymentCheck == '30' ? getSalary(trainee) : trainee.salary = trainee.salary + salaryWorker;\n\n\t\t\t\ttrainee.addWorker(trainee);\n\t\t\t\tbreak;\n\n\t\t\tcase postJob.value == 'jun':\n\t\t\t\tconst junior = new Junior(name.value, surname.value, age.value, genderCheck, postjobCheck, positionCheck);\n\n\t\t\t\temploymentCheck == '30' ? getSalary(junior) : junior.salary = junior.salary + salaryWorker;\n\n\t\t\t\tjunior.addWorker(junior);\n\t\t\t\tbreak;\n\n\t\t\tcase postJob.value == 'mid':\n\t\t\t\tconst middle = new Middle(name.value, surname.value, age.value, genderCheck, postjobCheck, positionCheck);\n\n\t\t\t\temploymentCheck == '30' ? getSalary(middle) : middle.salary = middle.salary + salaryWorker;\n\n\t\t\t\tmiddle.addWorker(middle);\n\t\t\t\tbreak;\n\n\t\t\tcase postJob.value == 'sen':\n\t\t\t\tconst senior = new Senior(name.value, surname.value, age.value, genderCheck, postjobCheck, positionCheck);\n\n\t\t\t\temploymentCheck == '30' ? getSalary(senior) : senior.salary = senior.salary + salaryWorker;\n\n\t\t\t\tsenior.addWorker(senior);\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tconst isString = (str) => {\n\t\treturn typeof str == 'string' &&\n\t\t\tisNaN(str) &&\n\t\t\t!(str.startsWith(' ') || str.endsWith(' '));\n\t}\n\n\tconst isNumber = (num) => {\n\t\treturn !isNaN(parseFloat(num)) &&\n\t\t\tisFinite(num) &&\n\t\t\t!(num.startsWith(' ') || num.endsWith(' '));\n\t}\n\n\tconst checkInputs = () => {\n\t\tif (!isString(name.value) || !isString(surname.value) || !isNumber(age.value) ||\n\t\t\t(!male.checked && !female.checked) || (!fullTime.checked && !partTime.checked)) {\n\n\t\t\toverlay.classList.add('show');\n\t\t\tpopup.style.transform = 'scale(1)';\n\t\t} else {\n\t\t\tcreateWorker();\n\t\t\trenderWorker();\n\n\t\t\tgetTotal();\n\t\t\trenderTotal();\n\n\t\t\treset();\n\n\t\t\tlocalStorage.setItem('total-workers', JSON.stringify(totalWorkers));\n\t\t\tlocalStorage.setItem('total-salary', JSON.stringify(totalSalary));\n\t\t\tlocalStorage.setItem('workers', JSON.stringify(Worker.workerArr));\n\t\t}\n\t}\n\n\tconst renderTotal = () => {\n\t\tsalaryCount.innerHTML = `${totalSalary} руб.`;\n\t\tworkersCount.innerHTML = `${totalWorkers} чел.`;\n\t}\n\n\tconst renderWorker = () => {\n\t\ttable.innerHTML = '';\n\n\t\tWorker.workerArr.forEach((item, i) => {\n\t\t\tconst tr = document.createElement('tr');\n\n\t\t\ttr.classList.add('table__items');\n\n\t\t\ttr.insertAdjacentHTML('beforeend', `\n\t\t\t\t<td class=\"table__item\">${item.name}</td>\n\n\t\t\t\t<td class=\"table__item\">${item.surname}</td>\n\n\t\t\t\t<td class=\"table__item\">${item.age}</td>\n\n\t\t\t\t<td class=\"table__item\">${item.gender}</td>\n\n\t\t\t\t<td class=\"table__item\">${item.position}</td>\n\n\t\t\t\t<td class=\"table__item\">${item.postJob}</td>\n\n\t\t\t\t<td class=\"table__item\">${item._salary} руб.</td>\n\n\t\t\t\t<td class=\"table__item\">\n\t\t\t\t\t<button type=\"button\" class=\"table__button\">Удалить</button>\n\t\t\t\t</td>\n\t\t\t`);\n\n\t\t\ttable.append(tr);\n\n\t\t\tconst removeBtn = tr.querySelector('.table__button');\n\n\t\t\tremoveBtn.addEventListener('click', (event) => {\n\t\t\t\tlet parentBtn = event.target.parentElement;\n\n\t\t\t\tWorker.removeWorker(i);\n\n\t\t\t\tgetTotal();\n\t\t\t\trenderTotal();\n\t\t\t\trenderWorker();\n\n\t\t\t\tlocalStorage.setItem('total-workers', JSON.stringify(totalWorkers));\n\t\t\t\tlocalStorage.setItem('total-salary', JSON.stringify(totalSalary));\n\t\t\t\tlocalStorage.setItem('workers', JSON.stringify(Worker.workerArr));\n\t\t\t});\n\t\t});\n\t}\n\n\tconst getTotal = () => {\n\t\ttotalSalary = +Worker.workerArr.reduce((sum, item) => {\n\n\t\t\treturn sum + +item._salary;\n\n\t\t}, 0);\n\n\t\ttotalWorkers = Worker.workerArr.length;\n\t}\n\n\tconst reset = () => {\n\t\tname.value = '';\n\t\tsurname.value = '';\n\t\tage.value = '';\n\n\t\tgenderCheck = '';\n\t\temploymentCheck = '';\n\t\tpositionCheck = '';\n\t\tpostjobCheck = '';\n\t\tsalaryWorker = 0;\n\n\t\tpostjob.value = '';\n\t\tposition.value = '';\n\n\t\tmale.checked = false;\n\t\tfemale.checked = false;\n\t\tfullTime.checked = false;\n\t\tpartTime.checked = false;\n\t}\n\n\tclose.addEventListener('click', () => {\n\t\toverlay.classList.remove('show');\n\t\tpopup.style.transform = '';\n\t});\n\n\tform.addEventListener('submit', (event) => {\n\t\tevent.preventDefault();\n\n\t\tcheckInputs();\n\t});\n\n\trenderWorker();\n\trenderTotal();\n}\n\n/* harmony default export */ const modules_workers = (workers);\n;// CONCATENATED MODULE: ./index.js\n\n\nmodules_workers()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUksbUJBQW1COztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkUsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGlCQUFpQix1QkFBdUI7O0FBRXhDOztBQUVBLEdBQUc7O0FBRUgsaUJBQWlCLHVCQUF1QjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQSxzREFBZTs7QUNwVXdCOztBQUV2QyxlQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jbGFzc2VzLmpzPzg1YjciLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy93b3JrZXJzLmpzPzc4MWYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQZXJzb24ge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBzdXJuYW1lLCBhZ2UsIGdlbmRlcikge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5zdXJuYW1lID0gc3VybmFtZTtcblx0XHR0aGlzLmFnZSA9IGFnZTtcblx0XHR0aGlzLmdlbmRlciA9IGdlbmRlcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgV29ya2VyIGV4dGVuZHMgUGVyc29uIHtcblx0Y29uc3RydWN0b3IobmFtZSwgc3VybmFtZSwgYWdlLCBnZW5kZXIsIHBvc3RKb2IsIHBvc2l0aW9uKSB7XG5cdFx0c3VwZXIobmFtZSwgc3VybmFtZSwgYWdlLCBnZW5kZXIpO1xuXG5cdFx0dGhpcy5wb3N0Sm9iID0gcG9zdEpvYjtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdH1cblxuXHRzdGF0aWMgd29ya2VyQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd29ya2VycycpKSB8fCBbXTtcblxuXHRzdGF0aWMgcmVtb3ZlV29ya2VyKGkpIHtcblx0XHRXb3JrZXIud29ya2VyQXJyLnNwbGljZShXb3JrZXIud29ya2VyQXJyLmluZGV4T2YoaSksIDEpO1xuXHR9XG5cblx0YWRkV29ya2VyKHdvcmtlcikge1xuXHRcdFdvcmtlci53b3JrZXJBcnIucHVzaCh3b3JrZXIpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFpbmVlIGV4dGVuZHMgV29ya2VyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgc3VybmFtZSwgYWdlLCBnZW5kZXIsIHBvc3RKb2IsIHBvc2l0aW9uLCBzYWxhcnkpIHtcblx0XHRzdXBlcihuYW1lLCBzdXJuYW1lLCBhZ2UsIGdlbmRlciwgcG9zdEpvYiwgcG9zaXRpb24pO1xuXG5cdFx0dGhpcy5fc2FsYXJ5ID0gMTUwMDA7XG5cdH1cblxuXHRzZXQgc2FsYXJ5KG51bSkge1xuXHRcdHRoaXMuX3NhbGFyeSA9IG51bTtcblx0fVxuXG5cdGdldCBzYWxhcnkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NhbGFyeTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSnVuaW9yIGV4dGVuZHMgV29ya2VyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgc3VybmFtZSwgYWdlLCBnZW5kZXIsIHBvc3RKb2IsIHBvc2l0aW9uLCBzYWxhcnkpIHtcblx0XHRzdXBlcihuYW1lLCBzdXJuYW1lLCBhZ2UsIGdlbmRlciwgcG9zdEpvYiwgcG9zaXRpb24pO1xuXG5cdFx0dGhpcy5fc2FsYXJ5ID0gMzAwMDA7XG5cdH1cblxuXHRzZXQgc2FsYXJ5KG51bSkge1xuXHRcdHRoaXMuX3NhbGFyeSA9IG51bTtcblx0fVxuXG5cdGdldCBzYWxhcnkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NhbGFyeTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTWlkZGxlIGV4dGVuZHMgV29ya2VyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgc3VybmFtZSwgYWdlLCBnZW5kZXIsIHBvc3RKb2IsIHBvc2l0aW9uLCBzYWxhcnkpIHtcblx0XHRzdXBlcihuYW1lLCBzdXJuYW1lLCBhZ2UsIGdlbmRlciwgcG9zdEpvYiwgcG9zaXRpb24pO1xuXG5cdFx0dGhpcy5fc2FsYXJ5ID0gODAwMDA7XG5cdH1cblxuXHRzZXQgc2FsYXJ5KG51bSkge1xuXHRcdHRoaXMuX3NhbGFyeSA9IG51bTtcblx0fVxuXG5cdGdldCBzYWxhcnkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NhbGFyeTtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU2VuaW9yIGV4dGVuZHMgV29ya2VyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgc3VybmFtZSwgYWdlLCBnZW5kZXIsIHBvc3RKb2IsIHBvc2l0aW9uLCBzYWxhcnkpIHtcblx0XHRzdXBlcihuYW1lLCBzdXJuYW1lLCBhZ2UsIGdlbmRlciwgcG9zdEpvYiwgcG9zaXRpb24pO1xuXG5cdFx0dGhpcy5fc2FsYXJ5ID0gMTUwMDAwO1xuXHR9XG5cblx0c2V0IHNhbGFyeShudW0pIHtcblx0XHR0aGlzLl9zYWxhcnkgPSBudW07XG5cdH1cblxuXHRnZXQgc2FsYXJ5KCkge1xuXHRcdHJldHVybiB0aGlzLl9zYWxhcnk7XG5cdH1cbn0iLCJpbXBvcnQgeyBXb3JrZXIsIFRyYWluZWUsIEp1bmlvciwgTWlkZGxlLCBTZW5pb3IgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmNvbnN0IHdvcmtlcnMgPSAoKSA9PiB7XG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1uYW1lXScpLFxuXHRcdHN1cm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1zdXJuYW1lXScpLFxuXHRcdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPWFnZV0nKSxcblxuXHRcdGdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9Z2VuZGVyXScpLFxuXHRcdG1hbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1tYWxlXScpLFxuXHRcdGZlbWFsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPWZlbWFsZV0nKSxcblxuXHRcdHBvc3RKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbaWQ9cG9zdGpvYl0nKSxcblx0XHRwb3NpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtpZD1wb3NpdGlvbl0nKSxcblxuXHRcdGVtcGxveW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPWVtcGxveW1lbnRdJyksXG5cdFx0ZnVsbFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1mdF0nKSxcblx0XHRwYXJ0VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPXB0XScpLFxuXG5cdFx0Zm9ybUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2xhYmVsLWVycm9yJyksXG5cblx0XHRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2VsZW1lbnRzJyksXG5cdFx0dGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2VsZW1lbnRzJyksXG5cblx0XHR3b3JrZXJzQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya2Vycy1jb3VudCcpLFxuXHRcdHNhbGFyeUNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbGFyeS1jb3VudCcpLFxuXG5cdFx0b3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JyksXG5cdFx0cG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKSxcblx0XHRjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xuXG5cdGxldCBnZW5kZXJDaGVjayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dlbmRlcicpKSB8fCAnJyxcblx0XHRlbXBsb3ltZW50Q2hlY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3ltZW50JykpIHx8ICcnLFxuXG5cdFx0cG9zaXRpb25DaGVjayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uJykpIHx8ICcnLFxuXHRcdHBvc3Rqb2JDaGVjayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc3Rqb2InKSkgfHwgJycsXG5cblx0XHRzYWxhcnlXb3JrZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYWxhcnknKSkgfHwgMCxcblxuXHRcdHRvdGFsV29ya2VycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsLXdvcmtlcnMnKSkgfHwgMCxcblx0XHR0b3RhbFNhbGFyeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsLXNhbGFyeScpKSB8fCAwO1xuXG5cdGNvbnN0IGdldEVtcGxveW1lbnQgPSAoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbXBsb3ltZW50Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlbXBsb3ltZW50W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0aWYgKGVtcGxveW1lbnRbaV0udHlwZSA9PSBcInJhZGlvXCIgJiYgZW1wbG95bWVudFtpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0ZW1wbG95bWVudENoZWNrID0gZW1wbG95bWVudFtpXS52YWx1ZTtcblxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbXBsb3ltZW50JywgSlNPTi5zdHJpbmdpZnkoZW1wbG95bWVudENoZWNrKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRnZXRFbXBsb3ltZW50KCk7XG5cblx0Y29uc3QgZ2V0R2VuZGVyID0gKCkgPT4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZ2VuZGVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRnZW5kZXJbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRpZiAoZ2VuZGVyW2ldLnR5cGUgPT0gXCJyYWRpb1wiICYmIGdlbmRlcltpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0Z2VuZGVyQ2hlY2sgPSBnZW5kZXJbaV0udmFsdWU7XG5cblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2VuZGVyJywgSlNPTi5zdHJpbmdpZnkoZ2VuZGVyQ2hlY2spKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGdldEdlbmRlcigpO1xuXG5cdGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4ge1xuXHRcdHBvc2l0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdGxldCBwb3NpdGlvbkluZGV4ID0gcG9zaXRpb24uc2VsZWN0ZWRJbmRleCxcblx0XHRcdFx0cG9zaXRpb25PcHRpb24gPSBwb3NpdGlvbi5vcHRpb25zO1xuXG5cdFx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdFx0Y2FzZSBwb3NpdGlvbi52YWx1ZSA9PSAnZmUnOlxuXHRcdFx0XHRcdHBvc2l0aW9uQ2hlY2sgPSBgJHtwb3NpdGlvbk9wdGlvbltwb3NpdGlvbkluZGV4XS50ZXh0Q29udGVudH1gO1xuXHRcdFx0XHRcdHBvc2l0aW9uQ2hlY2sgPSBjdXRTdHIocG9zaXRpb25DaGVjaywgJyAnKTtcblx0XHRcdFx0XHRzYWxhcnlXb3JrZXIgKz0gMDtcblxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYWxhcnknLCBKU09OLnN0cmluZ2lmeShzYWxhcnlXb3JrZXIpKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zaXRpb24nLCBKU09OLnN0cmluZ2lmeShwb3NpdGlvbkNoZWNrKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBwb3NpdGlvbi52YWx1ZSA9PSAnYmUnOlxuXHRcdFx0XHRcdHBvc2l0aW9uQ2hlY2sgPSBgJHtwb3NpdGlvbk9wdGlvbltwb3NpdGlvbkluZGV4XS50ZXh0Q29udGVudH1gO1xuXHRcdFx0XHRcdHBvc2l0aW9uQ2hlY2sgPSBjdXRTdHIocG9zaXRpb25DaGVjaywgJyAnKTtcblx0XHRcdFx0XHRzYWxhcnlXb3JrZXIgKz0gMTAwMDA7XG5cblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2FsYXJ5JywgSlNPTi5zdHJpbmdpZnkoc2FsYXJ5V29ya2VyKSk7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uJywgSlNPTi5zdHJpbmdpZnkocG9zaXRpb25DaGVjaykpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgcG9zaXRpb24udmFsdWUgPT0gJ2ZzJzpcblx0XHRcdFx0XHRwb3NpdGlvbkNoZWNrID0gYCR7cG9zaXRpb25PcHRpb25bcG9zaXRpb25JbmRleF0udGV4dENvbnRlbnR9YDtcblx0XHRcdFx0XHRwb3NpdGlvbkNoZWNrID0gY3V0U3RyKHBvc2l0aW9uQ2hlY2ssICcgJyk7XG5cdFx0XHRcdFx0c2FsYXJ5V29ya2VyICs9IDMwMDAwO1xuXG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NhbGFyeScsIEpTT04uc3RyaW5naWZ5KHNhbGFyeVdvcmtlcikpO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbicsIEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uQ2hlY2spKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRnZXRQb3NpdGlvbigpO1xuXG5cdGNvbnN0IGdldFBvc3Rqb2IgPSAoKSA9PiB7XG5cdFx0cG9zdEpvYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRsZXQgcG9zdEpvYkluZGV4ID0gcG9zdEpvYi5zZWxlY3RlZEluZGV4LFxuXHRcdFx0XHRwb3N0Sm9iT3B0aW9uID0gcG9zdEpvYi5vcHRpb25zO1xuXG5cdFx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdFx0Y2FzZSBwb3N0Sm9iLnZhbHVlID09ICd0cmEnOlxuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGAke3Bvc3RKb2JPcHRpb25bcG9zdEpvYkluZGV4XS50ZXh0Q29udGVudH1gO1xuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGN1dFN0cihwb3N0am9iQ2hlY2ssICcgJyk7XG5cblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdGpvYicsIEpTT04uc3RyaW5naWZ5KHBvc3Rqb2JDaGVjaykpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBwb3N0Sm9iLnZhbHVlID09ICdqdW4nOlxuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGAke3Bvc3RKb2JPcHRpb25bcG9zdEpvYkluZGV4XS50ZXh0Q29udGVudH1gO1xuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGN1dFN0cihwb3N0am9iQ2hlY2ssICcgJyk7XG5cblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdGpvYicsIEpTT04uc3RyaW5naWZ5KHBvc3Rqb2JDaGVjaykpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBwb3N0Sm9iLnZhbHVlID09ICdtaWQnOlxuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGAke3Bvc3RKb2JPcHRpb25bcG9zdEpvYkluZGV4XS50ZXh0Q29udGVudH1gO1xuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGN1dFN0cihwb3N0am9iQ2hlY2ssICcgJyk7XG5cblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdGpvYicsIEpTT04uc3RyaW5naWZ5KHBvc3Rqb2JDaGVjaykpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBwb3N0Sm9iLnZhbHVlID09ICdzZW4nOlxuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGAke3Bvc3RKb2JPcHRpb25bcG9zdEpvYkluZGV4XS50ZXh0Q29udGVudH1gO1xuXHRcdFx0XHRcdHBvc3Rqb2JDaGVjayA9IGN1dFN0cihwb3N0am9iQ2hlY2ssICcgJyk7XG5cblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdGpvYicsIEpTT04uc3RyaW5naWZ5KHBvc3Rqb2JDaGVjaykpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0Z2V0UG9zdGpvYigpO1xuXG5cdGNvbnN0IGN1dFN0ciA9IChzdHIsIGNoYXIpID0+IHtcblxuXHRcdHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAke2NoYXJ9LipgKSwgJycpO1xuXHR9XG5cblx0Y29uc3QgZ2V0U2FsYXJ5ID0gKHdvcmtlcikgPT4ge1xuXHRcdHdvcmtlci5zYWxhcnkgPSB3b3JrZXIuc2FsYXJ5ICsgc2FsYXJ5V29ya2VyIC0gKHdvcmtlci5zYWxhcnkgKiAoK2VtcGxveW1lbnRDaGVjayAvIDEwMCkpO1xuXG5cdFx0cmV0dXJuIHdvcmtlci5zYWxhcnk7XG5cdH1cblxuXHRjb25zdCBjcmVhdGVXb3JrZXIgPSAoKSA9PiB7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIHBvc3RKb2IudmFsdWUgPT0gJ3RyYSc6XG5cdFx0XHRcdGNvbnN0IHRyYWluZWUgPSBuZXcgVHJhaW5lZShuYW1lLnZhbHVlLCBzdXJuYW1lLnZhbHVlLCBhZ2UudmFsdWUsIGdlbmRlckNoZWNrLCBwb3N0am9iQ2hlY2ssIHBvc2l0aW9uQ2hlY2spO1xuXG5cdFx0XHRcdGVtcGxveW1lbnRDaGVjayA9PSAnMzAnID8gZ2V0U2FsYXJ5KHRyYWluZWUpIDogdHJhaW5lZS5zYWxhcnkgPSB0cmFpbmVlLnNhbGFyeSArIHNhbGFyeVdvcmtlcjtcblxuXHRcdFx0XHR0cmFpbmVlLmFkZFdvcmtlcih0cmFpbmVlKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgcG9zdEpvYi52YWx1ZSA9PSAnanVuJzpcblx0XHRcdFx0Y29uc3QganVuaW9yID0gbmV3IEp1bmlvcihuYW1lLnZhbHVlLCBzdXJuYW1lLnZhbHVlLCBhZ2UudmFsdWUsIGdlbmRlckNoZWNrLCBwb3N0am9iQ2hlY2ssIHBvc2l0aW9uQ2hlY2spO1xuXG5cdFx0XHRcdGVtcGxveW1lbnRDaGVjayA9PSAnMzAnID8gZ2V0U2FsYXJ5KGp1bmlvcikgOiBqdW5pb3Iuc2FsYXJ5ID0ganVuaW9yLnNhbGFyeSArIHNhbGFyeVdvcmtlcjtcblxuXHRcdFx0XHRqdW5pb3IuYWRkV29ya2VyKGp1bmlvcik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHBvc3RKb2IudmFsdWUgPT0gJ21pZCc6XG5cdFx0XHRcdGNvbnN0IG1pZGRsZSA9IG5ldyBNaWRkbGUobmFtZS52YWx1ZSwgc3VybmFtZS52YWx1ZSwgYWdlLnZhbHVlLCBnZW5kZXJDaGVjaywgcG9zdGpvYkNoZWNrLCBwb3NpdGlvbkNoZWNrKTtcblxuXHRcdFx0XHRlbXBsb3ltZW50Q2hlY2sgPT0gJzMwJyA/IGdldFNhbGFyeShtaWRkbGUpIDogbWlkZGxlLnNhbGFyeSA9IG1pZGRsZS5zYWxhcnkgKyBzYWxhcnlXb3JrZXI7XG5cblx0XHRcdFx0bWlkZGxlLmFkZFdvcmtlcihtaWRkbGUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBwb3N0Sm9iLnZhbHVlID09ICdzZW4nOlxuXHRcdFx0XHRjb25zdCBzZW5pb3IgPSBuZXcgU2VuaW9yKG5hbWUudmFsdWUsIHN1cm5hbWUudmFsdWUsIGFnZS52YWx1ZSwgZ2VuZGVyQ2hlY2ssIHBvc3Rqb2JDaGVjaywgcG9zaXRpb25DaGVjayk7XG5cblx0XHRcdFx0ZW1wbG95bWVudENoZWNrID09ICczMCcgPyBnZXRTYWxhcnkoc2VuaW9yKSA6IHNlbmlvci5zYWxhcnkgPSBzZW5pb3Iuc2FsYXJ5ICsgc2FsYXJ5V29ya2VyO1xuXG5cdFx0XHRcdHNlbmlvci5hZGRXb3JrZXIoc2VuaW9yKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgJiZcblx0XHRcdGlzTmFOKHN0cikgJiZcblx0XHRcdCEoc3RyLnN0YXJ0c1dpdGgoJyAnKSB8fCBzdHIuZW5kc1dpdGgoJyAnKSk7XG5cdH1cblxuXHRjb25zdCBpc051bWJlciA9IChudW0pID0+IHtcblx0XHRyZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobnVtKSkgJiZcblx0XHRcdGlzRmluaXRlKG51bSkgJiZcblx0XHRcdCEobnVtLnN0YXJ0c1dpdGgoJyAnKSB8fCBudW0uZW5kc1dpdGgoJyAnKSk7XG5cdH1cblxuXHRjb25zdCBjaGVja0lucHV0cyA9ICgpID0+IHtcblx0XHRpZiAoIWlzU3RyaW5nKG5hbWUudmFsdWUpIHx8ICFpc1N0cmluZyhzdXJuYW1lLnZhbHVlKSB8fCAhaXNOdW1iZXIoYWdlLnZhbHVlKSB8fFxuXHRcdFx0KCFtYWxlLmNoZWNrZWQgJiYgIWZlbWFsZS5jaGVja2VkKSB8fCAoIWZ1bGxUaW1lLmNoZWNrZWQgJiYgIXBhcnRUaW1lLmNoZWNrZWQpKSB7XG5cblx0XHRcdG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXHRcdFx0cG9wdXAuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3JlYXRlV29ya2VyKCk7XG5cdFx0XHRyZW5kZXJXb3JrZXIoKTtcblxuXHRcdFx0Z2V0VG90YWwoKTtcblx0XHRcdHJlbmRlclRvdGFsKCk7XG5cblx0XHRcdHJlc2V0KCk7XG5cblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbC13b3JrZXJzJywgSlNPTi5zdHJpbmdpZnkodG90YWxXb3JrZXJzKSk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwtc2FsYXJ5JywgSlNPTi5zdHJpbmdpZnkodG90YWxTYWxhcnkpKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3b3JrZXJzJywgSlNPTi5zdHJpbmdpZnkoV29ya2VyLndvcmtlckFycikpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHJlbmRlclRvdGFsID0gKCkgPT4ge1xuXHRcdHNhbGFyeUNvdW50LmlubmVySFRNTCA9IGAke3RvdGFsU2FsYXJ5fSDRgNGD0LEuYDtcblx0XHR3b3JrZXJzQ291bnQuaW5uZXJIVE1MID0gYCR7dG90YWxXb3JrZXJzfSDRh9C10LsuYDtcblx0fVxuXG5cdGNvbnN0IHJlbmRlcldvcmtlciA9ICgpID0+IHtcblx0XHR0YWJsZS5pbm5lckhUTUwgPSAnJztcblxuXHRcdFdvcmtlci53b3JrZXJBcnIuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuXHRcdFx0Y29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG5cdFx0XHR0ci5jbGFzc0xpc3QuYWRkKCd0YWJsZV9faXRlbXMnKTtcblxuXHRcdFx0dHIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG5cdFx0XHRcdDx0ZCBjbGFzcz1cInRhYmxlX19pdGVtXCI+JHtpdGVtLm5hbWV9PC90ZD5cblxuXHRcdFx0XHQ8dGQgY2xhc3M9XCJ0YWJsZV9faXRlbVwiPiR7aXRlbS5zdXJuYW1lfTwvdGQ+XG5cblx0XHRcdFx0PHRkIGNsYXNzPVwidGFibGVfX2l0ZW1cIj4ke2l0ZW0uYWdlfTwvdGQ+XG5cblx0XHRcdFx0PHRkIGNsYXNzPVwidGFibGVfX2l0ZW1cIj4ke2l0ZW0uZ2VuZGVyfTwvdGQ+XG5cblx0XHRcdFx0PHRkIGNsYXNzPVwidGFibGVfX2l0ZW1cIj4ke2l0ZW0ucG9zaXRpb259PC90ZD5cblxuXHRcdFx0XHQ8dGQgY2xhc3M9XCJ0YWJsZV9faXRlbVwiPiR7aXRlbS5wb3N0Sm9ifTwvdGQ+XG5cblx0XHRcdFx0PHRkIGNsYXNzPVwidGFibGVfX2l0ZW1cIj4ke2l0ZW0uX3NhbGFyeX0g0YDRg9CxLjwvdGQ+XG5cblx0XHRcdFx0PHRkIGNsYXNzPVwidGFibGVfX2l0ZW1cIj5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRhYmxlX19idXR0b25cIj7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0YCk7XG5cblx0XHRcdHRhYmxlLmFwcGVuZCh0cik7XG5cblx0XHRcdGNvbnN0IHJlbW92ZUJ0biA9IHRyLnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fYnV0dG9uJyk7XG5cblx0XHRcdHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgcGFyZW50QnRuID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cblx0XHRcdFx0V29ya2VyLnJlbW92ZVdvcmtlcihpKTtcblxuXHRcdFx0XHRnZXRUb3RhbCgpO1xuXHRcdFx0XHRyZW5kZXJUb3RhbCgpO1xuXHRcdFx0XHRyZW5kZXJXb3JrZXIoKTtcblxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwtd29ya2VycycsIEpTT04uc3RyaW5naWZ5KHRvdGFsV29ya2VycykpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwtc2FsYXJ5JywgSlNPTi5zdHJpbmdpZnkodG90YWxTYWxhcnkpKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dvcmtlcnMnLCBKU09OLnN0cmluZ2lmeShXb3JrZXIud29ya2VyQXJyKSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGdldFRvdGFsID0gKCkgPT4ge1xuXHRcdHRvdGFsU2FsYXJ5ID0gK1dvcmtlci53b3JrZXJBcnIucmVkdWNlKChzdW0sIGl0ZW0pID0+IHtcblxuXHRcdFx0cmV0dXJuIHN1bSArICtpdGVtLl9zYWxhcnk7XG5cblx0XHR9LCAwKTtcblxuXHRcdHRvdGFsV29ya2VycyA9IFdvcmtlci53b3JrZXJBcnIubGVuZ3RoO1xuXHR9XG5cblx0Y29uc3QgcmVzZXQgPSAoKSA9PiB7XG5cdFx0bmFtZS52YWx1ZSA9ICcnO1xuXHRcdHN1cm5hbWUudmFsdWUgPSAnJztcblx0XHRhZ2UudmFsdWUgPSAnJztcblxuXHRcdGdlbmRlckNoZWNrID0gJyc7XG5cdFx0ZW1wbG95bWVudENoZWNrID0gJyc7XG5cdFx0cG9zaXRpb25DaGVjayA9ICcnO1xuXHRcdHBvc3Rqb2JDaGVjayA9ICcnO1xuXHRcdHNhbGFyeVdvcmtlciA9IDA7XG5cblx0XHRwb3N0am9iLnZhbHVlID0gJyc7XG5cdFx0cG9zaXRpb24udmFsdWUgPSAnJztcblxuXHRcdG1hbGUuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdGZlbWFsZS5jaGVja2VkID0gZmFsc2U7XG5cdFx0ZnVsbFRpbWUuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdHBhcnRUaW1lLmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdHBvcHVwLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXHR9KTtcblxuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjaGVja0lucHV0cygpO1xuXHR9KTtcblxuXHRyZW5kZXJXb3JrZXIoKTtcblx0cmVuZGVyVG90YWwoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd29ya2VycyIsImltcG9ydCB3b3JrZXJzIGZyb20gJy4vbW9kdWxlcy93b3JrZXJzJ1xuXG53b3JrZXJzKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///528\n")}},__webpack_exports__={};__webpack_modules__[528]()})();