<header class="header">
	<h1 class="paper">Packing Pal</h1>
</header>
<nav class="nav">
	<a class="nav-link" href="/">Home</a>

	<a class="nav-link" href="/my-lists">View your lists</a>

	<a class="nav-link" href="/my-trips">See trips</a>
</nav>
<main class="container__main"><slot /></main>
<footer class="footer">
	<img class="logo" src="travel-luggage.png" alt="a rucksack next to a suitcase" />
	<a class="attribution" href="https://www.flaticon.com/free-icons/travel" title="travel icons"
		>Logo icon created by Freepik - Flaticon</a
	>
</footer>

<style>
	@import '../app.css';
	.nav-link {
		background-color: black;
		color: ghostwhite;
		margin: 0 0.5rem;
		transform: rotate(-5deg);
		padding: 1rem;
	}

	.nav-link:hover {
		transform: scale(1.2);
	}

	.nav {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	.paper {
		background: #fff;
		padding: 30px;
		position: relative;
		max-width: 50%;
		margin: 2rem auto;
	}

	.paper,
	.paper::before,
	.paper::after {
		/* Styles to distinguish sheets from one another */
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
		border: 2px solid #bbb;
	}

	.paper::before,
	.paper::after {
		content: '';
		position: absolute;
		height: 95%;
		width: 99%;
		background-color: #eee;
	}

	.paper::before {
		right: 15px;
		top: 0;
		transform: rotate(-5deg);
		z-index: -1;
	}

	.paper::after {
		top: 5px;
		right: -5px;
		transform: rotate(1deg);
		z-index: -2;
	}
	.footer {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		margin: 1rem;
	}
	.attribution {
		font-size: 0.5rem;
		color: var(--heading-color);
	}
	.logo {
		max-width: 100px;
	}
</style>
