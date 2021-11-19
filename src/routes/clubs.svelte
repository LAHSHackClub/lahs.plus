<script lang="ts">
	import Club from '../components/Club.svelte';
	import { page } from '$app/stores';
	import { cleanCombinedArray } from '../utils/getClubs';
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
	.form-input {
		@apply bg-gray-200 text-gray-900;
	}
</style>
