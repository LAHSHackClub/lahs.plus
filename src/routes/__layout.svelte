<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
	import { mobile } from '../utils/media';
	onMount(() => {
		console.log(screen);
		console.log('mobile = ' + mobile);
	});
</script>

<div class="topnav">
	<NavBar />
	<slot />
	<Footer />
</div>

<style lang="scss">
</style>
