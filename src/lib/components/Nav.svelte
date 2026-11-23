<script lang="ts">
	import { page } from '$app/state';
	import { pageUrl } from '$lib/links';
	import type { RouteId } from '$app/types';

	// Add new pages here to show them in the nav bar.
	const links: { route: RouteId; label: string }[] = [
		{ route: '/', label: 'Home' },
		{ route: '/cyprus', label: 'Cyprus' }
	];

	let open = $state(false);

	const isActive = (route: RouteId) => page.route.id === route;

	// Close the mobile menu whenever the route changes.
	$effect(() => {
		page.url.pathname;
		open = false;
	});
</script>

<header class="nav">
	<div class="container nav-inner">
		<a class="brand" href={pageUrl('/')}>
			<svg class="amphora" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M9 2.5h6M10 2.5V6M14 2.5V6M10 4C7 4 6.5 6 7 8.5M14 4c3 0 3.5 2 3 4.5M10 6C6 7.5 5 10 5 12.5 5 16 8.5 19 12 21c3.5-2 7-5 7-8.5 0-2.5-1-5-5-6.5M12 21v1.5"
				/>
			</svg>
			Archaeology of Rome's Eastern Empire
		</a>

		<button
			class="toggle"
			aria-expanded={open}
			aria-controls="nav-links"
			onclick={() => (open = !open)}
		>
			<span class="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>

		<nav id="nav-links" class:open aria-label="Main">
			<ul>
				{#each links as link (link.route)}
					<li>
						<a
							href={pageUrl(link.route)}
							class:active={isActive(link.route)}
							aria-current={isActive(link.route) ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-soil);
		background-image: var(--texture-paper);
		color: var(--color-on-soil);
		box-shadow: var(--shadow-md);
	}

	/* Greek key band along the bottom edge */
	.nav::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -12px;
		height: 12px;
		background: var(--color-soil) var(--pattern-meander) repeat-x;
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--nav-height);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-display);
		font-size: 1.4rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		color: var(--color-on-soil);
		text-decoration: none;
	}

	.brand:hover {
		color: var(--color-accent);
	}

	.amphora {
		width: 28px;
		height: 28px;
		fill: none;
		stroke: var(--color-accent);
		stroke-width: 1.4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	ul {
		display: flex;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		position: relative;
		display: block;
		padding: 0.5rem 0.9rem;
		font-family: var(--font-display);
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--color-on-soil) 75%, transparent);
		text-decoration: none;
		transition: color 0.15s ease;
	}

	/* Ochre underline that grows on hover / marks the active page */
	nav a::after {
		content: '';
		position: absolute;
		left: 0.9rem;
		right: 0.9rem;
		bottom: 0.2rem;
		height: 2px;
		background: var(--color-accent);
		transform: scaleX(0);
		transition: transform 0.2s ease;
	}

	nav a:hover {
		color: var(--color-on-soil);
	}

	nav a:hover::after,
	nav a.active::after {
		transform: scaleX(1);
	}

	nav a.active {
		color: var(--color-accent);
		font-weight: 700;
	}

	/* Hamburger button (mobile only) */
	.toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 40px;
		height: 40px;
		padding: 8px;
		border: none;
		border-radius: var(--radius);
		background: transparent;
		cursor: pointer;
	}

	.toggle:hover {
		background: rgb(255 255 255 / 0.08);
	}

	.bar {
		display: block;
		height: 2px;
		width: 100%;
		background: var(--color-on-soil);
		border-radius: 2px;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
	}

	.toggle[aria-expanded='true'] .bar:nth-child(2) {
		transform: translateY(7px) rotate(45deg);
	}
	.toggle[aria-expanded='true'] .bar:nth-child(3) {
		opacity: 0;
	}
	.toggle[aria-expanded='true'] .bar:nth-child(4) {
		transform: translateY(-7px) rotate(-45deg);
	}

	@media (max-width: 720px) {
		.toggle {
			display: flex;
		}

		nav {
			display: none;
			position: absolute;
			z-index: 1;
			top: var(--nav-height);
			left: 0;
			right: 0;
			background: var(--color-soil);
			background-image: var(--texture-paper);
			border-top: 1px solid rgb(255 255 255 / 0.08);
			box-shadow: var(--shadow-md);
		}

		nav.open {
			display: block;
		}

		ul {
			flex-direction: column;
			gap: 0;
			padding: 0.5rem 1.25rem 1.5rem;
		}

		nav a::after {
			left: 0.9rem;
			right: auto;
			width: 2rem;
		}
	}
</style>
