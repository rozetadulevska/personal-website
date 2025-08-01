document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const closeMenuButton = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.add("open");
    });

    closeMenuButton.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = function () {
        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add("visible");
            }
        });
    };

    fadeInOnScroll();

    window.addEventListener("scroll", fadeInOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const successMessage = document.createElement("div");
        successMessage.className =
            "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4";
        successMessage.innerHTML = `<p><strong>Успешно испратена порака!</strong></p> <p>Ви благодариме за контактирањето, ${name}. Ќе ви одговориме наскоро.</p>`;

        contactForm.parentNode.insertBefore(successMessage, contactForm);

        contactForm.reset();

        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const setActiveLink = function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", setActiveLink);

    setActiveLink();
});