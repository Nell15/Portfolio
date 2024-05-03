<script>
    import pfp from '$assets/img/pfp.png'
    import HomeText from '$assets/homeText.svelte'
</script>

<h1>Hi! <span style="color:blueviolet">I'm Nell Truong</span></h1>
<p>I am a engineering student specializing in computer science at N7 (INP-ENSEEIHT).</p>

<section>
    <div class ="abt">
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
        font-family: "HK Grostesk", sans-serif;
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

    .abt img {
        border-radius: 50%;
    }
</style>