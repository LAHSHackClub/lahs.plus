<script lang="ts">
	import Club from '../components/Club.svelte';
	import { cleanCombinedArray, getClubNameAndDescription } from '../utils/getClubs';
	async function getClub() {
		const club = await cleanCombinedArray();
		return club;
	}
</script>

<div>List of Clubs</div>

<section class="club-section">
	<div class="club-container">
		{#await getClub()}
			<p>...waiting</p>
		{:then club}
			{#each club as item, i}
				<Club key={i} />
			{/each}
		{/await}
	</div>
</section>

<style>
	.club-section {
		display: flex;
		grid-template-rows: min-content;
	}
	.club-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap-reverse;
		align-items: center;
		width: 100%;
	}
</style>
