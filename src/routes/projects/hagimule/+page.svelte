<script>
    import { base } from '$app/paths'
</script>

<main>
    <div>
        <div class="back_div">
            <a href="{base}/#projects" class="back">Back to projects</a>
            <img src="{base}/img/icons/arrow-right.svg" alt="right-arrow">
        </div>
        <h1>Hagimule</h1>
        <h2>Project Goal</h2>
        <p>
            This project is a reparted peer-to-peer downloader software running in terminal and inspired by eMule.
            This project goal was to develop a parallel downloading software using RMI and TCP socket connections.
        </p>
        <div>
            Ths projects is divided in three main parts:
            <ul>
                <li>The diary</li>
                <li>The daemon</li>
                <li>The downloader</li>
            </ul>
        </div>
        <div>
            <h3>The Diary</h3>
            <p>Is the "server" part of our middleware application. 
                It has two roles, the first is to register each client and the files they own, 
                the second is two tell clients requesting downloads which fragment should be downloaded on which other client.
            </p>
        </div>
        <div>
            <h3>The Daemon</h3>
            <p>
                Is used by clients to download files.
            </p>
        </div>
        <div>
            <h3>The Dowloader</h3>
            <p>
                Is the "server" part of our middleware application. Its role is to register each client and the files they own.
            </p>
        </div>
        <p>This project was made with 
            <a href="https://theobessel.fr" target="_blank">Théo Bessel</a> 
            as part of our middleware course. You can find out more on our 
                <a href="https://github.com/TheoBessel/HagiMule">
                Github repository
                </a>
            .
            </p>
        <h2>Tools used</h2>
        <ul>
            <li>
                <a href="https://www.java.com/en/">
                    Java
                </a>
            </li>
            <li>
                <a href="https://gradle.org/">
                    Gradle
                </a>
            </li>
            <li>
                <a href="">
                    Bash
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