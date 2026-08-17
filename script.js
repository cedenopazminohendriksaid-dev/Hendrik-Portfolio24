/* =========================================
   PORTAFOLIO DE HENDRIK CEDEÑO
   JAVASCRIPT
========================================= */


/* =========================================
   TEXTO ANIMADO
========================================= */

const typingElement = document.querySelector(".typing");

const texts = {
    es: "Ingeniero en Sistemas • Cybersecurity Engineer",
    en: "Systems Engineer • Cybersecurity Engineer"
};

let currentLanguage = "es";
let textIndex = 0;
let deleting = false;

function typeText() {

    if (!typingElement) return;

    const text = texts[currentLanguage];

    if (!deleting) {

        typingElement.textContent =
            text.substring(0, textIndex + 1);

        textIndex++;

        if (textIndex >= text.length) {

            deleting = true;

            setTimeout(typeText, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            text.substring(0, textIndex - 1);

        textIndex--;

        if (textIndex <= 0) {

            textIndex = 0;

            deleting = false;
        }
    }

    setTimeout(
        typeText,
        deleting ? 35 : 70
    );
}

typeText();


/* =========================================
   CAMBIO DE IDIOMA
========================================= */

const languageButton =
    document.getElementById("languageBtn");

function changeLanguage() {

    currentLanguage =
        currentLanguage === "es"
            ? "en"
            : "es";

    document.documentElement.lang =
        currentLanguage;


    const elements =
        document.querySelectorAll("[data-es][data-en]");


    elements.forEach(element => {

        element.textContent =
            element.getAttribute(
                `data-${currentLanguage}`
            );

    });


    if (languageButton) {

        languageButton.textContent =
            currentLanguage === "es"
                ? "ES / EN"
                : "EN / ES";

    }


    /*
       Reiniciamos el texto animado
    */

    textIndex = 0;
    deleting = false;

    if (typingElement) {
        typingElement.textContent = "";
    }

}


if (languageButton) {

    languageButton.addEventListener(
        "click",
        changeLanguage
    );

}


/* =========================================
   COMPROBAR FOTO
========================================= */

const profilePhoto =
    document.getElementById("profilePhoto");

const photoFallback =
    document.getElementById("photoFallback");


if (profilePhoto) {

    profilePhoto.addEventListener(
        "error",
        function () {

            console.error(
                "No se pudo cargar ./img/foto.jpg"
            );

            profilePhoto.style.display = "none";

            if (photoFallback) {
                photoFallback.style.display = "flex";
            }

        }
    );

    profilePhoto.addEventListener(
        "load",
        function () {

            console.log(
                "Foto cargada correctamente."
            );

            profilePhoto.style.display = "block";

            if (photoFallback) {
                photoFallback.style.display = "none";
            }

        }
    );

}


/* =========================================
   ANIMACIÓN AL HACER SCROLL
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .future-box, .contact-card, .about-grid"
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================================
   AÑO AUTOMÁTICO
========================================= */

const footer =
    document.querySelector("footer p");


if (footer) {

    footer.textContent =
        `© ${new Date().getFullYear()} Hendrik Said Cedeño Pazmiño`;

}


/* =========================================
   EFECTO DE MOVIMIENTO DE LOS ANILLOS
========================================= */

const heroPhoto =
    document.querySelector(".hero-photo");


if (heroPhoto) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 8;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 8;


            const orbitOne =
                document.querySelector(".orbit-one");

            const orbitTwo =
                document.querySelector(".orbit-two");


            if (orbitOne) {

                orbitOne.style.transform =
                    `translate(${x}px, ${y}px)`;

            }


            if (orbitTwo) {

                orbitTwo.style.transform =
                    `translate(${-x}px, ${-y}px)`;

            }

        }
    );

}


/* =========================================
   MENÚ ACTIVO
========================================= */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach(
                item => item.classList.remove("active")
            );

            link.classList.add("active");

        }
    );

});


console.log(
    "Portfolio de Hendrik cargado correctamente."
);