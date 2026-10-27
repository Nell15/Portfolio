<script>
    import { base } from '$app/paths'
    import lang_file from '$assets/components/langs.json';
    let path = '/langages/';

    let categories = lang_file.categories;
    let langs = lang_file.langages;
</script>

<main>
    <h1>Skills</h1>
    {#each categories as category}

    <!-- TODO: create a component for this -->
        <div class="big-box">
            <div class="tab-title">
                <h2>{category}</h2>
            </div>
            <div class="tab">
                <div class='lang_container'>
                    {#each langs as l}
                        {#if l.use.includes(category)}
                            <div class='lang'>
                                <a href={l.link} target="_blank">
                                    <div class='img'>
                                        <img src="{base}{`${path}${l.file}`}" alt={l.name} class='lang_img'>
                                    </div>
                                </a>
                                <p style="text-align:center">{l.name}</p>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>

    {/each}

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: #fafbfe;
        gap: 2rem;
        margin-bottom: 5rem;
    }

    .big-box{
        display: flex;
        flex-direction: column;
        justify-content: start;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.6));
    }

    .tab-title {
        background-color: #fafbfe;
        display: flex;
        width: max-content;
        padding: 0 2rem;
        border-radius: 1rem 1rem 0 0;

        & h2 {
            margin: 1rem 0;
        }
    }

    .tab {
        background-color: #fafbfe;
        border-radius: 0 2em 2em 2em;
        display: flex;
        justify-content: center;
    }

    .lang_container {
        width: 50rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        padding: 2rem 2rem 0 2rem;
        margin-bottom: 1.5rem;
    }

    .lang {
        height: 8rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0px 1em;
        align-items: center;
    }

    .lang_img {
        height: 4rem;
        width: 4rem;
        object-fit: contain;
    }

    .img {
        height: 4rem;
        width: 4rem;
        transition: all 0.3s ease;
    }

    .img:hover {
        transform: scale(1.2);
    }

    .lang > p {
        width: 5rem;
        margin-top: 1em;
        margin-bottom: 0;
    }

    @media screen and (max-width: 55rem) {

        .big-box {
            filter: none;
        }

        .tab {
            display: none;
        }

        .lang_container{
            width: auto;
            gap: 1em;
            justify-content: space-evenly;
        }

        .lang {
            padding: 0;
        }
    }
</style>
