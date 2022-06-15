export default {
    install: `npm i @saschati/tape-slider`,

    usage: `import Tape from "@saschati/tape-slider";

// This event is required for the plugin to work correctly
window.addEventListener('load', function () {
   // By default, the ribbon moves to the right
   const tape = new Tape({wrapper: document.querySelector('.tape')});

   tape.run();
});`,

    advanced: `// Tape direction classes, they implement methods for calculating and distance to the desired point
import Right from "@saschati/tape-slider/src/direction/right";
import Left from "@saschati/tape-slider/src/direction/left";
import Up from "@saschati/tape-slider/src/direction/up";
import Down from "@saschati/tape-slider/src/direction/down";
// Offset classes, these classes are responsible for reproducing the movement of the object in the tape
import ShiftY from "@saschati/tape-slider/src/direction/shifx/shift-y";
import ShiftX from "@saschati/tape-slider/src/direction/shifx/shift-x";
// A linear function for calculating how progress should be calculated
import linage from "@saschati/tape-slider/src/animate/timing/linage";
// The class of the tape itself
import Tape from "@saschati/tape-slider";

// This event is required for the plugin to work correctly
window.addEventListener('load', function () {
    const tape = new Tape({
        wrapper: document.querySelector('.tape'), // The wrapper field must be a DOM Element object
        direction: Right, // "Right | Left | Up | Down" The field responsible for the direction currently has 4 directions, by default Right
        options: {
            shift: ShiftX, // "ShiftX | ShiftY" The field responsible for the movement of the ribbon for horizontal is ShiftX and vertical ShiftY
            duration: 20000, // The field responsible for the scroll speed of the tape, the default is 20000
            timing: linage, // This field is responsible for linear functions for which time will be calculated according to the example of cubic-bezier from css
            insert: 'append', // The field responsible for the method of adding clones to the tape is required in some cases which will be described below
            elasticDistance: true, // This field indicates that you need to calculate the size of the tape, taking into account also the size of its elements, the default is true
        }
    });

    // Run tape
    tape.run();
    // Pause tape
    tape.pause();
    // Unpause tape
    tape.unpause();
    // Destroy tape
    tape.destroy();
});`,

    docs_wrapper: `import Tape from "@saschati/tape-slider";

const tape = new Tape({
    ...
    wrapper: document.querySelector('.tape'),
    ...
});`,

    docs_direction: `import Right from "@saschati/tape-slider/src/direction/right";
import Left from "@saschati/tape-slider/src/direction/left";
import Up from "@saschati/tape-slider/src/direction/up";
import Down from "@saschati/tape-slider/src/direction/down";
import Tape from "@saschati/tape-slider";

const tape = new Tape({
    ...
    direction: Left,
    ...
});`,

    docs_options_shift: `import ShiftY from "@saschati/tape-slider/src/direction/shifx/shift-y";
import ShiftX from "@saschati/tape-slider/src/direction/shifx/shift-x";
import Tape from "@saschati/tape-slider";

const tape = new Tape({
    ...
    options: {
        shift: ShiftY
    },
    ...
});`,

    docs_options_duration: `import Tape from "@saschati/tape-slider";

const tape = new Tape({
    ...
    options: {
        duration: 1000
    },
    ...
});`,

    docs_options_timing: `import Tape from "@saschati/tape-slider";
import linage from "@saschati/tape-slider/src/animate/timing/linage";
import linage from "@saschati/tape-slider/src/animate/timing/bounce";
import linage from "@saschati/tape-slider/src/animate/timing/circ";
import linage from "@saschati/tape-slider/src/animate/timing/quad";

const tape = new Tape({
    ...
    options: {
        duration: 5000,
        timing: linage
    },
    ...
});`,

    docs_options_timing_quad: `// Where timeFraction is a value between 0 and 1
function quad(n, timeFraction) {
    return Math.pow(timeFraction, n)
}`,

    docs_options_insert: `import Tape from "@saschati/tape-slider";

const tape = new Tape({
    ...
    options: {
        insert: 'append',
    },
    ...
});`,

    docs_methods_run: `import Tape from "@saschati/tape-slider";

const tape = new Tape({...});

tape.run();`,

    docs_methods_destroy: `import Tape from "@saschati/tape-slider";

const tape = new Tape({...});
...
tape.destroy();`,

    docs_methods_pause: `import Tape from "@saschati/tape-slider";

const tape = new Tape({...});
...
tape.pause();`,

    docs_methods_unpause: `import Tape from "@saschati/tape-slider";

const tape = new Tape({...});
...
tape.unpause();`,

    docs_methods_pause_unpause: `import Tape from "@saschati/tape-slider";

const wrapper = document.querySelector('.tape');
const tape = new Tape({wrapper});

tape.run();

wrapper.addEventListener('mouseenter', e => void tape.pause());
wrapper.addEventListener('mouseleave', e => tape.unpause());`,

    docs_options_elasticDistance: `import Tape from "@saschati/tape-slider";

const tape = new Tape({
    ...
    options: {
        elasticDistance: true,
    },
    ...
});`,
};