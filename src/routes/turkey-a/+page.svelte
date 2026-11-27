<!--
	Turkey A region page, written by Aidan.

	Replace each [bracketed] placeholder with your own text. Use normal HTML inside each section:
	<p> for paragraphs, <h3> for sub-headings, <ul>/<li> for lists, and MLA in-text citations like (Smith 42).

	Images: put the file in static/images/turkey-a/ and add it like this (the credit is required):
		<Figure
			src="/images/turkey-a/my-photo.jpg"
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

<RegionPage
	region="Turkey A"
	author="Aidan"
	summary="Ephesus served as the administrative and trade hub for the Roman Empire during the 1st-3rd centuries AD."
	buildingName="Library of Celsus"
>
	{#snippet history()}
		<p>
			Under Roman rule, Ephesus became an administrative center for the Roman Province of Asia. It
			operated as an administrative center being a part of the Roman imperial system while preserving
			the Greek language and ways of life, bringing both cultures together. Because of its massive
			trading economy, Ephesus became very wealthy under Roman rule, enabling trade throughout Europe,
			Asia, and into Africa.
		</p>
	{/snippet}

	{#snippet geography()}
		<p>
			Located in a valley near the Aegean coast, Ephesus had a natural border from the hills and
			mountains while being an epicenter for trade throughout Asia Minor. The climate during the
			different seasons allowed for the cultivation of different crops such as olives, grapes,
			cereals, etc. Timber surrounded the city, making it a valuable resource for building homes
			within the city's walls and also allowing for its trade using the maritime trade routes on the
			Aegean Sea. The fertile ground, coastline access, and important natural resource placement are
			all reasons that Ephesus was able to prosper under the Roman Empire and make the city an
			epicenter for trade, business, and growth.
		</p>
	{/snippet}

	{#snippet sites()}
		<p>The temple of Artemis</p>
		<p>
			[Finish this section: the key sites, plus language, religion, political system, main economic
			base and technological achievements.]
		</p>
	{/snippet}

	{#snippet artifacts()}
		<p>[IV. Artifact types: ceramics, metals, statues, coins, animal bones and so on.]</p>
	{/snippet}

	{#snippet building()}
		<p>
			The Library of Celsus was built in 114-117 CE after Roman Senator Tiberius Julius Celsus
			Polemaeanus. Aside from being his burial place, it also served as a collection of roughly 12000
			scrolls. Due to this large amount of writing being saved, the library was vital in the rise of
			Christianity during this time. In 262 CE, a fire during the Gothic invasion destroyed the
			library, leaving it in ruins to be rebuilt.
		</p>
	{/snippet}

	{#snippet artifact()}
		<p>[VI. Famous artifact: a detailed study of one artifact.]</p>
	{/snippet}

	{#snippet sources()}
		<p>[Works cited, MLA format, one source per paragraph.]</p>
	{/snippet}
</RegionPage>
