<script>
	import Card from "./Card.svelte";
	export let contentFile;
</script>

<div class="ag-format-container">
    <div class="ag-courses_box">
		{#each contentFile as proj}
			<Card
			title={proj.title}
			description={proj.description}
			language={proj.language}
			link={proj.link}>
			</Card>
		{/each}
    </div>
</div>

<style>
	.ag-format-container {
		width: 1142px;
		margin: 0 auto;
	}

	body {
		background-color: #fafbfe;
	}
	
	.ag-courses_box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 1em 0;
	}

	@media only screen and (max-width: 1142px) {
		.ag-format-container {
		width: 96vw;
		}
	}
</style>