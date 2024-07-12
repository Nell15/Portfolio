<script>
    import langs from '$assets/langages/langs.json';
    let path = 'src/assets/langages/';

    let use = "all";
</script>

<main>
    <h1>Skills</h1>
    <p>Here are technologies I am familiar with :</p>

    <div class="big-box">
        <div class="tab-buttons">
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
        </div>
        
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
    </div>
</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .big-box{
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .tab-buttons {
        display: flex;
        justify-content: start;
    }

    .tab-buttons > button {
        height: 3em;
        width: auto;
        padding: 0 2em;
        border: none;
        border-radius: 1.25em 1.25em 0 0;
        background-color: #e9e9ed;
        transition: all 0.2s ease-in-out;
    }
    
    .tab-buttons button:hover {
        background-color: #c8c8cd;
    }

    .lang_container {
        width: 30rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        padding-top: 2rem;
        border: solid;
        border-width: 2px;
        border-color: #e9e9ed;
        border-radius: 0 2em 2em 2em;
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
        transition: all 0.3s ease;
    }

    .img:hover {
        /* height: 4rem; */
        transform: scale(1.2);
    }
</style>