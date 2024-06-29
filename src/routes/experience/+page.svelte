<script>
    import cdl_atem from '$assets/img/CdL_atem.jpg'
</script>

<main>
    <h1>Volonteering</h1>
    <section>

    </section>
    <section class="CdL">
        <h2>Capitole du libre</h2>
        <p>
            During my time at N7, I had the opportunity to be part of the staff at the 
            <a href="https://capitoledulibre.org/">Capitole du Libre</a>, an event centered around promoting 
            free software and open-source technologies.
        </p>
        <p>
            I was part of TVn7's crew during the event (TVn7 being N7's audiovisual association). 
            During the event, I filmed and edited conferences regarding diverse topics and learned the basics of 
            control booths.
        </p>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <div class="picdiv">
            <img src={cdl_atem} alt="Picture of a Blackmagic Atem Extreme Iso" id="CdL_pic">
        </div>
        <p class="subtext">
            Above is a picture of an Blackmagic Atem Extreme Iso which I used to familiarize myself with using a 
            control booth before helping as co-director in the evening.
        </p>
    </section>
    <section>
        <h2>Toulouse Hacking Convention</h2>
        <p>The <a href="https://thcon.party/">Toulouse Hacking Convention</a> is an event centered around cybersecurity. The event consist of two days of conferences
            on the subject and one day dedicated to a CTF (Capture The Flag).
        </p>
        <p>I volonteered at the Toulouse Hacking Convention as part of net7's and TVn7's staff. 
            I was part of the staff at the entry of event and also a cameraman during one of the conferences.
        </p>
    </section>
</main>

<style>
    :global(html) {
        padding: 0;
        margin: 0;
        font-family: "HK Grostesk", sans-serif;
    }

    main {
        font-weight: 500;
        font-size: 14px;
        color:#000000;
        padding: 0px 5rem;
    }

    .picdiv {
        display: flex;

    }

    .subtext {
        width: 80%;
    }

    #CdL_pic {
        width: 50rem;
    }
</style>