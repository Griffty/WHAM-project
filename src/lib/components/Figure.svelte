<!--
	An image with a caption and a required credit line.

		<Figure
			src="/images/cyprus/kourion-theatre.jpg"
			alt="The Roman theatre at Kourion, seen from the top rows"
			caption="The theatre at Kourion."
			credit="Photo: Jane Doe, CC BY-SA 4.0, via Wikimedia Commons"
			creditUrl="https://commons.wikimedia.org/…"
		/>

	`src` is either a file in the static/ folder (starting with "/") or a full https:// URL.
-->
<script lang="ts">
	import { asset } from '$app/paths';

	interface Props {
		/** "/images/<region>/<file>.jpg" for files in static/, or a full https:// URL. */
		src: string;
		/** What the image shows, for screen readers. */
		alt: string;
		caption?: string;
		/** Who made it and its license, e.g. "Photo: Jane Doe, CC BY-SA 4.0, via Wikimedia Commons". */
		credit: string;
		/** Link to the image's source page. */
		creditUrl?: string;
	}

	let { src, alt, caption, credit, creditUrl }: Props = $props();

	const url = $derived(/^https?:\/\//.test(src) ? src : asset(src));
</script>

<figure>
	<img src={url} {alt} loading="lazy" />
	<figcaption>
		{#if caption}<span class="caption">{caption}</span>{/if}
		<span class="credit">
			{#if creditUrl}
				<a href={creditUrl} target="_blank" rel="noopener noreferrer">{credit}</a>
			{:else}
				{credit}
			{/if}
		</span>
	</figcaption>
</figure>

<style>
	figure {
		margin: 2rem 0;
	}

	img {
		width: 100%;
		height: auto;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		box-shadow: var(--shadow-sm);
	}

	figcaption {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		margin-top: 0.6rem;
		font-size: 0.95rem;
		line-height: 1.4;
	}

	.caption {
		font-style: italic;
	}

	.credit {
		font-size: 0.85rem;
		color: var(--color-muted);
	}

	.credit a {
		color: inherit;
	}
</style>
