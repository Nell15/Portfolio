<script>
    import { base } from '$app/paths'
    import BackButton from '$assets/components/BackButton.svelte';
</script>

<main>
    <div>
        <BackButton></BackButton>

        <h1>Mon ami</h1>
        <h2>An online multiplayer horror game built on Unreal Engine 5</h2>
        <p>
            I haven't written this article yet ! But I hope to do it soon and hopefully have it pubished on Steam (✌️).
        </p>

        <h2>Tools used</h2>
        <ul>
            <li>
                <a href="https://www.unrealengine.com/">
                    Unreal Engine
                </a>
            </li>
            <li>
                <a href="https://en.wikipedia.org/wiki/C%2B%2B">
                    C++
                </a>
            </li>
            <li>
                <a href="https://dotnet.microsoft.com/en-us/languages/csharp">
                    C#
                </a>
            </li>
            <li>
                <a href="https://www.docker.com/">
                    Docker
                </a>
            </li>
            <li>
                <a href="https://aws.amazon.com/">
                    AWS
                </a>
            </li>
        </ul>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: #fafbfe;
        padding: 0px 25rem;
        flex-wrap: wrap;
    }

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

    h1 {
        margin-top: 2rem;
    }

    ul > li {
        margin-bottom: 0.25rem;
    }

    li > a, p > a {
        color:blueviolet;
        display: inline-block;
        position: relative;
    }

    li > a::after, p > a::after, .back::after {
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

    li > a:hover::after, p > a:hover::after, .back:hover::after {
        transform: scaleX(1);
        transform-origin: bottom;
    }

    .img_block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img_block > p {
        margin-top: 0.5rem;
    }

    .img_block > img {
            width: 100%;
            height: auto;
    }

    @media screen and (max-width: 1300px) {
        main {
            padding: 0 10rem;
        }
    }

    @media screen and (max-width: 900px) {
        main {
            padding: 0 0.5rem;
        }
    }
</style>