<script>
	import '../tailwind.css';
	let phone = 'temp';
	//set local storage var for dark mode called theme
	let toogleDark = localStorage.getItem('theme');
	if (toogleDark === 'dark') {
		document.body.classList.add('dark');
	}
	if (toogleDark === 'light') {
		document.body.classList.remove('dark');
	}
</script>

<slot name="header" />

<div class=" mx-auto   ">
	<button class="" on:click={toogleDark}> Dark Mode </button>
	<h1 class="text-gray-900 dark:text-gray-200">Hello World</h1>
</div>

<style lang="postcss">
</style>
