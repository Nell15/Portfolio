<script>
    import { base } from '$app/paths'
</script>

<main>
    <a href="{base}/#projects">Back to projects</a>
    <h1>Small Scientific Calculation Model</h1>
    <div>
        <h2>Project Goal</h2>
        <p>
            The goal of this project was to create a script creation tool for simple calculations in order to
             enable people without coding knowledge to create execute mathematical calculations on a computer.
             This system is greatly inspired by Unreal Engine's Blueprint system which is often used for simple
             scripts in games created with Unreal Engine.
        </p>
        <p>
            This project is follows the principle of <b>Model Driven Engineering</b> and makes extensive
             use of Model-to-Model and Model-to-Text tranformations to convert a script created from the
             graphical tool to an executable Python scripts that computes the result.
        </p>
        <img src="{base}/img/projects/IDM/blueprint.png" alt="calculation script">
        <p>
            The image above is an example of a script created to compute
             <i>-max(a, b) + c</i> where <i>a</i> and <i>b</i> are use inputs and
             <i>c</i> is a constant.
        </p>
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
    }
</style>