<script>
    import { base } from '$app/paths'

    export let img_path;
    export let text;
    export let link;
</script>

<a href="{link}" target="_blank" class='container'>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
        src="{base}/img/{img_path}"
        alt="{text}"
        class="pic"
    />
    <div class="text_holder">
        <div class="text_div">
            {text}
        </div>
    </div>
</a>

<style>
    .container {
        position: relative;
        display: flex;
        justify-content: center;
        width: 27%;
        height: auto;
    }

    .pic {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
    }

    .text_holder {
        position: absolute;
        z-index: 2;
        color: white;
        opacity: 0;        
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        transition: all 0.25s ease-in-out;
    }

    .text_holder:hover {
        backdrop-filter: blur(6px) brightness(85%);
        opacity: 1;
    }

    .text_div {
        padding-left: 1.5em;
        padding-right: 1.5em;
        padding-top: 1em;
    }

    @media screen and (max-width: 800px) {
        
        .container {
            width: 95%;
        }

        .pic {
            width: 100%;
        }
    }

</style>