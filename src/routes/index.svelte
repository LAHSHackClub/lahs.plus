<script>
	import '../tailwind.css';
	let phone = 'temp';
	import { openSidebar } from '../utils/media';
</script>

<div class=" mx-auto   ">
	<h1 class="text-gray-900 dark:text-gray-200">Hello World</h1>
	<button
		class="bg-lahs-blue hover:bg-lahs-blue-hover text-white font-bold py-2 px-4"
		on:click={openSidebar}
	>
		Click to Oen Sidebar
	</button>
</div>

<style lang="postcss">
</style>
