let hamburgerico = document.querySelector('.hamburger-ico')
let Iconclose = document.querySelector('.icon-close')
let Iconhamburger = document.querySelector('.icon-hamburger')
let Navbarmenu = document.querySelector('.navbar-menu')

hamburgerico.addEventListener("click", function () {
    Navbarmenu.classList.toggle('navbar-menu-open');
    Iconclose.classList.toggle('hamburger-open-true');
    Iconhamburger.classList.toggle('hamburger-open-false');

})