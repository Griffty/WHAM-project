<!--
	Turkey B region page, written by Josh.

	Replace each [bracketed] placeholder with your own text. Use normal HTML inside each section:
	<p> for paragraphs, <h3> for sub-headings, <ul>/<li> for lists, and MLA in-text citations like (Smith 42).

	Images: put the file in static/images/turkey-b/ and add it like this (the credit is required):
		<Figure
			src="/images/turkey-b/my-photo.jpg"
			alt="What the image shows"
			caption="Short caption."
			credit="Photo: Name, CC BY-SA 4.0, via Wikimedia Commons"
			creditUrl="https://link-to-the-source-page"
		/>

	Once you've picked your famous building and artifact, add their names, e.g.
	buildingName="Library of Celsus" — they appear in the section V and VI headings.
-->
<script lang="ts">
	import RegionPage from '$lib/components/RegionPage.svelte';
	import Figure from '$lib/components/Figure.svelte';
</script>

<RegionPage region="Turkey B" author="Josh" summary="[One sentence that sums up this region.]">
	{#snippet history()}
		<p>[I. History under Rome: how and when the region came under Roman rule, and what changed.]</p>
	{/snippet}

	{#snippet geography()}
		<p>[II. Geography and resources: landscape, climate, and the resources that mattered to Rome.]</p>
	{/snippet}

	{#snippet sites()}
		<p>
			[III. Major sites and culture: the key sites, plus language, religion, political system, main
			economic base and technological achievements.]
		</p>
	{/snippet}

	{#snippet artifacts()}
		<p>[IV. Artifact types: ceramics, metals, statues, coins, animal bones and so on.]</p>
	{/snippet}

	{#snippet building()}
		<p>[V. Famous building: a detailed study of one building.]</p>
	{/snippet}

	{#snippet artifact()}
		<p>[VI. Famous artifact: a detailed study of one artifact.]</p>
	{/snippet}

	{#snippet sources()}
		<p>[Works cited, MLA format, one source per paragraph.]</p>
	{/snippet}
</RegionPage>
