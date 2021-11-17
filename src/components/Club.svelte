<script>
	export var key;
	var club_name = 'hi';
	var club_desc = 'This is a descirption';
	import { getClubDescription, getClubName } from '../utils/getClubs';
	getClubName().then(function (data) {
		// Map the data to the club_name variable using key to check
		club_name = data[key];
		console.log(club_name);
		return club_name;
	});
	getClubDescription().then(function (data) {
		club_desc = data[key];
		console.log(club_desc);
		return club_desc;
	});
	console.log(club_name);
</script>

<div class="container">
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
