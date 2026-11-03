<script>
    import { base } from '$app/paths'

    export let filePath;
    export let link;
    export let name;
</script>

<div class='lang'>
    <a href={link} target="_blank">
        <div class='img'>
            <img src="{base}{filePath}" alt={name} class='lang_img'>
        </div>
    </a>
    <p style="text-align:center">{name}</p>
</div>

<style>
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
        .lang {
            padding: 0;
        }
    }
</style>
