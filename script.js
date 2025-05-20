document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const closeMenuButton = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.add("open");
    });

    closeMenuButton.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Scroll animations
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

    // Initial check on page load
    fadeInOnScroll();

    // Check on scroll
    window.addEventListener("scroll", fadeInOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    // Form submission
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message

        // Create success message
        const successMessage = document.createElement("div");
        successMessage.className =
            "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4";
        successMessage.innerHTML = `
                          <p><strong>Успешно испратена порака!</strong></p>
                          <p>Ви благодариме за контактирањето, ${name}. Ќе ви одговориме наскоро.</p>
                      `;

        // Insert success message before form
        contactForm.parentNode.insertBefore(successMessage, contactForm);

        // Reset form
        contactForm.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Active navigation link based on scroll position
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

    // Check on scroll
    window.addEventListener("scroll", setActiveLink);

    // Initial check
    setActiveLink();
});