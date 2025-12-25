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
        <h2>Architecture</h2>
        <p>
            Our solution is composed of 5 main components:
        </p>
        <ul>
            <li>The tile systems</li>
            <li>The object systems</li>
            <li>The agent systems</li>
            <li>The score systems</li>
            <li>The pathfinder</li>
        </ul>
        <h3>Systems</h3>
        <p>
            The first three systems (tile, object, and agent) are the containers used to store information
            regarding the current state of the map and to perform queries on that information.<br>
            The score system, however, does not store any data; instead, it calculates the score of a
            given tile based on the current state of the map and the agents. This system is responsible for
            computing what we define as utility.<br>
        </p>
        <h3>Pathfinder</h3>
        <p>
            Our pathfinder is modified version of the A* algorithm using the cubic distance formula to
            compute distances since our maps are using hexagonal tiles.
        </p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/modified_A_star.png" alt="Our custom A*">
            <p>How our custom A* works</p>
        </div>
        <p>
            It is possible for maps to have missing tiles, blocking obstacles, or blocking agents, so it's
            imperative to check this when trying to find a path inside our map and avoid the blocking obstacle.
        </p>

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
        <span style="color:red">TODO: mettre une image !!</span>
        <h3>Seeking</h3>
        <p>
            TODO
        </p>
        <span style="color:red">TODO: mettre une image !!</span>
        <h3>Waiting</h3>
        <p>
            This state is reached when the agent arrives on his chosen goal tile.
            In this state, the agent just waits, it has reached its goal.
        </p>
        <span style="color:red">TODO: mettre une image !!</span>
        <h3>Search Hidden Doors</h3>
        <p>
            This state is reached when all the accessible tiles have a score of 0 for an exploring
            agent. Since it has explored all there was to explore, then surely there are some secret
            hidden paths somewhere !
        </p>
        <p>
            The agent will thus try to find doors that would have been disguised as walls.
            There are two possible actions it can choose to do so:
        </p>
        <ul>
            <li>Knock on a wall around them that hasn't been tested yet.</li>
            <li>Move to another tile that has more untested walls.</li>
        </ul>
        <p>
            With these two simple actions, we're garanteed to find a hidden door if it exists.
        </p>
        <p>
            Once a door has been revealed, the agent has new tiles to explore so it can go back to the
            exploration state.
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
            <a href="https://github.com/Nell15/AI-Bootcamp">Github repository</a>.
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
