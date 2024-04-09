<script>
    // TODO: faire de ça un composant
    import python from '$assets/langages/Python.png'
    import java from '$assets/langages/Java.png'
    import hmtl from '$assets/langages/hmtl.png'
    import css from '$assets/langages/css.png'

    const lang = [
        {name:'Java', file: java},
        {name: 'Python', file: python},
        {name: 'HTML', file: hmtl},
        {name: 'CSS', file: css}
    ];
</script>

<p>Here are technologies I am familiar with :</p>

<div class='lang_container'>
    {#each lang as l}
        <div class='lang'>
            <img src={l.file} alt={l.name} class='lang_img'>
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