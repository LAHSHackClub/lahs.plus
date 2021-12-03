
<script lang="ts">
	import { fade } from 'svelte/transition';
	export let show: boolean = false;
	export let main: HTMLElement;
</script>

{#if show}
<button transition:fade="{{duration: 100}}"
	class="scroll-cover"
	on:click="{()=>main.scrollBy(250, 0)}">
	<span>return to content ◀️</span>
</button>
{/if}

<style lang="scss">
	.scroll-cover {
		background-color: #000a;
		width: 100%;

		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;

		span {
			position: absolute;
			top: 0;
			left: 30px;
			bottom: 30px;

			font-size: 3rem;
			font-weight: bold;
			writing-mode: vertical-rl;
			transform: scale(-1);
			text-align: left;
		}
	}

	@media (min-width: 768px) {
		.scroll-cover {
			display: none;
		}
	}
</style>