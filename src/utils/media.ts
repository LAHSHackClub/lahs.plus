import { browser } from '$app/env';
export let mobile = false;
export function closeSidebar() {
	if (mobile) {
		document.getElementById('sidebar').parentElement.scrollBy(260, 0);
	}
}
export function openSidebar() {
	if (mobile) {
		document.getElementById('sidebar').parentElement.scrollBy(-260, 0);
	}
}

if (browser) {
	const screen = window.matchMedia('(max-width: 768px)');
	if (screen.matches) {
		mobile = true;
	}
}
