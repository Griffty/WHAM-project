<!--
	Shared layout for every region page (Cyprus, Black Sea, Turkey A, Turkey B).

	It always shows the same six sections, in the same order, with the same headings.
	A region page passes in its text as "snippets" — one per section:

		<RegionPage region="Cyprus" author="Daniel">
			{#snippet history()}
				<p>Your text here…</p>
			{/snippet}
			…
		</RegionPage>

	A section with no snippet yet shows a "draft coming soon" note, so pages build while drafts are in progress.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Meta from '$lib/components/Meta.svelte';

	interface Props {
		/** Region name, shown as the page title, e.g. "Cyprus". */
		region: string;
		/** Who wrote this page (shown under the title). */
		author: string;
		/** One-sentence summary shown under the title (also used for search results and link previews). */
		summary?: string;
		/** Name of the famous building, added to section V's heading. */
		buildingName?: string;
		/** Name of the famous artifact, added to section VI's heading. */
		artifactName?: string;

		history?: Snippet;
		geography?: Snippet;
		sites?: Snippet;
		artifacts?: Snippet;
		building?: Snippet;
		artifact?: Snippet;
		/** MLA works cited for this page. */
		sources?: Snippet;
	}

	let {
		region,
		author,
		summary,
		buildingName,
		artifactName,
		history,
		geography,
		sites,
		artifacts,
		building,
		artifact,
		sources
	}: Props = $props();

	const sections = $derived([
		{ id: 'history', numeral: 'I', title: 'History under Rome', content: history },
		{ id: 'geography', numeral: 'II', title: 'Geography and resources', content: geography },
		{ id: 'sites', numeral: 'III', title: 'Major sites and culture', content: sites },
		{ id: 'artifact-types', numeral: 'IV', title: 'Artifact types', content: artifacts },
		{
			id: 'famous-building',
			numeral: 'V',
			title: buildingName ? `Famous building: ${buildingName}` : 'Famous building',
			content: building
		},
		{
			id: 'famous-artifact',
			numeral: 'VI',
			title: artifactName ? `Famous artifact: ${artifactName}` : 'Famous artifact',
			content: artifact
		},
		{
			id: 'sources',
			numeral: 'VII',
			title: "Works Cited",
			content: sources
		}

	]);
</script>

<Meta title={region} description={summary} />

<article class="region">
	<header class="region-header">
		<p class="eyebrow">Region</p>
		<h1>{region}</h1>
		{#if summary}
			<p class="summary">{summary}</p>
		{/if}
		<p class="byline">By {author}</p>
	</header>

	<div class="region-body">
		<nav class="toc" aria-label="On this page">
			<p class="toc-title">On this page</p>
			<ol>
				{#each sections as section (section.id)}
					<li>
						<a href="#{section.id}">
							<span class="numeral">{section.numeral}</span>
							{section.title}
						</a>
					</li>
				{/each}
				<!-- {#if sources}
					<li><a href="#works-cited"><span class="numeral">VII</span> Works cited</a></li>
				{/if} -->
			</ol>
		</nav>

		<div class="sections">
			{#each sections as section (section.id)}
				<section id={section.id}>
					<h2><span class="numeral">{section.numeral}.</span> {section.title}</h2>
					{#if section.content}
						{@render section.content()}
					{:else}
						<p class="draft-note">Draft coming soon.</p>
					{/if}
				</section>
			{/each}
		</div>
	</div>
</article>

<style>
	.region-header {
		margin-bottom: 2.5rem;
	}

	.eyebrow {
		margin: 0 0 0.25rem;
		font-family: var(--font-display);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.summary {
		max-width: 60ch;
		font-size: 1.25rem;
		font-style: italic;
		color: var(--color-muted);
	}

	.byline {
		margin: 0;
		font-size: 0.95rem;
		color: var(--color-muted);
	}

	.region-body {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	/* Table of contents: a card on small screens, a sticky sidebar on wide ones */
	.toc {
		align-self: start;
		padding: 1.1rem 1.25rem;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
	}

	.toc-title {
		margin: 0 0 0.5rem;
		font-family: var(--font-display);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-muted);
	}

	.toc ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.toc a {
		display: flex;
		gap: 0.6rem;
		padding: 0.2rem 0;
		font-size: 1rem;
		line-height: 1.35;
		color: var(--color-text);
		text-decoration: none;
	}

	.toc a:hover {
		color: var(--color-primary);
	}

	.toc .numeral {
		flex: 0 0 1.8rem;
		font-family: var(--font-display);
		font-size: 0.85rem;
		color: var(--color-accent);
	}

	.sections {
		min-width: 0;
		max-width: 70ch;
	}

	section {
		/* Leave room for the sticky nav bar when jumping to a section */
		scroll-margin-top: calc(var(--nav-height) + 1.5rem);
	}

	section + section {
		position: relative;
		margin-top: 2.5rem;
		padding-top: 2.5rem;
	}

	/* Faint Greek key divider between sections */
	section + section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 12px;
		background: var(--pattern-meander) repeat-x;
		opacity: 0.45;
	}

	h2 .numeral {
		color: var(--color-accent);
	}

	.draft-note {
		padding: 0.75rem 1rem;
		border: 1px dashed var(--color-border);
		border-radius: var(--radius);
		font-style: italic;
		color: var(--color-muted);
	}

	@media (min-width: 960px) {
		.region-body {
			grid-template-columns: 220px 1fr;
			gap: 3rem;
		}

		.toc {
			position: sticky;
			top: calc(var(--nav-height) + 1.5rem);
		}
	}
</style>
