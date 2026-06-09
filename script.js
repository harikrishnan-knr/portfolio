// Smooth scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Contact form demo
const form = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    successMessage.textContent =
        "Thank you! Your message has been received.";

    form.reset();
});