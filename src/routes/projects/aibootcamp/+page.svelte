<script>
    import { base } from '$app/paths'
</script>

<link rel="stylesheet" href="{base}/styles/article.css">

<main>
    <div>
        <div class="back_div">
            <a href="{base}/#projects" class="back">Back to projects</a>
            <img src="{base}/img/icons/arrow-right.svg" alt="right-arrow">
        </div>
        <h1>AI Bootcamp</h1>
        <h2>Project Goal</h2>
        <p>
            This project is our project for our applied game AI course at the University of Sherbrooke.
            In this project, our professor provided us with a set of challenges which we had to solve with a our own AI agent.<br>
        </p>
        <p>
            The challenges consists of maps where several agents (the yellow pawns) must each reach one of the available exits (the green tiles)
            in a grid of hexagonal tiles.
            <br>
            <span style="color:red">TODO: mettre une image !!</span>
        </p>

        <h2>Our solution</h2>
        <p>
            The solution we came up with is a state-based utility AI taking decisions using the Sense-Think-Act principle
            and following set of behaviors we defined.
        </p>
        <p>
            In our solution, each agents takes its decisions alone. This means that although all agents have a common
            knowledge of the map they're exploring, they do not have any hive mind making common decisions and instead
            all take individual decisions creating at times an emergent form of collaboration.
        </p>
        <p>So, how exactly does it work?</p>

        <h2>The state machine</h2>
        <p>
            Each of our agents works as a state machine with each state serving a specific purpose.<br>
            There is a total of 5 states which are:
        </p>
        <ul>
            <li>Exploring</li>
            <li>Seeking</li>
            <li>Waiting</li>
            <li>SearchHiddenDoors</li>
            <li>Helping</li>
        </ul>
        <span style="color:red">TODO: mettre une image !!</span>

        <h3>Exploring</h3>
        <p>
            TODO
        </p>
        <h3>Seeking</h3>
        <p>
            TODO
        </p>
        <h3>Waiting</h3>
        <p>
            TODO
        </p>
        <h3>Search Hidden Doors</h3>
        <p>
            TODO
        </p>
        <h3>Helping</h3>
        <p>
            TODO
        </p>

        <h2>Results</h2>
        <p>
            TODO
        </p>

        <h2>Credits</h2>
        <p>This project was made in collaboration with:
            <a href="https://www.linkedin.com/in/sylvain-brunet-807b62331/">Sylvain Brunet</a>,
            <a href="https://www.linkedin.com/in/alexandre-gagnon-ultralex/">Alexandre Gagnon</a> and
            <a href="https://www.linkedin.com/in/landrydemersthierry/">Thierry Demers-Landry</a>
            as part of our master's degree in game development. You can try the game for free and learn more on our
            <a href="https://github.com/SylvainBRUNET37/FishEngine">Github repository</a>.
        </p>

        <h2>Tools used</h2>
        <ul>
            <li>
                <a href="https://en.wikipedia.org/wiki/C%2B%2B">
                    C++
                </a>
            </li>
            <li>
                <a href="https://git-scm.com/">
                    Git
                </a>
            </li>
            <li>
                <a href="https://visualstudio.microsoft.com/">
                    Visual Studio
                </a>
            </li>
        </ul>
    </div>
</main>
