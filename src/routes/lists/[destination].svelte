<script>
	import { onMount } from 'svelte';
	import ListStore from '../../stores/ListStore';
	import { fetchLists } from '../../firebase/functions/read';
	import { page } from '$app/stores';
	let slug = '';
	page.subscribe((currentPage) => (slug = currentPage.params.destination));

	let lists = [];
	onMount(async () => {
		const userLists = await fetchLists();
		ListStore.subscribe(() => {
			lists = userLists;
		});
	});
</script>

<svelte:head>
	<title>Destination page</title>
	<meta name="description" content="User packing lists" />
</svelte:head>

<section>
	<h2>{slug}</h2>
	<ul>
		{#each lists as list}
			{#if list.destination === slug && list.items.length > 1}
				{#each list.items as item}
					<li>{item}</li>
				{/each}
			{/if}
		{:else}
			<p>No items on this list</p>
		{/each}
	</ul>
</section>

<style>
</style>
