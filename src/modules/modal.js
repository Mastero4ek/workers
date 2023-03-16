const modal = () => {
	const overlay = document.getElementById('overlay'),
		popup = overlay.querySelector('.popup');

	overlay.addEventListener('click', (e) => {
		const target = e.target.classList.contains('overlay');

		if(target || e.target.matches('.popup__close') || e.target.matches('.popup__close > span')) {
			overlay.classList.remove('show');
			popup.style.transform = '';
		}
	});
}

export default modal