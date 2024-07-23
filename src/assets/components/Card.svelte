<script>
    import { base } from '$app/paths'

    export let title;
    export let icon;
    export let description;
    export let language;
    export let link;
    let target;

    if (link === "none") {
        target = "_self";
        link = "#projects";
    }
    else {
        target = "_blank"
    }
</script>


<div class="card-item">
    <a href={link} class="card-link" target={target}>
        <div class="card-bg"></div>
            <span class="icon">
                {#if icon != "none"}
                    <img src="{base}/img/{icon}"/>
                {:else}
                    <img src="https://cdn.worldvectorlogo.com/logos/svg-2.svg"/>
                {/if}
                </span>

        <div class="card-title">
            {title}
        </div>

        <div class="card-details">
            <span class="card-description">
                {#if description != "none"}
                    {description}
                {/if}
            </span>
            {#if language != "none"}
                <span class="lang">{language}</span>
            {/if}
        </div>
    </a>
</div>


<style>

.card-item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    flex-basis: calc(33.33333% - 30px);
    margin: 0 15px 30px;
    overflow: hidden;
    border-radius: 28px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
}
.card-link {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    display: block;
    padding: 30px 20px;
    background-color: #fafbfe;

    overflow: hidden;

    position: relative;
}
.card-link:hover,
.card-link:hover .card-title,
.card-link:hover .card-description,
.card-link:hover .lang {
    text-decoration: none;
    color: #FFF;
}
.card-link:hover .card-bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
}
.card-title {
    margin: 0.2em 0 0.5em;

    overflow: hidden;

    font-weight: bold;
    font-size: 30px;
    color: #020409;

    z-index: 2;
    position: relative;
    -webkit-transition: color .5s ease;
    -o-transition: color .5s ease;
    transition: color .5s ease;
}
.card-details {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #FFF;
    z-index: 2;
    position: relative;
}
.card-description {
    color: #020409;
    -webkit-transition: color .5s ease;
    -o-transition: color .5s ease;
    transition: color .5s ease;
}
.lang {
    font-weight: bold;
    color: #020409;
    padding-top: 0.5em;
    -webkit-transition: color .5s ease;
    -o-transition: color .5s ease;
    transition: color .5s ease;
}
.card-bg {
    height: 128px;
    width: 128px;
    background-color: #c5b3fb;

    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;

    border-radius: 50%;

    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
}
.card-item:nth-child(2n) .card-bg {
    background-color: #8A2BE2;
}
.card-item:nth-child(3n) .card-bg {
    background-color: #2ea4ff;
}
.card-item:nth-child(4n) .card-bg {
    background-color: #952aff;
}
.card-item:nth-child(5n) .card-bg {
    background-color: #29caff;
}
.card-item:nth-child(6n) .card-bg {
    background-color: #5500dd;
}

@media screen and (min-width: 1142px) {
    .card-item {
        aspect-ratio: 1.25;
    }

    .card-link {
        aspect-ratio: 1.25;
    }
}

@media only screen and (max-width: 979px) {
  .card-title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 639px) {
    .card-item {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    }
    .card-title {
        line-height: 1;

        font-size: 24px;
    }
    .card-link {
        padding: 22px 40px;
    }
    .card-details {
        font-size: 16px;
    }
}

.icon {
    z-index: 4em;
    position: relative;
    display: table;
    height: 2em;

    &::after {
        content: '';
        position: absolute;
        inset: 4.5px;
        background-color: transparent;
        backdrop-filter: blur(2px);
        transition: background-color .25s, border-color .25s;
    }

}
.icon > img {
    object-fit: contain;
    height: 2em;
    max-width: 2.5em;
    margin-bottom: 0.5em;
    position: relative;
    z-index: 1;
    display: block;
    transform: translateZ(0);
    color: #020409;
    transition: all .5s;
}

.card-link:hover img {
    filter: invert(1);
}
</style>