import { writable } from 'svelte-local-storage-store';

export const preferences = writable('preferences', {
	theme: 'light',
	mobile: false
});
