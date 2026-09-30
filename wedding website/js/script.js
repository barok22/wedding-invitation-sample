/* =========================================================
   WEDDING WEBSITE
   JOHN & MARY

   Animations
   Countdown
   Navigation
   Photo Lightbox
   Scroll Reveal
========================================================= */
/* =========================================================
   WEDDING OPENING EXPERIENCE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const saveDateScreen =
        document.getElementById("saveTheDateScreen");

    const invitationFront =
        document.getElementById("invitationFront");

    const openingSeconds =
        document.getElementById("openingSeconds");

    const openingDays =
        document.getElementById("openingDays");

    const timerProgress =
        document.getElementById("timerProgress");

    const saveDateProgress =
        document.getElementById("saveDateProgress");

    const enterInvitation =
        document.getElementById("enterInvitation");


    /* =====================================================
       SETTINGS
    ===================================================== */

    const OPENING_DURATION = 10;

    const WEDDING_DATE =
        new Date("December 20, 2026 15:00:00");


    /* =====================================================
       PREVENT SCROLLING
    ===================================================== */

    document.body.style.overflow = "hidden";


    /* =====================================================
       CALCULATE DAYS LEFT
    ===================================================== */

    function updateOpeningDays() {

        const now = new Date();

        const difference =
            WEDDING_DATE.getTime() -
            now.getTime();

        const days =
            Math.max(
                0,
                Math.ceil(
                    difference /
                    (1000 * 60 * 60 * 24)
                )
            );


        if (openingDays) {

            openingDays.textContent =
                String(days).padStart(2, "0");

        }

    }


    updateOpeningDays();


    /* =====================================================
       OPENING COUNTDOWN
    ===================================================== */

    let remaining =
        OPENING_DURATION;


    function updateTimer() {

        if (openingSeconds) {

            openingSeconds.textContent =
                remaining;

        }


        /*
         * Circle circumference
         *
         * 2 × PI × 44
         */

        const circumference =
            2 * Math.PI * 44;


        const percentage =
            remaining /
            OPENING_DURATION;


        const offset =
            circumference *
            (1 - percentage);


        if (timerProgress) {

            timerProgress.style.strokeDashoffset =
                offset;

        }


        if (saveDateProgress) {

            const progress =
                (
                    (OPENING_DURATION - remaining)
                    /
                    OPENING_DURATION
                ) * 100;


            saveDateProgress.style.width =
                progress + "%";

        }

    }


    updateTimer();


    const openingTimer =
    setInterval(function () {

        remaining--;

        updateTimer();

        if (remaining <= 0) {

            clearInterval(openingTimer);

            showInvitation();

        }

    }, 1000);


    /* =====================================================
       SHOW INVITATION FRONT PAGE
    ===================================================== */

    function showInvitation() {

        saveDateScreen.classList.add("hide");

        setTimeout(function () {

            invitationFront.classList.add("show");

        }, 10);

    }


    /* =====================================================
       OPEN MAIN WEDDING WEBSITE
    ===================================================== */

    if (enterInvitation) {

        enterInvitation.addEventListener(
            "click",
            function () {

                invitationFront.classList.remove(
                    "show"
                );


                setTimeout(function () {

                    document.body.style.overflow =
                        "";


                    window.scrollTo({
                        top: 0,
                        behavior: "instant"
                    });


                    /*
                     * Completely hide invitation
                     */

                    invitationFront.style.display =
                        "none";

                }, 1200);

            }
        );

    }


});

/* =========================================================
   INVITATION SLIDESHOW DOTS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const dots =
        document.querySelectorAll(
            ".invitation-dots span"
        );


    if (!dots.length) {
        return;
    }


    let currentSlide = 0;


    setInterval(function () {

        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        dots[currentSlide].classList.add("active");


        currentSlide++;

        if (currentSlide >= dots.length) {

            currentSlide = 0;

        }

    }, 4000);

});

/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("pageLoader");


    setTimeout(function () {

        loader.classList.add("loaded");

    }, 700);

});



/* =========================================================
   WEDDING COUNTDOWN
========================================================= */

/*
    CHANGE THIS DATE TO YOUR ACTUAL WEDDING DATE.

    Format:

    "December 20, 2026 15:00:00"

    15:00 = 3:00 PM
*/

const weddingDateTime =
    new Date(
        "December 20, 2026 15:00:00"
    ).getTime();



function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
    weddingDateTime - now;


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    /*
        If the wedding date has passed.
    */

    if (distance <= 0) {

        daysElement.innerText = "00";

        hoursElement.innerText = "00";

        minutesElement.innerText = "00";

        secondsElement.innerText = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    updateCountdownNumber(
        daysElement,
        days
    );

    updateCountdownNumber(
        hoursElement,
        hours
    );

    updateCountdownNumber(
        minutesElement,
        minutes
    );

    updateCountdownNumber(
        secondsElement,
        seconds
    );

}



function updateCountdownNumber(
    element,
    value
) {

    const formatted =
        String(value).padStart(2, "0");


    if (element.innerText !== formatted) {

        element.innerText = formatted;


        /*
            Restart the animation.
        */

        element.classList.remove("tick");


        void element.offsetWidth;


        element.classList.add("tick");

    }

}



updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =========================================================
   NAVBAR
========================================================= */

const navbar =
    document.getElementById(
        "mainNavbar"
    );



function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}



window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        /*
                            Once visible,
                            we don't need to
                            observe it anymore.
                        */

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -40px 0px"
        }

    );



revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );



function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 150;


            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            const target =
                link.getAttribute("href");


            if (
                target ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}



window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================================================
   MOBILE NAVBAR
========================================================= */

const navbarCollapse =
    document.getElementById(
        "navbarWedding"
    );


const mobileNavLinks =
    document.querySelectorAll(
        "#navbarWedding .nav-link"
    );



mobileNavLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                if (
                    window.innerWidth <
                    992
                ) {

                    const bsCollapse =
                        bootstrap.Collapse
                            .getInstance(
                                navbarCollapse
                            );


                    if (bsCollapse) {

                        bsCollapse.hide();

                    }

                }

            }
        );

    }
);



/* =========================================================
   PHOTO LIGHTBOX
========================================================= */

const photoItems =
    document.querySelectorAll(
        ".photo-item"
    );


const lightbox =
    document.getElementById(
        "photoLightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );



photoItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                const image =
                    item.querySelector(
                        "img"
                    );


                if (!image) {
                    return;
                }


                lightboxImage.src =
                    image.src;


                lightboxImage.alt =
                    image.alt;


                lightbox.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



function closeLightbox() {

    lightbox.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}



lightboxClose.addEventListener(
    "click",
    closeLightbox
);



lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);



/* =========================================================
   ESC KEY CLOSE LIGHTBOX
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            if (
                lightbox.classList.contains(
                    "show"
                )
            ) {

                closeLightbox();

            }

        }

    }
);


// =====================================================
// SAVE THE DATE OPENING SCREEN
// =====================================================

const saveDateScreen =
    document.getElementById("saveTheDateScreen");

const openingDays =
    document.getElementById("openingDays");

const saveDateProgress =
    document.getElementById("saveDateProgress");


// Wedding date
const openingWeddingDate =
    new Date("December 20, 2026 00:00:00");


// Opening duration
// 15 seconds
const OPENING_DURATION = 15;

let openingSeconds = OPENING_DURATION;


// =====================================================
// DAYS LEFT
// =====================================================

function updateDaysLeft() {

    const now = new Date();

    const difference =
    openingWeddingDate.getTime() - now.getTime();

    const days =
        Math.max(
            0,
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            )
        );

    openingDays.textContent = days;
}


// Initial countdown
updateDaysLeft();


// Update days every minute
setInterval(updateDaysLeft, 60000);


// =====================================================
// OPENING PROGRESS
// =====================================================

function updateOpeningProgress() {

    const elapsed =
        OPENING_DURATION - openingSeconds;

    const percentage =
        Math.min(
            100,
            (elapsed / OPENING_DURATION) * 100
        );

    saveDateProgress.style.width =
        percentage + "%";
}


// =====================================================
// START OPENING
// =====================================================

const openingTimer =
    setInterval(function () {

        openingSeconds--;

        updateOpeningProgress();

        if (openingSeconds <= 0) {

            clearInterval(openingTimer);

            saveDateProgress.style.width = "100%";

            setTimeout(function () {

                saveDateScreen.classList.add("hide");

                // Show your existing invitation front
                setTimeout(function () {

                    const invitationFront =
                        document.getElementById(
                            "invitationFront"
                        );

                    if (invitationFront) {
                        invitationFront.classList.add("show");
                    }

                }, 1400);

            }, 600);

        }

    }, 2000);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    }
);