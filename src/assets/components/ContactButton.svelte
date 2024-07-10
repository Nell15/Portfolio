<script>
    export let icon;
    export let text;
    export let link;
    let textToCopy = 'nelltruong67@gmail.com';
</script>

{#if (link != "email")}
    <a href={link} target="_blank">
        <button>
            {#if (icon != "none")}
                <img src={icon} class="logo"/>
            {/if}
            {text}
        </button>
    </a>
{:else}
    <a href="mailto: nelltruong67@gmail.com">
        <button>
            {#if (icon != "none")}
                <img src={icon} class="logo"/>
            {/if}
            {text}
        </button>
    </a>
{/if}


<style>
    button {
        height: 4em;
        width: auto;
        padding: 0 1em;
        background-color: #fafbfe;
        font-size: 1.25em;
        border-radius: 1em;
        border: none;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
    }

    .logo {
        height: 1.75em;
        aspect-ratio: 1;
        object-fit: contain;
    }

    a {
        transition: transform 0.4s ease; /* Smooth transition for transform */
    }

    a:hover {
        transform: translateY(-10px);
    }

</style>