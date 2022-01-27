
<script lang="ts">
	import MapSVG from "$lib/MapSVG.svelte";
	
	function transformTo(ev: MouseEvent) {
		const svg = document.querySelector(".map svg") as HTMLElement;
		const el = ev.target as any;
		const sR = svg.getBoundingClientRect();
		const eR = el.getBoundingClientRect();

		const cX = eR.left - sR.left + eR.width / 2;
		const cY = eR.top - sR.top + eR.height / 2;
		console.log(cX);

		svg.style.transform = `scale(2)`;
		setTimeout(() => {
			el.scrollIntoView();
		}, 1000);
	}
</script>

<div class="focus-area">
	<section class="map">
		<MapSVG></MapSVG>
	</section>
	<section class="finder">
		<h1>Find Landmarks</h1>
	</section>
</div>

<style lang="scss">
	.focus-area {
		display: flex;
		column-gap: 20px;
		padding: 20px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.map {
		background-color: white;
		border-radius: 10px;
		flex: 1 1;
		overflow: auto;
		scroll-behavior: smooth;
		position: relative;

		svg {
			transition-duration: 1s;
			transform-origin: top left;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.finder {
		background-color: blue;
		border-radius: 10px;
		padding: 30px;
		width: 350px;

		h1 {
			font-size: 1.5rem;
			margin: 0;
			text-transform: uppercase;
		}
	}
</style>