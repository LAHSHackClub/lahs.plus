<script lang="ts">
	import NavItems from './NavBar.svelte';
	import '../tailwind.css';
	function closeSidebar() {
		document.getElementById('sidebar').parentElement.scrollBy(260, 0);
	}
</script>

<div id="sidebar">
	<p
		class="md:hidden hover:bg-lahs-blue-hover rounded-none  hover:rounded-md text-center hover:shadow-lg p-5 dark:text-gray-200 text-white font-semibold hover:text-gray-200 transition-all duration-200 ease-linear;"
	>
		<b>Sidebar Group 1</b>
	</p>
	<p>Sidebar Item 1</p>
	<p>Sidebar Item 2</p>
	<p>Sidebar Item 3</p>
	<hr />
	<p><b>Sidebar Group 2</b></p>
	<p>Sidebar Item 1</p>
	<p>Sidebar Item 2</p>
	<p>Sidebar Item 3</p>
	<br />
	<button class="navbar-link" on:click={closeSidebar}>Close Sidebar with JS</button>
</div>

<style>
	#sidebar {
		@apply bg-lahs-blue;
		min-width: 200px;
		padding: 0 30px;
		scroll-snap-align: start;
		scroll-snap-stop: always;
		text-align: left;
	}
</style>
