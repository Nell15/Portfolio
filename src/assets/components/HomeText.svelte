<div>
    <p>
        I'm a 20 years old engineering student at N7 (ENSEEIHT)
        specializing in Computer Science. I am interested in object-oriented programming,
        (especially applied to game development), parallel computing and computer graphics.
    </p>
    <p>
        My computer science journey started in junior high school when I started learning Scratch for game development.
        This lead to 10th grade when I started taking engineering science classes and learned programming on Arduino boards. 
        Over the years, I have made several projects either alone or in a team, which grew my interest for computer science even more.
    </p>
    <p>
        In september 2023, I enrolled in <a href="https://www.enseeiht.fr/en/index.html" target="_blank">N7 (ENSEEIHT)</a> 
        after partaking in the engineering schools entrance exam earlier in May of the same year. I am currently completing 
        the first year of my Master's degree in Software engineering.
    </p>
    <p> I have recently completed my internship at 
    <a href="https://www.sncf-voyageurs.com/fr/decouvrez-notre-entreprise/nos-directions-et-filiales/direction-du-materiel/" target="blank">SNCF (Eastern Engineering Cluster - Data)</a>
     as a developer working on AR (Augmented Reality) experiences in Unreal Engine.
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