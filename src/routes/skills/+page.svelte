<script>
    import langs from '$assets/langages/langs.json';
    let path = 'src/assets/langages/';

    let use = "all";
    function chg_back(str) {
		use = str;
    }
</script>


<p>Here are technologies I am familiar with :</p>

<button on:click={() => {
    use = "all"
    }}>
	All
</button>
<button on:click={() => {
    use = "back"
    }}>
	Back
</button>
<button on:click={() => {
    use = "web"
    }}>
	Web
</button>


<div class='lang_container'>
    {#each langs as l}
        {#if l.use.includes(use)}
            <div class='lang'>
                <img src={`${path}${l.file}`} alt={l.name} class='lang_img'>
                <p style="text-align:center">{l.name}</p>
                <p></p>
            </div>
        {/if}
    {/each}
</div>

<style>
    .lang_container {
        width: 30rem;
        height: 30rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-top: 2rem;
    }

    .lang {
        display: flex;
        flex-direction: column;
    }

    .lang_img {
        height: 4rem;
        width: 4rem;
        object-fit: contain;
    }
</style>