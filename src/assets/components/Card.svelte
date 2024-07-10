<script>
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


<div class="ag-courses_item">
    <a href={link} class="ag-courses-item_link" target={target}>
        <div class="ag-courses-item_bg"></div>
            <span class="icon">
                <img src="https://cdn.worldvectorlogo.com/logos/svg-2.svg"/>
            </span>

        <div class="ag-courses-item_title">
            {title}
        </div>

        <div class="ag-courses-item_date-box">
            <span class="ag-courses-item_date">
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

.ag-courses_item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    aspect-ratio: 1.25;
    flex-basis: calc(33.33333% - 30px);
    margin: 0 15px 30px;
    overflow: hidden;
    border-radius: 28px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
}
.ag-courses-item_link {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
    aspect-ratio: 1.25;
    display: block;
    padding: 30px 20px;
    /* background-color: #121212; */
    background-color: #fafbfe;

    overflow: hidden;

    position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_title,
.ag-courses-item_link:hover .ag-courses-item_date,
.ag-courses-item_link:hover .lang {
    text-decoration: none;
    color: #FFF;
    /* color: #020409; */
}
.ag-courses-item_link:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
}
.ag-courses-item_title {
    /* min-height: 87px; */
    margin: 0.2em 0 0.5em;

    overflow: hidden;

    font-weight: bold;
    font-size: 30px;
    /* color: #FFF; */
    color: #020409;

    z-index: 2;
    position: relative;
    -webkit-transition: color .5s ease;
    -o-transition: color .5s ease;
    transition: color .5s ease;
}
.ag-courses-item_date-box {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #FFF;
    /* color: #020409; */

    z-index: 2;
    position: relative;
}
.ag-courses-item_date {
    /* font-weight: bold; */
    color: #020409;
    /* padding-top: 1em; */
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
.ag-courses-item_bg {
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
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
    background-color: #8A2BE2;
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
    background-color: #2ea4ff;
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
    background-color: #952aff;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
    background-color: #29caff;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
    background-color: #5500dd;
}

@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 639px) {
    .ag-courses_item {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    }
    .ag-courses-item_title {
        min-height: 72px;
        line-height: 1;

        font-size: 24px;
    }
    .ag-courses-item_link {
        padding: 22px 40px;
    }
    .ag-courses-item_date-box {
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
    height: 4em;
    position: relative;
    z-index: 1;
    display: block;
    width: 24px;
    height: 24px;
    transform: translateZ(0);
    /* color: var(--card-icon-color); */
    color: #020409;
    transition: color .25s;
}
</style>