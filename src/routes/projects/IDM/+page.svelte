<script>
    import { base } from '$app/paths'
</script>

<main>
    <div>
        <!-- <p> -->
            <a href="{base}/#projects" class="back">Back to projects</a>
        <!-- </p> -->
        <h1>Small Scientific Calculation Model</h1>
        <h2>Project Goal</h2>
        <p>
            The goal of this project was to create a script creation tool for simple calculations in order to
             enable people without coding knowledge to create execute mathematical calculations on a computer.
             This system is greatly inspired by Unreal Engine's Blueprint system which is often used for simple
             scripts in games created with Unreal Engine.
        </p>
        <p>
            This project is follows the principle of <b>Model Driven Engineering</b> and makes extensive
             use of Model-to-Model and Model-to-Text tranformations to be validate scripts created from the
             graphical tool and convert them to executable Python scripts.
        </p>
        <div class="img_block">
            <img src="{base}/img/projects/IDM/blueprint.png" alt="calculation script">
            <p>
                The image above is an example of a script created to compute
                 <i>-max(a, b) + c</i> where a and b are use inputs and c is a constant.
            </p>
        </div>
        <p>This project was made with <a href="https://theobessel.fr" target="_blank">Théo Bessel</a> as part of a larger 5-person project.</p>
        <h2>Tools used</h2>
        <ul>
            <li>
                <a href="https://projects.eclipse.org/projects/modeling.emf.emf">
                Eclipse Modelling Framework (EMF)
                </a>
            </li>
            <li>
                <a href="https://gradle.org/">
                    Gradle
                </a>
            </li>
            <li>
                <a href="https://www.java.com/en/">
                    Java
                </a>
            </li>
            <li>
                <a href="https://www.obeosoft.com/en/products/eclipse-sirius">
                    Sirius
                </a>
            </li>
            <li>
                <a href="https://www.python.org/">
                    Python
                </a>
            </li>
        </ul>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: #fafbfe;
        padding: 0px 25rem;
        flex-wrap: wrap;
    }

    .back {
        color: #020409;
        /* text-decoration: underline; */
        display: inline-block;
        position: relative;
        transition: all 0.25s ease-in-out;
    }

    .back:hover {
        font-weight: 600;
    }

    h1 {
        margin-top: 2rem;
    }

    ul > li {
        margin-bottom: 0.25rem;
    }

    li > a, p > a {
        color:blueviolet;
        display: inline-block;
        position: relative;
    }

    li > a::after, p > a::after, .back::after {
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

    li > a:hover::after, p > a:hover::after, .back:hover::after {
        transform: scaleX(1);
        transform-origin: bottom;
    }

    .img_block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img_block > p {
        margin-top: 0.5rem;
    }

    @media screen and (max-width: 800px) {
        main {
            padding: 0 0.5rem;
        }
    }
</style>