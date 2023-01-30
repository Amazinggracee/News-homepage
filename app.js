const menu = document.querySelector('.menu-list');
const hamburger = document.querySelector('.btn-hamburger');
const closeIcon = document.querySelector('.closeIcon');
const burgerIcon = document.querySelector('.burgerIcon');
const body = document.querySelector('#all');

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        burgerIcon.style.display = 'block';
        body.classList.remove('blur');
    } else {
        menu.classList.add('showMenu');
        body.classList.add('blur');
        closeIcon.style.display = 'block';
        burgerIcon.style.display = 'none';
    }
}
hamburger.addEventListener('click', toggleMenu);
