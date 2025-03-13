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

function adjustContactSection() {
    const contactContainer = document.querySelector(".contact-container");
    const heading = contactContainer.querySelector("h2, h3"); // Select h2 or h3
    const paragraph = contactContainer.querySelector("p");

    if (window.innerWidth >= 320 && window.innerWidth <= 475) {
        if (heading.tagName === "H2") {
            const newHeading = document.createElement("h3");
            newHeading.innerHTML = heading.innerHTML; // Copy same content
            newHeading.className = heading.className; // Copy same classes
            newHeading.style.fontSize = "28px"; // ✅ Set h3 size to 22px
            contactContainer.replaceChild(newHeading, heading);
        } else {
            heading.style.fontSize = "28px"; // ✅ Ensure h3 stays at 22px
        }
        paragraph.style.fontSize = "14px";  // Small text for better fit
        paragraph.style.lineHeight = "1.4"; // Adjust spacing
    } else {
        if (heading.tagName === "H3") {
            const newHeading = document.createElement("h2");
            newHeading.innerHTML = heading.innerHTML; // Copy same content
            newHeading.className = heading.className; // Copy same classes
            contactContainer.replaceChild(newHeading, heading);
        }
        paragraph.style.fontSize = "18px"; // Default size for larger screens
        paragraph.style.lineHeight = "1.6"; // Default spacing
    }
}

// **Event Listeners**
window.addEventListener("load", adjustContactSection);
window.addEventListener("resize", adjustContactSection);
