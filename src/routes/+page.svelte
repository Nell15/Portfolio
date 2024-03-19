<script>
    import pfp from '../assets/pfp.png'
    import Test from './skills/tests.svelte'
</script>

<h1>Hi! <span style="color:blueviolet">I'm Nell Truong</span></h1>
<p>I am a engineering student specializing in computer science at N7 (INP-ENSEEIHT).</p>

<section>
    <div class ="abt">
        <p>I'm a 19 years old engineering student at N7 (ENSEEIHT)
            specializing in Computer Science. I'm interested in software
            development, artificial intelligence and cybersecurity.</p>
        <img src={pfp} alt="profile picture" class="pfp"/>
    </div>
</section>

<section id="projects">
    <h2>Projects</h2>
    <Test />
</section>

<style>
    :global(html) {
        scroll-behavior: smooth;
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