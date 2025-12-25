<script>
    import { base } from '$app/paths'
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
    <title>Nell Truong - Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</head>

<header>
    <a href="{base}/" class="logo"><h1>Nell Truong</h1></a>
    <nav class:open={isMenuOpen}>
        <ul>
            <li on:click={closeMenu}><a class="current" href="{base}/">Home</a></li>
            <li on:click={closeMenu}><a href="{base}/#projects">Projects</a></li>
            <li on:click={closeMenu}><a href="{base}/skills">Skills</a></li>
            <li on:click={closeMenu}><a href="{base}/experience">Experience</a></li>
            <li on:click={closeMenu} class="button"><AButton text={"Contact"} link="{base}/#contact" textColor={"#020409"} buttonColor={"#edeef1"}/></li>
        </ul>
    </nav>
    <button class="burger" on:click={toggleMenu} class:open={isMenuOpen}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </button>
</header>

<slot />

<footer>
    <div class="license">
        © 2025 Nell Truong
        <svg aria-hidden="true" focusable="false" role="img" class="license-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154c.041.028.09.043.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.749.749 0 0 1-.23.896c-.1.074-.203.143-.31.206a6.296 6.296 0 0 1-.79.399 7.349 7.349 0 0 1-2.856.569 7.343 7.343 0 0 1-2.855-.568 6.205 6.205 0 0 1-.79-.4 3.205 3.205 0 0 1-.307-.202l-.005-.004a.749.749 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.246.246 0 0 0-.14-.043H12.75v14.5h4.487a.75.75 0 0 1 0 1.5H6.763a.75.75 0 0 1 0-1.5h4.487V6H9.275a.249.249 0 0 0-.14.043L7.439 7.197c-.29.197-.633.303-.984.303h-.886l3.368 7.68a.75.75 0 0 1-.209.878c-.08.065-.16.126-.31.223a6.077 6.077 0 0 1-.792.433 6.924 6.924 0 0 1-2.876.62 6.913 6.913 0 0 1-2.876-.62 6.077 6.077 0 0 1-.792-.433 3.483 3.483 0 0 1-.309-.221.762.762 0 0 1-.21-.88L3.93 7.5H2.353a.75.75 0 0 1 0-1.5h4.102c.05 0 .099-.015.141-.043l1.695-1.154c.29-.198.634-.303.985-.303h1.974V2.75a.75.75 0 0 1 1.5 0ZM2.193 15.198a5.414 5.414 0 0 0 2.557.635 5.414 5.414 0 0 0 2.557-.635L4.75 9.368Zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.847 5.847 0 0 0 2.547-.576L19.25 9.367Z">
            </path>
        </svg>
        MIT license
    </div>
    <p>Made using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> !</p>
    <p>Access the <a href="https://github.com/Nell15/reportfolio" target="_blank">source code</a>.</p>
</footer>

<style>
    :global(html) {
        font-family:'Inter', sans-serif;
        background-color: #fafbfe;
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
            display: block;
            text-align: center;
            justify-content: center;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #fafbfe;
            transition: all 0.25s ease-in-out;
            visibility: hidden;
        }

        nav.open {
            opacity: 1;
            visibility: visible;
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

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 5em;
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
        transition: all 0.25s ease-in-out;
    }

    footer a:hover {
        font-weight: bold;
    }
</style>