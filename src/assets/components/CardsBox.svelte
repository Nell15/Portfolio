<script>
	import Card from "./Card.svelte";
</script>

<div class="ag-format-container">
    <div class="ag-courses_box">
		<Card></Card>
		<Card></Card>
		<Card></Card>
		<Card></Card>
		<Card></Card>
		<Card></Card>
		<Card></Card>
		<Card></Card>
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

		padding: 50px 0;
	}

	@media only screen and (max-width: 767px) {
		.ag-format-container {
		width: 96%;
		}
	}
</style>