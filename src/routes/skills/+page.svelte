<script>
    import { base } from '$app/paths'
    import langs from '$assets/components/langs.json';
    let path = '/langages/';

    let use = "all";
</script>

<main>
    <h1>Skills</h1>
    <p class="text">Here are technologies I am either familiar with or learning :</p>

    <div class="big-box">
        <div class="tab-buttons">
            <button on:click={() => {
                use = "all"
            }} class:open={use === "all"}>
                All
            </button>
            <button on:click={() => {
                use = "soft"
            }} class:open={use === "soft"}>
                Software Development
            </button>
            <button on:click={() => {
                use = "web"
            }} class:open={use === "web"}>
                Web Development
            </button>
            <button on:click={() => {
                use = "game"
            }} class:open={use === "game"}>
                Game Development
            </button>
            <button on:click={() => {
                use = "ia"
            }} class:open={use === "ia"}>
                Machine Learning
            </button>
            <button on:click={() => {
                use = "software"
            }} class:open={use === "software"}>
                Softwares
            </button>
        </div>
        <div class="tab">
            <div class='lang_container'>
                {#each langs as l}
                    {#if l.use.includes(use)}
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
        <div class="phone-tab">
            <div class='lang_container'>
                {#each langs as l}
                    {#if l.use.includes("all")}
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
</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: #fafbfe;
    }

    .text {
        margin-bottom: 2em;
    }

    .big-box{
        display: flex;
        flex-direction: column;
        justify-content: start;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.6));
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
        cursor: pointer;
    }
    
    .tab-buttons button:hover {
        background-color: #c8c8cd;
        cursor: pointer;
    }
    
    .tab-buttons button.open {
        transition: all 0.2s ease-in-out;
        background-color: #fafbfe;
        cursor: default;
    }

    .tab {
        background-color: #fafbfe;
        border-radius: 0 0 2em 2em;
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

    .phone-tab {
        display: none;
    }

    @media screen and (max-width: 55rem) {

        .text {
            text-align: center;
            margin: 0 1em;
        }

        .big-box {
            filter: none;
        }

        .tab-buttons {
            display: none;
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

        .phone-tab {
            display:flex;
            margin-bottom: 10em;
            align-items: center;
        }   
    }
</style>