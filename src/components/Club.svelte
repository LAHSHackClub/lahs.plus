<script>
	export var key;
	var club = 'hi';
	var club_desc = '';
</script>

<div class="container">
	<div class="inner">
		<div class="club-title">
			<h1>
				Club: {club}
			</h1>
		</div>
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
	}
	.inner {
		z-index: 2;
		@apply bg-lahs-blue;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		border-bottom-left-radius: 12px;
		border-bottom-right-radius: 12px;
		padding: 16px 24px 24px 24px;
	}

	.club-title {
		font-size: 1.5em;
		font-weight: bold;
		margin-bottom: 0;
	}
	.club-desc {
		font-size: 1em;
		margin-top: 0;
		word-wrap: break-word;
	}
</style>
