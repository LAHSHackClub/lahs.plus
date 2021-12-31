
<script lang="ts">
	function transformTo(ev: MouseEvent) {
		const svg = document.querySelector(".map svg") as HTMLElement;
		const el = ev.target as HTMLElement;
		const sR = svg.getBoundingClientRect();
		const eR = el.getBoundingClientRect();

		const cX = eR.left - sR.left + eR.width / 2;
		const cY = eR.top - sR.top + eR.height / 2;
		console.log(cX);

		svg.style.transform = `scale(15)`;
		svg.style.transformOrigin = `${cX}px ${cY}px`;
	}
</script>

<div class="focus-area">
	<section class="map">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 888.7 932.87">
			<defs>
				<style>
					.a {
						fill: #c69c6d;
					}
					.b {
						fill: red;
					}
				</style>
			</defs>
			<rect on:click="{transformTo}" class="a" x="8" y="8" width="437.42" height="437.42" />
			<rect on:click="{transformTo}" class="a" x="443.28" y="487.45" width="437.42" height="437.42" />
			<rect on:click="{transformTo}" class="b" x="603.09" y="107.39" width="58.9" height="58.9" />
			<rect on:click="{transformTo}" class="b" x="359.53" y="723.03" width="58.9" height="58.9" />
		</svg>
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

		svg {
			transition-duration: 1s;
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