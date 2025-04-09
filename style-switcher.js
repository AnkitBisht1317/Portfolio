document.addEventListener("DOMContentLoaded", function() {
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
    const styleSwitcher = document.querySelector(".style-switcher");
    
    styleSwitcherToggle.addEventListener("click", () => {
        styleSwitcher.classList.toggle("open");
    });

    window.addEventListener("scroll", () => {
        if (styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });
    
    const alternateStyles = document.querySelectorAll(".alternate-style");

    function setActiveStyle(color) {
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    }

    const dayNight = document.querySelector(".day-night");

    dayNight.addEventListener("click", () => {
        const icon = dayNight.querySelector("i");
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
        
        // Store preference in localStorage
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });

    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }

    // Make function available globally
    window.setActiveStyle = setActiveStyle;
});