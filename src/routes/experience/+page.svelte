<script>
    import { base } from '$app/paths'
    import AButton from '../../assets/components/AButton.svelte';
    import HoverablePic from '../../assets/components/HoverablePic.svelte'
</script>

<main>
    <section class="job-section" id="first">
        <h1>Places I've worked at</h1>

        <div class="job">
            <h2>
                <a href="https://www.sncf-voyageurs.com/fr/decouvrez-notre-entreprise/nos-directions-et-filiales/direction-du-materiel/" target="blank">
                    SNCF - CIE DATA (Eastern Engineering Cluster)
                </a>
            </h2>
            <p class="job-detail">June-August 2025 • Software developer (Internship)</p>
            <p>
                I am currently working on APIs and CLIs for a cybersecurity audit device.
            </p>
            <div class="languages">
                <a href="https://www.python.org/" target="_blank">Python</a>
            </div>
        </div>

        <div class="job">
            <h2>
                <a href="https://www.sncf-voyageurs.com/fr/decouvrez-notre-entreprise/nos-directions-et-filiales/direction-du-materiel/" target="blank">
                    SNCF - CIE DATA (Eastern Engineering Cluster)
                </a>
            </h2>
            <p class="job-detail">June-July 2024 • Software developer (Internship)</p>
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
            <h2><a href="https://net7.dev/" target="_blank">net7</a></h2>
            <p class="job-detail">2024-2025 • Treasurer</p>
            <p>As net7's treasurer, my involves keeping track of the association's treasury, its expenses and other tasks involving funds.
                I also took part in certain administrative tasks as well as the management of social media communication / announcements.
            </p>
        </div>

        <div class="job">
            <h2><a href="https://www.tvn7.fr/" target="_blank">TVn7</a></h2>
            <p class="job-detail">2024-2025 • IT Manager</p>
            <p>As TVn7's IT manager, my job consists in helping members with troubleshooting issues on the association's computers and managing the 
                association's server.
            </p>
        </div>

        <div class="job">
            <h2><a href="https://capitoledulibre.org/" target="_blank">Capitole du libre</a></h2>
            <p class="job-detail">November, 2023 and 2024 • Videographer and photographer</p>
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
                conferences regarding diverse topics related with open-source technologies.
                I also discovered my passion for control booth during the event. <br>
                During my second edition, I also volonteered as photographer for the event through Photo7 (N7's photography association).
            </p>

            <div class="picdiv">
                <HoverablePic
                    img_path="CdL/atem_mini.jpg"
                    text="Picture of me using a Blackmagic Atem Extreme Iso mini control booth to reccord a conference. 
                    This is the tool I used to familiarize myself with control booths before making my way 
                    to heavier equipement.  "
                    link="https://photo7.inpt.fr/albums.php?id=62"
                />
                <HoverablePic
                    img_path="CdL/video.jpg"
                    text="Me filming a conference on a Sony FX6 camera."
                    link="https://photo7.inpt.fr/albums.php?id=62"
                />
                <HoverablePic
                    img_path="CdL/volonteers.jpg"
                    text="A shot of all (or at least most of) the people that volonteered during the Capitole du Libre in 2024."
                    link="https://photo7.inpt.fr/albums.php?id=62"
                />
            </div>
            <p>
                Above (from left to right) is a picture of :<br>
                - me using Blackmagic Atem Extreme Iso which I
                used to familiarize myself with using a control booth before
                helping as co-director in the evening.<br>
                - me filming a conference<br>
                - all the volonteers that help in 2024's edition
            </p>
            <p>Credits to <a href="https://photo7.inpt.fr/" target="_blank">Photo7</a> for the pictures.</p>
            <div class="languages">
                <a href="https://www.adobe.com/products/premiere.html" target="_blank">Premiere Pro</a>
                <a href="https://www.adobe.com/products/photoshop-lightroom.html" target="_blank">Lightroom</a>
            </div>
        </div>

        <div class="job">
            <h2><a href="https://thcon.party/" target="_blank">Toulouse Hacking Convention</a></h2>
            <p class="job-detail">April 2024 and 2025 • Volonteer</p>
            <p>
                The <a href="https://thcon.party/" target="_blank">Toulouse Hacking Convention</a>
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
        padding: 0px 15rem;
        display: block;
        background-color: #fafbfe;
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

    h2 > a {
        color: #020409;
        display: inline-block;
        position: relative;
    }

    h2 > a::after {
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

    h2 > a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom;
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

    .languages > a, .job > p > a {
        transition: all 0.2s ease-in-out;
    }

    .languages >  a:hover, .job > p > a:hover {
        font-weight: bold;
    }

    .picdiv {
        margin-top: 1.5em;
        margin-bottom: 1.5em;
        display: flex;
        justify-content: space-evenly;
    }

    @media screen and (max-width: 800px) {
        main {
            padding: 0 0.5rem;
        }

        section {
            margin: 5em 0;
        }

        #first {
            margin: 2em 0;
        }

        .picdiv {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            gap: 1em;
        }
    }
</style>
