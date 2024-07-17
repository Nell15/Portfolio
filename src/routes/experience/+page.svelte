<script>
    import {base} from '$app/paths';
    import cdl_atem from "$assets/img/CdL_atem.jpg";
</script>

<main>
    <section class="job-section">
        <h1>Places I've worked at</h1>

        <div class="job">
            <h2>SNCF - CIE DATA (Eastern Engineering Cluster)</h2>
            <p class="job-detail">2024 • Developer Intern</p>
            <p>
                Developper for AR (Augmented Reality) experiences using Unreal
                Engine 5. My job involved developping new features and testing
                them on a Microsoft Hololens 2.
            </p>
            <div class="languages">
                <a href="https://www.unrealengine.com/en-US" target="_blank">Unreal Engine</a>
                <a href="https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine" target="_blank">Blueprint</a> 
                <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">C++</a> 
            </div>
        </div>
    </section>

    <section class="job-section">
        <h1>Volonteering</h1>

        <div class="job">
            <h2>net7</h2>
            <p class="job-detail">2024-2025 • Treasurer</p>
        </div>

        <div class="job">
            <h2>TVn7</h2>
            <p class="job-detail">2024-2025 • IT Manager</p>
        </div>

        <div class="job">
            <h2>Capitole du libre</h2>
            <p>
                During my time at N7, I had the opportunity to be part of the
                staff at the
                <a href="https://capitoledulibre.org/" target="_blank"
                    >Capitole du Libre</a
                >, an event centered around promoting free software and
                open-source technologies.
            </p>
            <p>
                I was part of TVn7's crew during the event (TVn7 is N7's
                audiovisual association). During the event, I filmed and edited
                conferences regarding diverse topics and learned the basics of
                control booths.
            </p>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="picdiv">
                <img
                    src={cdl_atem}
                    alt="Picture of a Blackmagic Atem Extreme Iso"
                    id="CdL_pic"
                />
            </div>
            <p>
                Above is a picture of an Blackmagic Atem Extreme Iso which I
                used to familiarize myself with using a control booth before
                helping as co-director in the evening.
            </p>
            <div class="languages">
                <a href="https://www.adobe.com/products/premiere.html" target="_blank">Premiere Pro</a>
            </div>
        </div>

        <div class="job">
            <h2>Toulouse Hacking Convention</h2>
            <p>
                The <a href="https://thcon.party/" target="_blank"
                    >Toulouse Hacking Convention</a
                >
                is an event centered around cybersecurity. The event consist of
                two days of conferences on the subject and one day dedicated to
                a CTF (Capture The Flag). <br />
                I volonteered at the Toulouse Hacking Convention as part of net7's
                and TVn7's staff. I was part of the staff at the entry of event and
                also a cameraman during one of the conferences.
            </p>
        </div>
    </section>
</main>

<style>
    main {
        font-weight: 500;
        font-size: 14px;
        color: #020409;
        padding: 0px 5rem;
        display: block;
    }

    h1 {
        font-size: clamp(25px, 8vw, 45px);
        font-weight: bold;
        margin: auto;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: clamp(10px, 8vw, 25px);
        font-weight: bold;
        margin: auto;
    }

    section {
        display: block;
        margin: 7em 0;
    }

    .job {
        font-size: 1em;
        background-color: transparent;
        border-radius: 2em;
        border: solid;
        border-color: #dedee1;
        text-align: left;
        width: auto;
        height: auto;
        padding: 1em 1.5em;
        margin: 1.5em 0;
    }

    .job-detail {
        font-weight: bold;
    }

    .languages {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .languages > a, .job  a {
        transition: all 0.3s ease-in-out;
    }

    .languages >  a:hover, .job  a:hover {
        color: rgb(64, 1, 166);
        font-weight: bold;
    }

    .picdiv {
        display: flex;
    }

    #CdL_pic {
        width: 50rem;
    }

    @media screen and (max-width: 800px) {
        main {
            padding: 0 0.5rem;
        }

        #CdL_pic {
            width: 100%;
        }
    }
</style>
