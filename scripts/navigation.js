const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// When hamburger button is clicked
navToggle.addEventListener('click', () => {
	const visibility = nav.getAttribute('data-visible');
	// If menu is closed, open it
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else {
		// If menu is open, close it
		nav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});
