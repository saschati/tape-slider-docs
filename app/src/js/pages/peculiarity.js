import Tape from "@saschati/tape-slider";
import Right from "@saschati/tape-slider/src/direction/right";
import bounce from "@saschati/tape-slider/src/animate/timing/bounce";

window.addEventListener('load', function () {
    /**
     * Problem timing function
     */
    {
        const tape = new Tape({
            wrapper: document.querySelector('.js-tape-slider_problem_timing'),
            direction: Right,
            options: {
                duration: 7000,
                timing: bounce,
            }
        });

        tape.run();
    }

    /**
     * Problem collision
     */
    {
        const tape = new Tape({
            wrapper: document.querySelector('.js-tape-slider_problem_collision'),
            direction: Right,
            options: {
                duration: 1000,
            }
        });

        tape.run();
    }

});