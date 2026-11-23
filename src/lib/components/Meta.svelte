<script lang="ts">
	import { page } from '$app/state';
	import { basePath, siteDescription, siteName, siteUrl } from '$lib/site';

	interface Props {
		/** Page name, shown as "{title} · Archaeology of Rome's Eastern Empire". Leave out on the home page. */
		title?: string;
		/** One or two sentences for search results and link previews. */
		description?: string;
	}

	let { title, description = siteDescription }: Props = $props();

	// Page name first, so it stays readable when browser tabs are narrow.
	const fullTitle = $derived(title ? `${title} · ${siteName}` : siteName);

	// The public address of this page, in its hosted form: .../eastmedfall2026/ for the home page,
	// .../eastmedfall2026/<page>.html for the rest.
	const url = $derived.by(() => {
		const route = page.route.id;
		const path = !route || route === '/' ? '/' : `${route}.html`;
		return `${siteUrl}${basePath}${path}`;
	});
</script>

<!-- Tab title, description, and link-preview (Open Graph / Twitter) tags. Use once on every page. -->
<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>
