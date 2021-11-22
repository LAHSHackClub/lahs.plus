<script lang="ts" context="module">
	import { getContext } from 'svelte';
	import { fetchClub } from '../utils/clubStore';
</script>

<script lang="ts">
	export let key;
	const club = load().then((data) => {
		key = data.props.club.id;
		return data.props.club;
	});
</script>
