
<script lang="ts">
	import MapSVG from "$lib/MapSVG.svelte";
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
		background-color: #fed;
		border-radius: 10px;
		flex: 1 1;
		padding: 10px 0;
		overflow: auto;
		scroll-behavior: smooth;
		position: relative;

		> :global(*) {
			max-height: 100%;
		}
	}

	.finder {
		@apply bg-lahs-blue text-white;
		border-radius: 10px;
		padding: 30px;
		width: 350px;

		h1 {
			letter-spacing: 1px;
			font-size: 1.2rem;
			font-weight: bold;
			margin: 0;
			text-transform: uppercase;
		}
	}
</style>