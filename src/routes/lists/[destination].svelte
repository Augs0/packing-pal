<script>
	import { page } from '$app/stores';
	let slug = '';
	page.subscribe((currentPage) => (slug = currentPage.params.destination));
</script>

<svelte:head>
	<title>Destination page</title>
	<meta name="description" content="User packing lists" />
</svelte:head>

<section>
	<h2>{slug}</h2>
</section>

<style>
</style>
