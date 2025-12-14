<div>
    <p>
        I'm a 21 years old engineering student at N7 (ENSEEIHT)
        specializing in software developmenta and I like building things that people will use.
    </p>
    <p>
        In september 2023, I enrolled in <a href="https://www.enseeiht.fr/en/index.html" target="_blank">N7 (ENSEEIHT)</a> 
        after partaking in the engineering schools entrance exam earlier in May of the same year. I am currently completing 
        the first year of my Master's degree in Software engineering.
    </p>
    <p>
        In august 2025, I enrolled in <a href="https://www.usherbrooke.ca/" target="_blank">Sherbrooke University</a> 
        where I am completing a Master's degree in game development as part of my gap year at N7.
    </p>
    <p> I have recently completed my internship at 
    <a href="https://www.oxydian.fr/" target="blank">Oxydian</a>
     as a software developer working on proprietary software solutions.
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