<script>
    import { base } from '$app/paths'
    import { images } from './images';
    import BackButton from '$assets/components/BackButton.svelte';

    let index = 0;

    function next() {
        index = (index + 1) % images.length;
    }

    function prev () {
        index = (index - 1 + images.length) % images.length;
    }
</script>

<main>
    <div>
        <BackButton></BackButton>

        <h1>Need4Fish</h1>
        <h2>The project</h2>
        <p>
            Need4Fish is a (not so) fast paced 3D race against the clock game.
        </p>
        <p>
            In Need4Fish, you play as a juvenile mosasaur that was abandoned by their
            mother with one only goal: vengeance. To do that, you'll need to climb
            the food chain and become the new apex predator.
        </p>
        This projects is divided in two parts:
        <ul>
            <li>Fish Engine (our rendering engine)</li>
            <li>Need4Fish (the actual game)</li>
        </ul>

        <h2>Fish Engine</h2>
        Fish Engine is our homemade rendering engine. It runs on DirectX11 and is a
        static library used by our game Need4Fish.

        <h2>Need4Fish</h2>
        TODO

        <button on:click={prev}>
            Previous
        </button>

        <div class="img_block">
            <img src={images[index].src} alt="{images[index].alt}">
            <p>{images[index].alt}</p>
        </div>
        <button on:click={next}>
            Next
        </button>

        <h2>Credits</h2>
        <p>This project was made in collaboration with:
            <a href="https://www.linkedin.com/in/sylvain-brunet-807b62331/">Sylvain Brunet</a>,
            <a href="https://www.linkedin.com/in/alexandre-gagnon-ultralex/">Alexandre Gagnon</a> and
            <a href="https://www.linkedin.com/in/landrydemersthierry/">Thierry Demers-Landry</a>
            as part of our master's degree in game development. You can try the game for free and learn more on our
            <a href="https://github.com/SylvainBRUNET37/FishEngine">Github repository</a>.
        </p>
        <p>
            Huge kudos to all the artists making free assets which we've used for our game ! You can
            find the complete list in the project's read me file.
        </p>

        <h2>Tools used</h2>
        <ul>
            <li>
                <a href="https://en.wikipedia.org/wiki/C%2B%2B">
                    C++
                </a>
            </li>
            <li>
                <a href="https://en.wikipedia.org/wiki/DirectX">
                    DirectX11
                </a>
            </li>
            <li>
                <a href="https://github.com/jrouwe/JoltPhysics">
                    Jolt Physics
                </a>
            </li>
            <li>
                <a href="https://git-scm.com/">
                    Git
                </a>
            </li>
            <li>
                <a href="https://visualstudio.microsoft.com/">
                    Visual Studio
                </a>
            </li>
        </ul>
    </div>
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

    li > a::after, p > a::after {
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

    li > a:hover::after, p > a:hover::after {
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