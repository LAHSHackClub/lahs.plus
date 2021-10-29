const screen = window.matchMedia('(max-width: 768px)');
export let mobile = false;
if (screen.matches) {
	mobile = true;
}
