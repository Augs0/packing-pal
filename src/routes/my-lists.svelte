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
	<p>You have {lists.length} lists</p>
	<ul>
		{#each lists as list}
			<li>Packing list for <a href={`/lists/${list.destination}`}>{list.destination}</a></li>
		{/each}
	</ul>
</section>

<style>
</style>
