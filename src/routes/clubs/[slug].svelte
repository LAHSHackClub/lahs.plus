<script context="module" lang="ts">
</script>

<script lang="ts">
	import { page } from '$app/stores';
	export let key;
	import { fetchClub } from '../../utils/clubStore';
	export async function load() {
		const slug: number = Number($page.params.slug);
		const club = await fetchClub(slug || key);
		return {
			club
		};
	}
</script>

<div class="container" id="clubs">
	<div class="inner">
		<h1 class="club-title">
			{#await load() then props}
				{props.club.name}
			{/await}
		</h1>
		<h3 class="club-desc">
			{#await load() then props}
				{props.club.description}
			{/await}
		</h3>
		<h6 />
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		-webkit-justify-content: center;
		max-width: 820px;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		margin-bottom: auto;
	}
	.inner {
		z-index: 2;
		@apply bg-lahs-blue;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		border-bottom-left-radius: 12px;
		border-bottom-right-radius: 12px;
		padding: 16px 24px 24px 24px;
		margin: 2rem;
	}

	.club-title {
		font-size: 1.5em;
		font-weight: bold;
	}
	.club-desc {
		font-size: 1em;
		margin-top: 0;
		word-wrap: break-word;
	}
</style>
