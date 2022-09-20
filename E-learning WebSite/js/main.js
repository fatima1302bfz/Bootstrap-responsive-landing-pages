//====== start header block ======//

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

//====== End header block ======//
//====== Start counter block ======//
let counter = document.querySelectorAll(".count");
let items = Array.from(counter);
items.map((item) => {
    let count = item.innerHTML; //get the number in start
    item.innerHTML = "";
    let countNumber = 0;

    function counterUP() {
        item.innerHTML = countNumber++;
        if (countNumber > count) {
            clearInterval(stop);
        }
    }
    let stop = setInterval(() => {
        counterUP();
    }, item.dataset.speed / count);
});
//====== End counter block ======//
//====== Start footer block ======//
let year = document.getElementById("year");
let date = new Date();
year.innerHTML = date.getFullYear();
//====== End footer block ======//


//====== Add animation to sections on scrolling ======//
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

//====== display Registration form =======//

let registration = document.querySelector(".registration"),
    registreBTN = document.querySelector(".registre"),
    closeBTN = document.querySelector(".close");
registreBTN.addEventListener("click", function() {
    registration.style.display = "block"
})
closeBTN.addEventListener("click", function() {
    registration.style.display = "none"
})