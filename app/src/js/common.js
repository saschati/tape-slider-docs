import Left from "@saschati/tape-slider/src/direction/left";
import Up from "@saschati/tape-slider/src/direction/up";
import Down from "@saschati/tape-slider/src/direction/down";
import ShiftY from "@saschati/tape-slider/src/direction/shifx/shift-y";
import Tape from "@saschati/tape-slider";

import lozad from "lozad";

window.addEventListener('load', function () {
    /**
     * Tapes
     */
    for (const wrapper of document.querySelectorAll('.js-tape-slider--right')) {
        const tape = new Tape({wrapper});

        tape.run();
    }

    for (const wrapper of document.querySelectorAll('.js-tape-slider--left')) {
        const tape = new Tape({
            wrapper,
            direction: Left
        });

        tape.run();
    }

    for (const wrapper of document.querySelectorAll('.js-tape-slider--up')) {
        const tape = new Tape({
            wrapper,
            direction: Up,
            options: {
                shift: ShiftY
            }
        });

        tape.run();
    }

    for (const wrapper of document.querySelectorAll('.js-tape-slider--down')) {
        const tape = new Tape({
            wrapper,
            direction: Down,
            options: {
                shift: ShiftY
            }
        });

        tape.run();
    }

    /**
     * Scroll Up
     */
    {
        let prevKnownScrollPosition = 0;
        let lastKnownScrollPosition = 0;
        let ticking = false;
        let headerShow = false;

        const header = document.querySelector('.header');

        function showHeader(scrollPos, prevScrollPost) {
            if (scrollPos < prevScrollPost && !headerShow) {
                header.classList.add('header_type_sticky');

                headerShow = true;
            } else if (scrollPos > prevScrollPost) {
                header.classList.remove('header_type_sticky');

                headerShow = false;
            }
        }

        document.addEventListener('scroll', function(e) {
            prevKnownScrollPosition = lastKnownScrollPosition;
            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(function() {
                    showHeader(lastKnownScrollPosition, prevKnownScrollPosition);
                    ticking = false;
                });

                ticking = true;
            }
        }, {passive: true});
    }

    /**
     * Layze
     */
    {
        const observer = lozad();
        observer.observe();
    }
});