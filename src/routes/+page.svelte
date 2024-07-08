<script>
    import pfp from '$assets/img/pfp.png'
    import HomeText from '$assets/components/HomeText.svelte'
    import AButton from '../assets/components/AButton.svelte';
    let Violet = "blueviolet";
    import Cards from '../assets/components/CardsBox.svelte';
    import projectsDesc from '$assets/components/projectCards.json'
</script>

<section class="intro">
    <div>
        <h1>Hi, I'm </h1>
        <h1 style="color: {Violet}">Nell Truong.</h1>
        <h2>I'm a engineering student.</h2>
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
    <p>How to contact me:</p>
</section>

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
        margin-bottom: 4em;
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
</style>