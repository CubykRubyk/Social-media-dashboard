window.onload = function () {
	const body = document.querySelector('body');
	const toggleSwitchBtn = document.querySelector('.toggle__btn');

	function toggleSwitch() {
		toggleSwitchBtn.classList.toggle('toggle__btn--switched');
	}

	function switchThemesBody() {
		if (body.classList.contains('dark-theme')) {
			body.classList.replace('dark-theme', 'light-theme');
		} else {
			body.classList.replace('light-theme', 'dark-theme');
		}
	}

	function toggleThemes() {
		switchThemesBody();
		toggleSwitch();
	}

	toggleSwitchBtn.addEventListener('click', toggleThemes);

};



