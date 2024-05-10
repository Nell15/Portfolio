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
    use = "soft"
    }}>
	Software Development
</button>
<button on:click={() => {
    use = "web"
    }}>
	Web Development
</button>


<div class='lang_container'>
    {#each langs as l}
        {#if l.use.includes(use)}
            <div class='lang'>
                <div class='img'>
                    <img src={`${path}${l.file}`} alt={l.name} class='lang_img'>
                </div>
                <p style="text-align:center">{l.name}</p>
            </div>
        {/if}
    {/each}
</div>

<style>
    .lang_container {
        width: 30rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        padding-top: 2rem;
    }

    .lang {
        height: 8rem;
        display: flex;
        flex-direction: column;
        padding: 0px 1em
    }

    .lang_img {
        height: 4rem;
        width: 4rem;
        object-fit: contain;
    }
    .img {
        height: 4rem;
    }
</style>