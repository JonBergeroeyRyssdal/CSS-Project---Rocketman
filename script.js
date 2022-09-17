const hamburger = document.querySelector(".hamburger");
const underNav = document.querySelector(".nav__under-section");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    underNav.classList.toggle("active");
})