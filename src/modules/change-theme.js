const changeTheme = () => {
	const body = document.querySelector('body'),
		toggleThemeBtn = document.querySelector('.toggle-state');

	localStorage.getItem('theme-btn') === 'true' ? toggleThemeBtn.checked = true : toggleThemeBtn.checked = false;

	toggleThemeBtn.addEventListener('change', () => {
		if(toggleThemeBtn.checked) {
			body.classList.toggle('dark-theme');

			localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
			localStorage.setItem('theme-btn', true);
		} else {
			body.classList.toggle('dark-theme');

			localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
			localStorage.setItem('theme-btn', false);
		}
	});
}

export default changeTheme