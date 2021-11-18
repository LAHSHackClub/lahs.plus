<script>
	export var key;
	var club_name = '';
	var club_desc = 'loading....';
	import { getClubDescription, getClubName, cleanCombinedArray } from '../utils/getClubs';

	getClubName().then(function (data) {
		club_name = data[key];
		return club_name;
	});
	getClubDescription().then(function (data) {
		club_desc = data[key];
		return club_desc;
	});
</script>

<div class="container" id="clubs">
	<div class="inner">
		<h1 class="club-title">
			{club_name}
		</h1>
		<h3 class="club-desc">
			{club_desc}
		</h3>
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
