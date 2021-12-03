
<script lang="ts">
	import { fade } from 'svelte/transition';
	export let main: HTMLElement;
	export let scroll: number;
	export let show: boolean = true;
</script>

{#if show}
<button transition:fade="{{duration: 100}}"
	class="prompter" style="top:{scroll + 30}px"
	on:click={()=>main.scrollBy(-250, 0)}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
</button>
{/if}

<style lang="scss">
	.prompter {
		background-color: #000;
		border-radius: 10px;
		display: grid;
		place-items: center;
		
		position: absolute;
		top: 30px;
		left: 30px;
		z-index: 2;
		height: 50px;
		width: 50px;
	}
</style>