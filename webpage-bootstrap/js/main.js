let navbar = document.querySelector(".navbar");
window.onscroll = () => {
    document.documentElement.scrollTop > 20 ? navbar.classList.add("scroll-on") : navbar.classList.remove("scroll-on")

}
let icon = document.querySelector(".navbar i");
icon.onclick = () => {
    icon.classList.toggle("active");
}
let links = document.querySelectorAll(".navbar .nav-link");

links.forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector("a.active").classList.remove("active");
        link.classList.add("active");
    });
});