<script lang="ts">
	import Club from '../components/Club.svelte';
	import { page } from '$app/stores';
	import { cleanCombinedArray } from '../utils/getClubs';
	import { get } from 'svelte/store';
	var searchClub = $page.query.get('club');
	async function getClub() {
		const club = await cleanCombinedArray();
		return club;
	}
	async function mapIdToName() {
		const club = await getClub();
		const clubMap = club.map((club) => {
			return {
				id: club.id,
				name: club.name,
				description: club.description
			};
		});
		return clubMap;
	}
	async function getClubName(id: number) {
		const clubMap = await mapIdToName();
		const clubName = clubMap.find((club) => {
			if (club.id === id) {
				return club.name;
			}
		});
		return clubName;
	}
	async function getClubId(name: string) {
		const clubMap = await mapIdToName();
		const clubId = clubMap.find((club) => {
			if (club.name === name) {
				return club.id;
			}
		});
		return clubId;
	}
	async function query(search: string) {
		const club = await getClub();
		const c = club.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		if (search === '') {
			return undefined;
		}
		return c.find((item) => item.name.toLowerCase().includes(search.toLowerCase()));
	}
</script>

<div class="form">
	<form>
		<input
			type="text"
			name="club"
			value={searchClub}
			onInput={(e) => {
				page.subscribe((state) => {
					state.path = `/clubs?club=${searchClub}`;
				});
			}}
			class="search"
		/>
	</form>
</div>

<!-- Search For club by name -->
<div class="club-container">
	{#await query(searchClub) then club}
		<Club key={club.id} />
	{/await}
</div>
{#if searchClub === '' || searchClub === undefined || searchClub === null}
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
{/if}

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
