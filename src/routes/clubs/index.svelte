<script lang="ts">
	import { fetchClubs } from '../../utils/clubStore';
	import { page } from '$app/stores';
	import Club from '../clubs/[slug].svelte';
	async function load() {
		const clubs = await fetchClubs();
		return clubs;
	}
	let searchClub = $page.query.get('search');
	console.log(searchClub);
	async function search(query: string) {
		//Find clubs that match the query then return the id
		const clubs = await fetchClubs();
		if (query !== null && query !== undefined && query !== '') {
			const filtered = clubs.filter((club) =>
				club.name.toLowerCase().includes(query.toLowerCase())
			);
			return filtered;
		}
		return clubs;
	}
	const searchs = search($page.query.get('search')).then((results) => {
		return results;
	});
</script>

<form>
	<input type="text" name="search" placeholder="Search" bind:value={searchClub} />
	<button type="submit">Search</button>
</form>
{#if searchClub !== undefined && searchClub !== null}
	<ul>
		{#await search('') then results}
			{#each results as club}
				<li>
					<a href="/clubs/{club.id}">{club.name}</a>
				</li>
			{/each}
		{/await}
	</ul>
{/if}

<section class="club-section">
	<div class="club-container">
		{#await load() then promise}
			{#each promise as club}
				<Club key={club.id} />
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

	.search {
		width: 100%;
		height: 50px;
		border: none;
		border-bottom: 1px solid #ccc;
		font-size: 1.5rem;
		padding: 0 10px;
		margin: 0;
		@apply text-gray-900;
	}
</style>
