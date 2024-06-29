<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</head>

<nav>
    <ul class="nav__links">
        <li><a href="/">Home</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/experience">Experience</a></li>
    </ul>
</nav>

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
    }
</style>