<script>
    import AButton from '../assets/components/AButton.svelte';
</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</head>

<header>
    <a href="/" class="logo">Nell Truong</a>
    <nav>
        <ul class="nav__links">
            <li><a href="/">Home</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/experience">Experience</a></li>
        </ul>
    </nav>
    <AButton text={"Learn more"} link={"#about"} textColor={"#020409"} buttonColor={"#edeef1"}/>
</header>

<main>
    <slot />
</main>

<style>
    :global(html) {
        font-family:'Inter', sans-serif;
    }

    :global(a) {
        text-decoration: none;
    }

    header {
        display:flex;
        align-items: center;
        justify-content: flex-end;
    }

    .logo {
        margin-right: auto;
    }

    .nav__links {
        list-style: none;
    }

    .nav__links li {
        display: inline-block;
    }

    .nav__links li a {
        /* font-family: "Space Grotesk", sans-serif; */
        color: #000000;
        transition: all 0.3 ease 0s;
    }

    nav {
        position:sticky;
        top:20px;
        margin-right: 2em;
    }

    nav a {
        padding-left: 0.75em;
        padding-right: 0.75em;
    }
</style>