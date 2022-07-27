<script>
	import { onDestroy } from 'svelte';
	import { onSnapshot, collection } from 'firebase/firestore';
	import db from '../firebase/firebase';

	let lists = [];

	const subscription = onSnapshot(
		collection(db, 'lists'),
		(querySnapshot) => {
			lists = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id
			}));
		},
		(err) => console.log(err)
	);

	onDestroy(subscription);
</script>

<svelte:head>
	<title>My lists</title>
	<meta name="description" content="User packing lists" />
</svelte:head>

<section>
	<h1>My lists</h1>
	<p>You have {lists.length} {lists.length === 1 ? 'list' : 'lists'}</p>
	<ul>
		{#each lists as list}
			<!-- create component to pass? -->
			<li>Packing list for <a href={`/lists/${list.destination}`}>{list.destination}</a></li>
		{/each}
	</ul>
</section>

<style>
</style>
