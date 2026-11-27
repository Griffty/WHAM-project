<!--
	Cyprus region page, written by Daniel.

	Replace each [bracketed] placeholder with your own text. Use normal HTML inside each section:
	<p> for paragraphs, <h3> for sub-headings, <ul>/<li> for lists, and MLA in-text citations like (Smith 42).

	Images: put the file in static/images/cyprus/ and add it like this (the credit is required):
		<Figure
			src="/images/cyprus/my-photo.jpg"
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
	import TableauEmbed from '$lib/components/TableauEmbed.svelte';
	import { potteryChartUrl } from '$lib/site';
</script>

<RegionPage region="Pyla-Koutsopetria" author="Daniel" summary="A Late Roman harbor town on Larnaca Bay in southeastern Cyprus that flourished from the 5th to 7th centuries CE before being abandoned.">
	{#snippet history()}
		<p>[I. History under Rome: how and when the region came under Roman rule, and what changed.]</p>
	{/snippet}

	{#snippet geography()}
		<p>[II. Geography and resources: landscape, climate, and the resources that mattered to Rome.]</p>
		<img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/LarnacaDistrictPyla.png/1920px-LarnacaDistrictPyla.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20181229015553" alt="Map of the Larnaca region">
	{/snippet}

	{#snippet sites()}
		<p>
			[III. Major sites and culture: the key sites, plus language, religion, political system, main
			economic base and technological achievements.]
		</p>
	{/snippet}

	{#snippet artifacts()}
		<p>[IV. Artifact types: ceramics, metals, statues, coins, animal bones and so on.]</p>

		<TableauEmbed
			url={potteryChartUrl}
			title="Bar chart of pottery pieces found at Pyla-Koutsopetria, grouped by period"
			height={440}
		/>
	{/snippet}

	{#snippet building()}
		<p>[V. Famous building: a detailed study of one building.]</p>
	{/snippet}

	{#snippet artifact()}
		<p>[VI. Famous artifact: a detailed study of one artifact.]</p>
	{/snippet}

	{#snippet sources()}
		<p><a href="https://opencontext.org/projects/3f6dcd13-a476-488e-ed10-47d25513fcb2">OpenContext</a></p>
		<p><a href="https://www.ancientportsantiques.com/wp-content/uploads/Documents/PLACES/Crete-Cyprus/Koutsopetria-Caraher2008.pdf">Caraher</a></p>
		<p>Caraher, William, et al. “Surveying Late Antique Cyprus.” Near Eastern
			Archaeology, vol. 71, no. 1/2, Mar. 2008, pp. 82-89. EBSCOhost, <a href="https://doi.org/10.1086/NEA20361351">https://doi.org/10.1086/NEA20361351</a>.</p>
	{/snippet}
</RegionPage>
