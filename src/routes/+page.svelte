<script>
    import { base } from '$app/paths'
    import HomeText from '$assets/components/HomeText.svelte'
    import AButton from '../assets/components/AButton.svelte';
    let Violet = "blueviolet";
    import Cards from '../assets/components/CardsBox.svelte';
    import projectsDesc from '../assets/components/projectCards.json'
    import ContactButton from '../assets/components/ContactButton.svelte';
</script>

<section class="intro">
    <div>
        <h1>Hi, I'm </h1>
        <h1 style="color: {Violet}">Nell Truong.</h1>
        <h2>I'm an engineering student.</h2>
        <p>I am a engineering student specializing in computer science at N7 (INP-ENSEEIHT) 
            and I have just finished an internship as a developer at 
            <a href="https://www.sncf-voyageurs.com/fr/decouvrez-notre-entreprise/nos-directions-et-filiales/direction-du-materiel/" target="blank">SNCF</a>.</p>
        <AButton text={"Learn more"} link="{base}/#about" textColor={Violet} buttonColor={Violet}/>
    </div>
</section>

<section class="abt_section" id="about">
    <h2>About me</h2>
    <div class="abt" >
        <HomeText/>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="{base}/img/pfp.png" alt="profile picture" class="pfp"/>
    </div>
</section>

<section id="projects">
    <h2>Projects</h2>
    <Cards contentFile={projectsDesc}></Cards>
</section>

<section id="contact">
    <h2>Contact</h2>
    <p>Get in touch with me:</p>
    <div class="contact-box">
        <ContactButton
        link="https://www.linkedin.com/in/nell-truong/"
        icon="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
        text="LinkedIn">
        </ContactButton>
        <ContactButton
        link="https://github.com/Nell15"
        icon="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        text="Github">
        </ContactButton>
        <ContactButton
        link="email"
        icon="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
        text="nelltruong67@gmail.com">
        </ContactButton>
        <ContactButton
        link="{base}/docs/CurriculumVitaeEN.pdf"
        icon="{base}/img/CV_Icon.png"
        text="Curriculum Vitae">
        </ContactButton>
    </div>
</section>



<style>
    :global(html) {
        scroll-behavior: smooth;
        background-color: #fafbfe;
    }

    :global(a), :global(a:visited), :global(a:active) {
        /* color: inherit; */
        color: #8a2be2;
        text-decoration: none;
    }

    body {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .intro {
        min-height: 85vh;
    }

    .intro div {
        padding: 12em 20em 0px;
    }

    @media screen and (max-width: 800px){
        .intro div {
            padding: 8em 1em 0px;
        }
    }

    @media screen and (max-height: 800px) {
        .intro div {
            padding: 3em 3em 0px;
        }
    }

    @media screen and (max-height: 500px) {
        .intro div {
            padding: 1em 3em 0px;
        }
    }

    .intro h1 {
        /* font-size: 4rem; */
        font-size: clamp(40px, 8vw, 80px);
        font-weight: bold;
        margin: auto;
    }

    .intro h2 {
        font-size: clamp(25px, 8vw, 45px);
        font-weight: bold;
        margin: auto;
    }

    .intro p {
        max-width: 27em;
    }

    .intro a {
        color: #8a2be2;
    }

    .pfp {
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    .pfp:hover {
        transform: scale(1.05);
    }

    .abt_section {
        padding-top: 3em;
        margin-bottom: 10em;
    }

    .abt_section, #projects, #contact {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .abt_section h2, #projects h2, #contact h2 {
        font-size: 40px;
        text-align: center;
    }

    .abt {
        margin: auto;
        width: 70%;
        gap: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 800px) {
        .intro {
            height: 85vh;
        }

        .abt {
            flex-direction: column-reverse;
            width: 85%;
        }

        .pfp {
            width: 14em;
            height: auto;
        }
    }

    #projects {
        margin-bottom: 10em;
    }

    .contact-box {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
    }
    
    #contact {
        margin-bottom: 15em;
    }

    #contact h2 {
        margin-bottom: 0.5em;
    }

    #contact > p {
        margin-top: 0;
        margin-bottom: 3em;
        font-weight: bold;
        font-size: 1.5em;
    }

    @media screen and (max-width: 680px) {
        .contact-box {
            margin: 0 2em;
            gap: 1em;
            justify-content: center;
        }
    }

</style>