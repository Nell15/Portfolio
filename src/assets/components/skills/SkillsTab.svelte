<script>
    import ClickableIcon from './ClickableIcon.svelte';

    let { category, langs, path } = $props();
</script>

<div class="big-box">
    <div class="tab-title">
        <h2>{category}</h2>
    </div>
    <div class="tab">
        <div class='lang_container'>
            {#each langs as l}
                {#if l.use.includes(category)}
                    <ClickableIcon filePath={path+l.file} link={l.link} name={l.name}></ClickableIcon>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
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
            margin: 1rem 0 0rem 0;
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
        padding: 1rem;
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
    }

</style>