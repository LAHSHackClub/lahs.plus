<script lang="ts" context="module">
	export let key: number;
	import { fetchClub, fetchClubs } from '../utils/clubStore';
	var club_name = '';
	var club_desc = 'loading....';
	export async function load() {
		const club = await fetchClub(key);
		club_name = club.name;
		club_desc = club.description;
		console.log(club);
		return {
			club_name,
			club_desc
		};
	}
</script>

<script lang="ts">
	export let key;
</script>

<div class="container" id="clubs">
	<div class="inner">
		<!-- svelte-ignore missing-declaration -->
		<h1 class="club-title">
			{club_name}
		</h1>
		<h3 class="club-desc">
			{club_desc}
		</h3>
		<h6>
			{key}
		</h6>
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
