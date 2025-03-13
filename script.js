document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".zoom-in, .fade-in, .slide-in");
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav ul li a");

    function showElements() {
        animatedElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "scale(1)";
            }
        });
    }

    function changeHeaderBackground() {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 123, 255, 0.9)";
            header.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.background = "linear-gradient(to right, #007bff, #0056b3)";
            header.style.boxShadow = "none";
        }
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", showElements);
    window.addEventListener("scroll", changeHeaderBackground);
    navLinks.forEach(link => link.addEventListener("click", smoothScroll));

    showElements();
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".map-button").style.display = "block";
});


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
