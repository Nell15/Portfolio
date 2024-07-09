<script>
    import AButton from '../assets/components/AButton.svelte';
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    let current = 0;
</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</head>

<header>
    <a href="/" class="logo"><h1>Nell Truong</h1></a>
    <nav class:open={isMenuOpen}>
        <ul>
            <li on:click={closeMenu}><a class="current" href="/">Home</a></li>
            <li on:click={closeMenu}><a href="/#projects">Projects</a></li>
            <li on:click={closeMenu}><a href="/skills">Skills</a></li>
            <li on:click={closeMenu}><a href="/experience">Experience</a></li>
            <li on:click={closeMenu} class="button"><AButton text={"Contact"} link={"/#contact"} textColor={"#020409"} buttonColor={"#edeef1"}/></li>
        </ul>
    </nav>
    <button class="burger" on:click={toggleMenu} class:open={isMenuOpen}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </button>
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
        justify-content: space-between;
        position: sticky;
        top: 0;
        background-color: #fafbfe;
        z-index: 3;
    }

    .logo {
        margin-left: 1em;
    }

    @media only screen and (max-width: 799px) {
        nav {
            opacity: 0;
            text-align: center;
            justify-content: center;
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #fafbfe;
            transition: all 0.25s ease-in-out;
        }

        nav.open {
            opacity: 1;
        }
    }
    
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 2em;
        margin-top: 1em;
        margin-bottom: 3em;
        list-style: none;
        padding: 0;

    }

    li > a {
        display: inline-block;
        position: relative;
    }

    li > a::after {
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

    li > a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom;
    }

    .burger {
        height: 2.2em;
        aspect-ratio: 1;
        border: 2px solid #020409;
        background-color: transparent;
        border-radius: 5px;
        margin-right: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .burger > div {
        height: 2px;
        width: 1.1em;
        background-color: #020409;
        position: absolute;
        transition: all 0.2s ease-in-out;
    }

    .bar1 {
        transform: translateY(-5px);
    }

    .bar3 {
        transform: translateY(5px);
    }

    .burger.open .bar1 {
        transform: rotateZ(45deg);
    }

    .burger.open .bar2 {
        opacity: 0;
    }

    .burger.open .bar3 {
        transform: rotateZ(-45deg);
    }


    a {
        color: #020409;
    }

    @media only screen and (min-width: 800px) {
        .logo {
            margin-left: 3em;
        }

        .burger {
            margin-right: 3em;
            display: none;
        }

        nav {
            display: block;
            position: relative;
        }

        ul {
            margin: 0;
            flex-direction: row;
            gap: 3em;

        }

        .button {
            margin-right: 3em;
        }

        
    }
</style>