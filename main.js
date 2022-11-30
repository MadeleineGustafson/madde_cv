window.addEventListener("DOMContentLoaded",main);

function main() {
 
    getDropdown();
}


function getDropdown () {
    const hamburgerMenu = document.getElementById("hamburger");
    hamburgerMenu.addEventListener("click", toggleMenu);
}

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('dropdown');
}