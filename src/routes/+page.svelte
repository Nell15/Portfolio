<script>
    import pfp from '$assets/img/pfp.png'
    import HomeText from '$assets/components/HomeText.svelte'
    import AButton from '../assets/components/AButton.svelte';
    let Violet = "blueviolet";
</script>

<section class="intro">
    <h1>Hi! I'm <span style="color: {Violet}">Nell Truong.</span></h1>
    <p>I am a engineering student specializing in computer science at N7 (INP-ENSEEIHT).</p>
    <AButton text={"Learn more"} link={"#about"} textColor={Violet} buttonColor={Violet}/>
</section>

<section>
    <div class="abt" id="about">
        <HomeText/>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={pfp} alt="profile picture" class="pfp"/>
    </div>
</section>

<section id="projects">
    <h2>Projects</h2>
    <p>Learn about my projects</p>
</section>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
    
    .intro h1 {
        font-size: 4rem;
        font-weight: bold;
    }

    .pfp {
        border-radius: 50%;
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
        .abt {
            flex-direction: column-reverse;
        }
    }

    .abt img {
        border-radius: 50%;
    }
</style>