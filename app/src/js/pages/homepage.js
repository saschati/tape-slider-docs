import initCssEditor from '../heplers/codemirrorcss';
import initJsEditor from '../heplers/codemirrorjs';

import docsJs from '../docs/mirror/js/homepage.js'
import docsCss from '../docs/mirror/css/homepage.js'

import Tape from "@saschati/tape-slider";
import Right from "@saschati/tape-slider/src/direction/right";
import Left from "@saschati/tape-slider/src/direction/left";
import bounce from "@saschati/tape-slider/src/animate/timing/bounce";
import circ from "@saschati/tape-slider/src/animate/timing/circ";
import linage from "@saschati/tape-slider/src/animate/timing/linage";
import quad from "@saschati/tape-slider/src/animate/timing/quad";

window.addEventListener('load', function () {
    /**
     * Js Codemirror
     */
    for (const elem of document.querySelectorAll('.js-mirror-js')) {
        initJsEditor(elem, docsJs[elem.dataset.mirror]);
    }

    /**
     * Css Codemirror
     */
    for (const elem of document.querySelectorAll('.js-mirror-css')) {
        initCssEditor(elem, docsCss[elem.dataset.mirror]);
    }

    /**
     * Duration example
     */
    {
        const tape = new Tape({
            wrapper: document.querySelector('.js-tape-slider_duration'),
            direction: Right,
            options: {
                duration: 1000,
            }
        });

        tape.run();
    }

    /**
     * Timing function example
     */
    {
        const tape = new Tape({
            wrapper: document.querySelector('.js-tape-slider_timing_bounce'),
            direction: Right,
            options: {
                duration: 5000,
                timing: bounce,
                optimize: false,
            }
        });

        tape.run();
    }
    {
        const tape = new Tape({
            wrapper: document.querySelector('.js-tape-slider_timing_circ'),
            direction: Right,
            options: {
                duration: 5000,
                timing: circ,
                optimize: false,
            }
        });

        tape.run();
    }
    {
        const tape = new Tape({
            wrapper: document.querySelector('.js-tape-slider_timing_linage'),
            direction: Right,
            options: {
                duration: 5000,
                timing: linage,
                optimize: false,
            }
        });

        tape.run();
    }
    {
        const tape = new Tape({
            wrapper: document.querySelector('.js-tape-slider_timing_quad'),
            direction: Right,
            options: {
                duration: 5000,
                timing: quad.bind(null, 2),
                optimize: false,
            }
        });

        tape.run();
    }

    /**
     * Insert example
     */
    {
        {
            const tape = new Tape({
                wrapper: document.querySelector('.js-tape-slider_insert_prepend'),
                direction: Left,
                options: {
                    insert: 'prepend',
                }
            });

            tape.run();
        }
    }

    /**
     * elasticDistance false example
     */
    {
        {
            const tape = new Tape({
                wrapper: document.querySelector('.js-tape-slider_elasticDistance_false'),
                options: {
                    elasticDistance: false,
                }
            });

            tape.run();
        }
    }

    /**
     * optimize false example
     */
    {
        {
            const tape = new Tape({
                wrapper: document.querySelector('.js-tape-slider--right_optimize_false'),
                options: {
                    optimize: false,
                }
            });

            tape.run();
        }
    }

    /**
     * Method pause/unpause
     */
    {
        {
            const wrapper = document.querySelector('.js-tape-slider_pause_resume');
            const tape = new Tape({wrapper});

            tape.run();

            wrapper.addEventListener('mouseenter', e => void tape.pause());
            wrapper.addEventListener('mouseleave', e => tape.resume());
        }
    }
});