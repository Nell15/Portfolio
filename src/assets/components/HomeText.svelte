<div>
    <p>
        I'm a final-year software engineering student at <a href="https://www.enseeiht.fr/en/index.html" target="_blank">N7 (ENSEEIHT)</a>
        specializing in software development and architecture and I enjoy building things with a meaningful impact on users.
    </p>
    <p>
        I also took a gap year during which I enrolled at <a href="https://www.usherbrooke.ca/" target="_blank">Sherbrooke University</a> 
        where I completed a Master's degree in game development as part of my gap year at N7.
    </p>
    <p> I have recently completed my internship at
    <a href="https://www.ludia.com/" target="blank">Ludia</a>
     as a tools programmer, where I did software and fullstack development.
    </p>
</div>

<style>
    p > a {
        color:blueviolet;
        display: inline-block;
        position: relative;
    }

    p > a::after{
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

    p > a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom;
    }
</style>