<script>
	import { onMount, onDestroy } from 'svelte';
	import { fetchLists } from '../../firebase/functions/read';
	import { onSnapshot, doc } from 'firebase/firestore';
	import { updateList } from '../../firebase/functions/write';
	import db from '../../firebase/firebase';

	import { page } from '$app/stores';
	let slug = '';
	page.subscribe((currentPage) => (slug = currentPage.params.destination));

	let currentList = { items: [] };
	let listId = '';

	onMount(async () => {
		const userLists = await fetchLists();
		userLists.forEach((list) => {
			if (list.destination === slug) {
				listId = list.uid;
				currentList = list;
			}
		});
		console.log(currentList, listId);
	});

	const docRef = doc(db, 'lists', 'usCQDM5mHIuEqEI1KmmX');

	onSnapshot(docRef, (doc) => {
		console.log(doc.data(), doc.id);
	});
</script>

<svelte:head>
	<title>List for {slug}</title>
	<meta name="description" content="User packing lists" />
</svelte:head>

<section>
	<h2>{slug}</h2>
	<ul>
		{#each currentList.items as item}
			<li>{item.name}</li>
			<p>{item.packed ? 'Packed' : 'Not packed'}</p>
			<button on:click={updateList(listId, item.itemNumber, item.packed)}
				>{item.packed ? 'Mark as not packed' : 'Mark as packed'}</button
			>
		{/each}
	</ul>
</section>

<style>
</style>
