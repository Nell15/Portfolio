<script>
    import { base } from '$app/paths'
    import { images } from './images';
    import BackButton from '$assets/components/BackButton.svelte';
    import Caroussel from '../../../assets/components/Caroussel.svelte';
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

        <h3>Gameplay</h3>
        <p>In Need4Fish, you eat various fishes to grow your way to being the apex predator, but you need to hurry !</p>
        <p>Being a small creature means you're vulnerable to bigger fishes, and natural disasters (oops, spoilers!)</p>

        <h4>Status effect</h4>
        <p>Some fish give you temporary status effect, like the pufferfish that changes your vision.</p>

        <h4>Ennemy AI</h4>
        <p>In game have a very simplistic artificial intelligence, they move in a semi-random way when roaming around and start fleeing when the player gets too close.</p>

        <h4>Apocalypse</h4>
        <p>
            To give the player a sense of urgency, if they do not finish their run in less than 3-4 minutes, the apocalyse starts.
            It represents the extinctions of dinosaurs and forces the player to act.
        </p>
        <p>
            During this event, the sun position changes, the sun's color starts fading to red, the apex mosasaur starts hunting the player and meteors start falling from the sky.
        </p>


        <h3>Rendering</h3>
        <p>
            To make our world and experience feel immersive, we've implemented a few rendering
            techniques, here are a few examples:
        </p>

        <Caroussel sources="{images}"></Caroussel>

        <h3>Physics</h3>

        <p>Our game uses Jolt Physics, we've used Jolt to handle collisions and simulate water physics.</p>
        <p>You can interact with a few items in the scene, like rocks which sink and coconuts that float.</p>

        <h3>Architecture</h3>
        <p>
            There are a few intersting things with our architecture.
        </p>
        <p>
            First of all, Fish Engine (our Rendering engine) is a static library that used by Need4Fish for its rendering needs.
        </p>
        <p>
            Secondly, our game is built using a custom built ECS (Entity Component System) which makes use of a lot of templates,
            traits and concepts, making it easy to use components and to add new ones.
        </p>

        <h2>Want to try the game ?</h2>
        <p>
            <a href="https://github.com/SylvainBRUNET37/FishEngine/releases/tag/v1.1.1-demo" target="_blank">
                Need4Fish has been released on Github
            </a>
            , so you can download the game and try it for yourself !
        </p>
        <p>
            It's as easy as downloading the .zip file, extracting it and running Need4Fish.exe.
            We put a lot of love and effort into this game, so we would love it if your tried it out :D.
        </p>

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
        margin-bottom: 7rem;
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