<script lang="ts">
	import { fetchClubs } from '../../utils/clubStore';
	import { page } from '$app/stores';
	import Club from '../clubs/[slug].svelte';
	import { get } from 'svelte/store';
	async function load() {
		const clubs = await fetchClubs();
		return clubs;
	}

	//let searchClub = $page.url.searchParams.get('search');

	let searchClub = $page.url.searchParams.get('search'); // This fixes a 500 error but type script doesn't like it
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
	const searchs = search($page.url.searchParams.get('search')).then((results) => {
		return results;
	});
</script>

<form class="search-form">
	<input type="text" name="search" placeholder="Search" class="search" bind:value={searchClub} />
	<button type="submit">Search</button>
</form>
{#if searchClub !== null || searchClub !== undefined || searchClub !== ''}
	<section class="search-section">
		<ul>
			{#await search($page.url.searchParams.get('search')) then results}
				{#if results.length > 0}
					{#each results as club}
						<Club key={club.id} />
					{/each}
				{:else}
					No Clubs Found
				{/if}
			{/await}
		</ul>
	</section>
{/if}
{#if searchClub === undefined || searchClub === null}
	<section class="club-section">
		<div class="club-container">
			{#await load() then promise}
				{#each promise as club}
					<Club key={club.id} />
				{/each}
			{/await}
		</div>
	</section>
{/if}

<style>
	.club-section {
		display: flex;
	}
	.search {
		@apply flex-1 dark:bg-gray-800 bg-gray-50 dark:text-white shadow appearance-none border border-lahs-blue rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-inner;
	}
	.search-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.search-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.club-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
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
