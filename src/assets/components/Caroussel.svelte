<script>
    import { base } from '$app/paths'

    export let sources;
    export let areVideos;

    const mimeTypes = {
        mp4: "video/mp4",
        webm: "video/webm",
        ogg: "video/ogg"
    };

    const getVideoType = (src) => {
        const ext = src.split('.').pop().toLowerCase();
        return mimeTypes[ext] ?? "video/mp4"; // fallback
    };

    let index = 0;

    function next() {
        index = (index + 1) % sources.length;
    }

    function prev () {
        index = (index - 1 + sources.length) % sources.length;
    }
</script>

<div class="caroussel">
    <button on:click={prev}>
        <img src="{base}/img/icons/chevron-left.svg" alt="previous">
    </button>

    <div class="img_block">
        {#if !areVideos}
            <img
                src={sources[index].src}
                alt="{sources[index].alt}"
            >
        {:else}
            {#key sources[index].src}
                <!-- svelte-ignore a11y-media-has-caption -->
                <video controls>
                    <source
                        src="{sources[index].src}"
                        type="{getVideoType(sources[index].src)}"
                    >
                </video>
            {/key}
        {/if}
        <p>{sources[index].alt}</p>
    </div>

    <button on:click={next}>
        <img src="{base}/img/icons/chevron-right.svg" alt="previous">
    </button>
</div>

<style>
    .caroussel {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    .caroussel button {
        border: none;
        border-radius: .5rem;
        background-color: transparent;
        height: 2rem;
        display: flex;
        align-items: center;
    }

    .caroussel img {
        border-radius: 1rem;
    }

    .img_block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img_block > p {
        margin-top: 0.5rem;
        text-align: center;
    }

    .img_block > img,
    .img_block > video {
            width: 100%;
            height: auto;
    }
</style>
