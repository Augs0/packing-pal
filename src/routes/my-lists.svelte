<script>
	import { onMount } from 'svelte';
	import ListStore from '../stores/ListStore';
	import { fetchLists } from '../firebase/functions/read';

	let lists = [];
	onMount(async () => {
		const userLists = await fetchLists();
		ListStore.subscribe(() => {
			lists = userLists;
		});
	});
</script>

<svelte:head>
	<title>My lists</title>
	<meta name="description" content="User packing lists" />
</svelte:head>

<section>
	<h1>My lists</h1>
	{#each lists as list}
		<h2>Packing list for {list.destination}</h2>
	{/each}
</section>

<style>
</style>
