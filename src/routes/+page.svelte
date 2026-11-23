<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import { pageUrl } from '$lib/links';
</script>

<Meta />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<a href={pageUrl('/cyprus')}>Cyprus</a>
