<script>
	import Card from "./Card.svelte";
	export let contentFile;
</script>

<div class="container">
    <div class="card-box">
		{#each contentFile as proj}
			<Card
			title={proj.title}
			description={proj.description}
			icon={proj.icon}
			language={proj.language}
			link={proj.link}>
			</Card>
		{/each}
    </div>
</div>

<style>
	.container {
		width: 1142px;
		margin: 0 auto;
	}

	body {
		background-color: #fafbfe;
	}
	
	.card-box {
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
		.container {
		width: 96vw;
		}
	}
</style>