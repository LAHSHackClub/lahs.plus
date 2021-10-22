<script lang="ts" context="module">
	import { onMount } from 'svelte';
	let ready = false;

	function darkToggle() {
		if (localStorage.getItem('dark') == 'true') {
			localStorage.setItem('dark', 'false');
			document.body.classList.remove('dark');
		}
		if (localStorage.getItem('theme') === 'dark') {
			localStorage.setItem('theme', 'light');
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		} else {
			localStorage.setItem('theme', 'dark');
			document.body.classList.remove('light');
			document.querySelector('body').classList.add('dark');
		}
	}
</script>

import {onMount} from 'svelte';

<button class="navbar-link ml-auto " on:click={darkToggle}>Toggle Theme</button>
