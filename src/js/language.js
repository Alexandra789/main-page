const languageBtn = document.querySelector('.language-btn');
languageBtn.addEventListener('click', (e) => {
	e.currentTarget.innerText = e.currentTarget.innerText === 'EN' ? 'RU' : 'EN';
})