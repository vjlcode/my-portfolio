function toggleMode() {
	const html = document.documentElement;
	const img = document.querySelector('img');
	if (html.classList.contains('light')) {
		html.classList.remove('light');
		img.setAttribute("src", "./assets/profile-dark.svg")
	} else {
		html.classList.add('light');
		img.setAttribute("src", "./assets/profile-light.svg")
	}
}

let btnSwitch = document.querySelector('button span');

btnSwitch.addEventListener(("click"), toggleMode);

