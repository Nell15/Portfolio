<script>
    import { base } from '$app/paths'
    import BackButton from '$assets/components/BackButton.svelte';
</script>

<link rel="stylesheet" href="{base}/styles/article.css">

<main>
    <div>
        <BackButton></BackButton>

        <h1>AI Bootcamp</h1>
        <h2>Project Goal</h2>
        <p>
            This project is our project for our applied game AI course at the University of Sherbrooke.
            In this project, our professor provided us with a set of challenges which we had to solve with a our own AI agent.<br>
        </p>
        <p>
            The challenges consists of maps where several agents (the yellow pawns) must each reach one of the available exits (the green tiles)
            in a grid of hexagonal tiles.
        </p>
        <div class="img_block">
            <img src="https://raw.githubusercontent.com/Nell15/AI-Bootcamp/main/images/L12.png" alt="Example map">
            <p>Example: one of the levels (12)</p>
        </div>
        <p>
            You can also see on the left of the image above that there are additional requirements to solve
            a level. For instance, the example above requires our agents to reach their goals in exactly 6 turns,
            and they must take less than a second to plan their next move.
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
            Our pathfinder is modified version of the A* algorithm using the
            <a href="https://www.redblobgames.com/grids/hexagons/#distances" target="blank">cubic distance</a>
            formula to compute distances since our maps are using hexagonal tiles.
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
        <p>
            Each of these states contain the behavior and logic that makes the agent plan their next move.
        </p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/state_machine.png" alt="The behavior state machine">
            <p>The graph representation of our state machine.</p>
        </div>

        <h3>Exploring</h3>
        <p>
            The <span style="font-style: italic;">Exploring</span> state is the one all agent start in.<br>
            In this state, the agent is exploring the map in search for a path to a goal tile.
        </p>
        <p>
            This is where our utility AI comes into play. The agent doesn't randomly roam around the map
            in hopes of finding an exit: instead, it moves towards the most relevant tile around.<br>
            To to that, the agent uses the score system to calculate a score for each of the tiles accessible
            from its current position and moves toward the tile with the highest score.
        </p>
        <p>
            Now that we have an idea of how our agent will move, we need to figure out how we're going to
            define what's useful or not.<br>
            This is what our team came up with:
        </p>
        <p>The base score for a tile is equal its number of accessible unexplored neighbors.</p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/base_score.png" alt="Base score">
            <p>A visual representation for the base score calculation.</p>
        </div>
        <p>
            In addition to that base score, a tile might also have bonus points if it contains objects:
        </p>
        <ul>
            <li>
                Closed doors give a fix bonus.
            </li>
            <li>
                Pressure plates give a bonus that is weighted by the inverse of the distance to the nearest
                linked door, squared.
            </li>
        </ul>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/door_bonus.png" alt="Door bonus score.">
            <p>A visual representation of the port giving a bonus to its tile's score.</p>
        </div>
        <p>
            Finaly, the sum of the base score and bonuses is weighted by the inverse of the squared distance
            between the tile and the exploring agent. This ensures that we're favoritizing tiles closer to the
            agent.
        </p>
        <p>
            Lastly, we decided to drop the score of explored tiles to zero to make already explored tiles
            unappealing, which along with the distance weight makes an efficient exploration.
        </p>

        <h3>Seeking</h3>
        <p>
            This state is reached when an agent found a path from their position to their goal tile.
            The agent will then try to follow said path.
        </p>
        <p>
            When in this state, the agent chooses the next move to go to its chosen goal tile if it is not
            blocked by a non-blocking agent. Alright but what exactly is a non-blocking agent ?<br>
        </p>
        <p>
            A non-blocking agent is simply an agent that is not in the "Waiting" state, because if it is the case
            then we are garanteed that agent that is going to move someday so our blocked agent can just wait until
            the other one has moved to continue on their way.
        </p>
        <p>
            If the agent blocking the path is a blocking agent (ie: a "Waiting" one), then our "Seeking" agent can't
            blindly follow their path and must go back to the exploration state to find a new path.
        </p>

        <h3>Waiting</h3>
        <p>
            This state is reached when the agent arrives on his chosen goal tile.
            In this state, the agent just waits, it has reached its goal.
        </p>

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
            The last state we need to talk about is <span style="font-style: italic;">Helping</span>.
        </p>
        <p>
            This state is reached when an agent walks on a pressure plate and it just stays there. It's
            essentially just waiting, but until the agent is done helping others. When the agent is done,
            it goes back to its previous state (either <span style="font-style: italic;">Exploring</span>
            or <span style="font-style: italic;">Seeking</span>).
        </p>
        <p>
            The agent is allowed to exit the <span style="font-style: italic;">Waiting</span> state if every
            other agent is either:
        </p>
        <ul>
            <li>In the <span style="font-style: italic;">Waiting</span> state</li>
            <li>
                or in the <span style="font-style: italic;">Seeking</span> and its remaining path does not
                go through the door that is opened by the helping agent.
            </li>
        </ul>
        <p>
            This second rule might be a bit confusing so I'm going to illustrate it.
        </p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/helping_1.png" alt="Agents needing help.">
        </div>
        <p>In this case, both agent are needing each other to access a goal tile.</p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/helping_2.png" alt="Agent 1 starts helping.">
        </div>
        <p>
            After some exploration, one lands on a pressure plate, so its starts helping the other.
            Which is represented by the handshake on this picture.
        </p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/helping_3.png" alt="Agent 1 is done helping.">
        </div>
        <p>
            Thanks to the first agent opening the door, the second agent saw a reachable goal tile in
            front of them so it entered the <span style="font-style: italic;">Seeking</span> state and
            started walking towards said goal.
            After traversing the door, its path does not go through the door again, so the agent at the top
            has no reason to continue helping the second one and can go back to its previous state.
        </p>

        <h2>Results</h2>
        <p>
            Our solution managed to solve every level we had to test it on, which is a huge win !
        </p>
        <p>
            That being said, it has a few limitations, namely complicated collaboration challenges which
            aren't supported like goal swapping.
        </p>
        <p>
            Our solution is also pretty great in terms of time efficiency although it could be even further optimized.
        </p>
        <p>
            I tried measuring the time efficiency by running five times every level and measuring the duration of each turn
            for each agent, these are the results I got:
        </p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/perfs_1.png" alt="Turn duration distribution.">
            <p>Turn duration distribution.</p>
        </div>
        <p>
            Altought we got a few spikes of high duration turns, these are very inconsistant and wildly differ from
            one execution to another, so I think they're actially irrelevant when trying to compute a mean value for
            a turn's duration. I noticed that 97.31% of turns took less than two milliseconds, so I isolated these values:
        </p>
        <div class="img_block">
            <img src="{base}/img/projects/AIBootcamp/perfs_2.png" alt="Turn duration distribution <2ms.">
            <p>Turn duration distribution (for turns under 2ms).</p>
        </div>
        <p>
            This gave me a far better distribution to work with, so I calculated a mean value of 375 microseconds,
            which is far less than 15 milliseconds which is the shortest time limitation in all the levels we had available,
            so I really happy with that.
        </p>

        <h2>Credits</h2>
        <p>This project was made in collaboration with:
            <a href="https://www.linkedin.com/in/sylvain-brunet-807b62331/" target="blank">Sylvain Brunet</a>,
            <a href="https://www.linkedin.com/in/alexandre-gagnon-ultralex/" target="blank">Alexandre Gagnon</a> and
            <a href="https://www.linkedin.com/in/landrydemersthierry/" target="blank">Thierry Demers-Landry</a>
            as part of our master's degree in game development. You can try the game for free and learn more on our
            <a href="https://github.com/Nell15/AI-Bootcamp" target="blank">Github repository</a>.
        </p>

        <h2>Tools used</h2>
        <ul>
            <li>
                <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="blank">
                    C++
                </a>
            </li>
            <li>
                <a href="https://git-scm.com/" target="blank">
                    Git
                </a>
            </li>
            <li>
                <a href="https://visualstudio.microsoft.com/" target="blank">
                    Visual Studio
                </a>
            </li>
        </ul>
    </div>
</main>
