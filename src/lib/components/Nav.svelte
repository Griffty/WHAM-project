<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	// Add new pages here to show them in the nav bar.
	const links = [
		{ href: resolve('/'), label: 'Home' },
		{ href: resolve('/cyprus'), label: 'Cyprus' }
	];

	let open = $state(false);

	const isActive = (href: string) =>
		page.url.pathname === href || page.url.pathname === `${href}.html`;

	// Close the mobile menu whenever the route changes.
	$effect(() => {
		page.url.pathname;
		open = false;
	});
</script>

<header class="nav">
	<div class="container nav-inner">
		<a class="brand" href={resolve('/')}>WHAM</a>

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
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							class:active={isActive(link.href)}
							aria-current={isActive(link.href) ? 'page' : undefined}
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
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--nav-height);
	}

	.brand {
		font-size: 1.25rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		color: var(--color-text);
		text-decoration: none;
	}

	ul {
		display: flex;
		gap: 0.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	nav a {
		display: block;
		padding: 0.5rem 0.9rem;
		border-radius: var(--radius);
		color: var(--color-muted);
		font-weight: 500;
		text-decoration: none;
		transition:
			background 0.15s ease,
			color 0.15s ease;
	}

	nav a:hover {
		background: var(--color-primary-soft);
		color: var(--color-text);
	}

	nav a.active {
		background: var(--color-primary-soft);
		color: var(--color-primary);
		font-weight: 600;
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
		background: var(--color-primary-soft);
	}

	.bar {
		display: block;
		height: 2px;
		width: 100%;
		background: var(--color-text);
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
			top: var(--nav-height);
			left: 0;
			right: 0;
			background: var(--color-surface);
			border-bottom: 1px solid var(--color-border);
			box-shadow: var(--shadow-md);
		}

		nav.open {
			display: block;
		}

		ul {
			flex-direction: column;
			padding: 0.5rem 1.25rem 1rem;
		}
	}
</style>
