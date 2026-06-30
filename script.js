/* ======================================================
   THE KATANGURI'S KITCHEN
   Premium Restaurant Website
====================================================== */

// ============================
// Sticky Navbar
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ============================
// Back To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "flex";
        topBtn.style.alignItems = "center";
        topBtn.style.justifyContent = "center";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ============================
// Menu Filter
// ============================

const filterButtons = document.querySelectorAll(".menu-filter button");

const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        menuCards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.display = "block";

                card.classList.add("fade-up");

            } else {

                card.style.display = "none";

            }

        });

    });

});

// ============================
// Active Navigation
// ============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ============================
// Close Mobile Menu After Click
// ============================

const navItems = document.querySelectorAll(".nav-link");

const menu = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (menu.classList.contains("show")) {

            new bootstrap.Collapse(menu).hide();

        }

    });

});

// ============================
// AOS Animation
// ============================

AOS.init({

    duration: 1000,

    once: true,

    offset: 100,

    easing: "ease-in-out"

});

// ============================
// Smooth Fade for Menu Cards
// ============================

menuCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});

// ============================
// Current Year (Optional)
// ============================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("🍗 The Katanguri's Kitchen Loaded Successfully");
