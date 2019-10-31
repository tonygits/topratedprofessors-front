function toForm() {
    document.querySelector("#scroll-form").scrollIntoView({
        behaviour: "smooth"
    });
}

function toggleMobileMenu() {
    var mainMenu = document.getElementById("mobile-menu");
    mainMenu.classList.toggle("none");
}