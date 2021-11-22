<script lang="ts" context="module">
	import Club from '../components/Club.svelte';
	import { page } from '$app/stores';
	import { fetchClubs } from '../utils/clubStore';

	export async function load() {
		const clubs = await fetchClubs();

		return {
			props: {
				clubs: clubs
			}
		};
	}
</script>

<script lang="ts">
	var searchClub = $page.query.get('club');
	async function query(search: string) {
		const clubs = await load();
		clubs.props.clubs.forEach((club) => {
			if (club.name.toLowerCase().includes(search.toLowerCase())) {
				return club.id;
			}
		});
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
{#if searchClub === '' || searchClub !== undefined || searchClub !== null}
	<div class="club-container">
		{#await query(searchClub) then club}
			<Club key={club} />
		{/await}
	</div>{/if}

{#if searchClub === '' || searchClub === undefined || searchClub === null}
	<section class="club-section">
		<div class="club-container">
			{#await load() then promise}
				{#each promise.props.clubs as club}
					<Club key={club.id} />
				{/each}
				<!-- promise was fulfilled -->
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
