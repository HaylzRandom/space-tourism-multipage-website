const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

// Tabs Navigation
tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
	tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
	const keyCode = e.keyCode;
	const keydownLeft = 37;
	const keydownRight = 39;

	// Change tabindex of current tab to -1
	if (keyCode === keydownLeft || keyCode === keydownRight) {
		tabs[tabFocus].setAttribute('tabindex', -1);

		// If right key is pressed, move to tab on right
		if (keyCode === keydownRight) {
			tabFocus++;

			if (tabFocus >= tabs.length) {
				tabFocus = 0;
			}
		}
		// If left key is pressed, move to tab on left
		else if (keyCode === keydownLeft) {
			tabFocus--;

			if (tabFocus < 0) {
				tabFocus = tabs.length - 1;
			}
		}

		tabs[tabFocus].setAttribute('tabindex', 0);
		tabs[tabFocus].focus();
	}
}

function changeTabPanel(e) {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls');
	const targetImage = targetTab.getAttribute('data-image');

	const tabContainer = targetTab.parentNode;
	const mainContainer = tabContainer.parentNode;

	// Remove selected from panel
	tabContainer
		.querySelector('[aria-selected="true"')
		.setAttribute('aria-selected', false);

	targetTab.setAttribute('aria-selected', true);

	// Hide Content
	hideContent(mainContainer, '[role="tabpanel"]');
	hideContent(mainContainer, 'picture');

	// Show new content
	showContent(mainContainer, [`#${targetPanel}`]);
	showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content) {
	parent.querySelectorAll(content).forEach((item) => {
		item.setAttribute('hidden', true);
	});
}

function showContent(parent, content) {
	parent.querySelector(content).removeAttribute('hidden');
}
