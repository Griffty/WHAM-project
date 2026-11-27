<!--
	Shows a published Tableau Public view inside the page.

		<TableauEmbed
			url="https://public.tableau.com/app/profile/<you>/viz/<Workbook>/<Sheet>"
			title="Bar chart of pottery finds at Pyla-Koutsopetria by period"
		/>

	`url` can be the link from Tableau Public's address bar or its Share button
	(…/app/profile/<you>/viz/<Workbook>/<Sheet>) or a …/views/<Workbook>/<Sheet> link.
-->
<script lang="ts">
	interface Props {
		/** Link to the published view on Tableau Public. */
		url: string;
		/** What the chart shows, for screen readers. */
		title: string;
		/** Height of the chart area in pixels. */
		height?: number;
	}

	let { url, title, height = 520 }: Props = $props();

	// Turn any Tableau Public link into the embeddable /views/<Workbook>/<Sheet> form.
	const view = $derived.by(() => {
		const match = url.match(/\/(?:viz|views)\/([^/?#]+)\/([^/?#]+)/);
		return match ? `https://public.tableau.com/views/${match[1]}/${match[2]}` : null;
	});

	const embedUrl = $derived(
		view ? `${view}?:showVizHome=no&:embed=true&:toolbar=bottom&:tabs=no` : null
	);
</script>

{#if embedUrl && view}
	<figure class="tableau">
		<iframe src={embedUrl} {title} style:height="{height}px" loading="lazy" allowfullscreen></iframe>
	</figure>
{:else if !url}
	<p class="embed-error">Chart coming soon.</p>
{:else}
	<p class="embed-error">This Tableau link doesn't look right: {url}</p>
{/if}

<style>
	.tableau {
		margin: 2rem 0;
	}

	iframe {
		display: block;
		width: 100%;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		background: #fff;
		box-shadow: var(--shadow-sm);
	}

	figcaption {
		margin-top: 0.5rem;
		font-size: 0.9rem;
	}

	.embed-error {
		padding: 0.75rem 1rem;
		border: 1px dashed var(--color-primary);
		border-radius: var(--radius);
		color: var(--color-primary);
	}
</style>
