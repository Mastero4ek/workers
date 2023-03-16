const changeTheme = () => {
	const main = document.querySelector('.main'),
		modal = document.getElementById('overlay'), 
		toggleThemeBtn = document.querySelector('.toggle-state');

	if (localStorage.getItem('theme-main') === 'dark-theme') main.classList.add('dark-theme');
	if (localStorage.getItem('theme-modal') === 'dark-theme') modal.classList.add('dark-theme');

	toggleThemeBtn.addEventListener('change', () => {
		if(toggleThemeBtn.checked) {
			main.classList.remove('light-theme');
			main.classList.add('dark-theme');
			modal.classList.remove('light-theme');
			modal.classList.add('dark-theme');

			localStorage.setItem('theme-main', main.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
			localStorage.setItem('theme-modal', modal.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
		} else {
			main.classList.add('light-theme');
			main.classList.remove('dark-theme');
			modal.classList.add('light-theme');
			modal.classList.remove('dark-theme');

			localStorage.setItem('theme-main', main.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
			localStorage.setItem('theme-modal', modal.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
		}
	});
}

export default changeTheme