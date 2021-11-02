import { get } from 'svelte/store';
import { preferences } from './store';
export let mobile = get(preferences).mobile;
export function checkMobile() {
	try {
		if (window.innerWidth < 768) {
			preferences.update((preferences) => {
				return {
					...preferences,
					mobile: true
				};
			});
		} else {
			preferences.update((preferences) => {
				return {
					...preferences,
					mobile: false
				};
			});
		}
	} catch (e) {
		//SSR error bandaid fix
		console.log(e);
	}
}
