import { browser } from '$app/env';
export let mobile = false;

if (browser) {
	const screen = window.matchMedia('(max-width: 768px)');
	if (screen.matches) {
		mobile = true;
	}
}
