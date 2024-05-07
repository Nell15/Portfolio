<script>
    import langs from '$assets/langages/langs.json'
    let path = 'src/assets/langages/'
</script>


<p>Here are technologies I am familiar with :</p>

<div class='lang_container'>
    {#each langs as l}
        <div class='lang'>
            <img src={`${path}${l.file}`} alt={l.name} class='lang_img'>
            <p style="text-align:center">{l.name}</p>
        </div>
    {/each}
</div>

<style>
    .lang_container {
        width: 30rem;
        height: 30rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
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