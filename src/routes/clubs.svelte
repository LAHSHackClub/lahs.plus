<script>
	import Club from '../components/Club.svelte';
</script>

<div>List of Clubs</div>

<section class="club-section">
	<Club key={1} />
</section>

<style>
	.club-section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		margin: 0 auto;
		width: 100%;
		max-width: 1200px;
	}
</style>
