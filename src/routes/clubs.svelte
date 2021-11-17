<script>
	import Club from '../components/Club.svelte';
	import { getClubName } from '../utils/getClubs';
</script>

<div>List of Clubs</div>

<section class="club-section">
	<Club key={10} />
	<Club key={0} />
</section>

<style>
	.club-section {
		display: grid;
		grid-template-rows: min-content;
	}
</style>
