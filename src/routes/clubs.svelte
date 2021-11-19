<script lang="ts">
	import Club from '../components/Club.svelte';
	import { cleanCombinedArray } from '../utils/getClubs';
	async function getClub() {
		const club = await cleanCombinedArray();
		return club;
	}
	let search = '';
	async function query(search: string) {
		const club = await getClub();
		club.filter((club) => club.name === search);
		const c = club.findIndex((club) => club.name === search);
		return c;
	}
	query(search);
</script>

<!-- Search For club by name -->
<form>
	<input
		type="text"
		name="club"
		bind:value={search}
		class="form-input"
		placeholder="Search for club"
	/>
	<button
		on:click={async (e) => {
			const s = await query(search);
			console.log(s);
			e.preventDefault();
		}}
	>
		Search
	</button>
</form>

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
	}
	.club-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		flex-wrap: wrap-reverse;
		align-items: center;
		width: 100%;
	}
	.form-input {
		@apply bg-gray-200;
	}
</style>
