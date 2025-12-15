<script>
    import { base } from '$app/paths'
</script>

<div class="back_div">
    <a href="{base}/#projects" class="back">Back to projects</a>
    <img src="{base}/img/icons/arrow-right.svg" alt="right-arrow">
</div>

<style>
    .back_div {
        display: flex;
        align-items: center;
        padding-top: 0.5rem;
    }

    .back_div > img {
        height: 1.25em;
        padding-left: 0.2rem;
    }

    .back {
        color: #020409;
        display: inline-block;
        position: relative;
        transition: all 0.25s ease-in-out;
    }

    .back:hover {
        font-weight: 600;
    }

    .back::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: blueviolet;
        transform-origin: bottom right;
        transition: all 0.25s ease-in-out;
    }

    .back:hover::after {
        transform: scaleX(1);
        transform-origin: bottom;
    }
</style>