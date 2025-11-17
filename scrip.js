// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Glow effect on click
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        link.classList.add("active-glow");

        setTimeout(() => {
            link.classList.remove("active-glow");
        }, 400);
    });
});
