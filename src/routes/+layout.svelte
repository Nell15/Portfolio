<nav>
    <ul class="nav__links">
        <li><a href="/">Home</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
    </ul>
</nav>

<main>
    <slot />
</main>

<style>
    .nav__links {
        list-style: none;
    }

    .nav__links li {
        display: inline-block;
    }

    .nav__links li a {
        color: #000000;
        transition: all 0.3 ease 0s;
    }

    nav {
        position:sticky;
        top:20px;
    }
</style>