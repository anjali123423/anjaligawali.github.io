/* =====================================================
   ANJALI GAWALI PORTFOLIO
   JavaScript
===================================================== */


/* ============================
   SCROLL REVEAL
============================ */

const sections = document.querySelectorAll(
    ".section"
);


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


sections.forEach(function(section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(section);

});


/* ============================
   3D PROFILE EFFECT
============================ */

const profile =
    document.querySelector(".profile-frame");


if (profile) {

    profile.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                profile.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width
                - 0.5;

            const y =
                (event.clientY - rect.top)
                / rect.height
                - 0.5;


            profile.style.transform =
                `perspective(900px)
                 rotateY(${x * 8}deg)
                 rotateX(${-y * 6}deg)
                 scale(1.02)`;

        }
    );


    profile.addEventListener(
        "mouseleave",
        function() {

            profile.style.transform =
                "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";

        }
    );

}


/* ============================
   ACTIVE NAVIGATION
============================ */

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


const pageSections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function() {

        let current =
            "home";


        pageSections.forEach(
            function(section) {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function(link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* ============================
   MOUSE GLOW
============================ */

document.addEventListener(
    "mousemove",
    function(event) {

        const x =
            event.clientX;

        const y =
            event.clientY;


        document.body.style.background =
            `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(100,50,255,0.07),
                transparent 320px
            ),
            #03040b
            `;

    }
);


/* ============================
   BUTTON CLICK EFFECT
============================ */

document.querySelectorAll(
    ".btn"
).forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                button.style.transform =
                    "scale(0.96)";

                setTimeout(
                    function() {

                        button.style.transform =
                            "";

                    },
                    120
                );

            }
        );

    }
);
