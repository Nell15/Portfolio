<script>
    import pfp from '$assets/img/pfp.png'
    import cvIcon from '$assets/img/CV_Icon.png'
    import HomeText from '$assets/components/HomeText.svelte'
    import AButton from '$assets/components/AButton.svelte';
    let Violet = "blueviolet";
    import Cards from '$assets/components/CardsBox.svelte';
    import projectsDesc from '$assets/components/projectCards.json'
    import ContactButton from '$assets/components/ContactButton.svelte';
    import cv from '$assets/docs/CurriculumVitaeEN.pdf';
</script>

<section class="intro">
    <div>
        <h1>Hi, I'm </h1>
        <h1 style="color: {Violet}">Nell Truong.</h1>
        <h2>I'm an engineering student.</h2>
        <p>I am a engineering student specializing in computer science at N7 (INP-ENSEEIHT) 
            and currently doing an internship as a developer at 
            <a href="https://www.sncf-voyageurs.com/fr/decouvrez-notre-entreprise/nos-directions-et-filiales/direction-du-materiel/">SNCF</a>.</p>
        <AButton text={"Learn more"} link={"#about"} textColor={Violet} buttonColor={Violet}/>
    </div>
</section>

<section class="abt_section" id="about">
    <h2>About me</h2>
    <div class="abt" >
        <HomeText/>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={pfp} alt="profile picture" class="pfp"/>
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
        link={cv}
        icon={cvIcon}
        text="Curriculum Vitae">
        </ContactButton>
    </div>
</section>

<footer>
    <div class="license">
        © 2024 Nell Truong
        <svg aria-hidden="true" focusable="false" role="img" class="license-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154c.041.028.09.043.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.749.749 0 0 1-.23.896c-.1.074-.203.143-.31.206a6.296 6.296 0 0 1-.79.399 7.349 7.349 0 0 1-2.856.569 7.343 7.343 0 0 1-2.855-.568 6.205 6.205 0 0 1-.79-.4 3.205 3.205 0 0 1-.307-.202l-.005-.004a.749.749 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.246.246 0 0 0-.14-.043H12.75v14.5h4.487a.75.75 0 0 1 0 1.5H6.763a.75.75 0 0 1 0-1.5h4.487V6H9.275a.249.249 0 0 0-.14.043L7.439 7.197c-.29.197-.633.303-.984.303h-.886l3.368 7.68a.75.75 0 0 1-.209.878c-.08.065-.16.126-.31.223a6.077 6.077 0 0 1-.792.433 6.924 6.924 0 0 1-2.876.62 6.913 6.913 0 0 1-2.876-.62 6.077 6.077 0 0 1-.792-.433 3.483 3.483 0 0 1-.309-.221.762.762 0 0 1-.21-.88L3.93 7.5H2.353a.75.75 0 0 1 0-1.5h4.102c.05 0 .099-.015.141-.043l1.695-1.154c.29-.198.634-.303.985-.303h1.974V2.75a.75.75 0 0 1 1.5 0ZM2.193 15.198a5.414 5.414 0 0 0 2.557.635 5.414 5.414 0 0 0 2.557-.635L4.75 9.368Zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.847 5.847 0 0 0 2.547-.576L19.25 9.367Z">
            </path>
        </svg>
        MIT license
    </div>
    <p>Made using <a href="https://kit.svelte.dev/" target="_blank">Svelte Kit</a> !</p>
    <p>Access the <a href="https://github.com/Nell15/reportfolio" target="_blank">source code</a>.</p>
</footer>

<style>
    :global(html) {
        scroll-behavior: smooth;
        background-color: #fafbfe;
    }

    :global(a), :global(a:hover), :global(a:visited), :global(a:active) {
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
        height: 85vh;
    }

    .intro div {
        padding: 12em 20em 0px;
    }

    @media screen and (max-width: 500px){
        .intro div {
            padding: 8em 1em 0px;
        }
    }

    @media screen and (max-height: 500px) {
        .intro div {
            padding: 1em 1em 0px;
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
            width: 8em;
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

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer > p {
        margin-bottom: 0;
    }

    .license {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
    }

    .license-icon {
        height: 1.25em;
        aspect-ratio: 1;
        display: inline-block;
        user-select: none;
        vertical-align: text-bottom;
        overflow: visible;
    }

    footer a {
        color: #020409;
        text-decoration: underline;
        font-weight: normal;
        transition: all 0.4s ease-in-out;
    }

    footer a:hover {
        font-weight: bold;
    }

</style>