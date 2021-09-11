const menuButton = document.querySelector('#menuButton');
const menuBlock = document.querySelector('#menuBlock');

function toggleMenu(){
    menuBlock.classList.toggle("menu-open");

}

menuButton.addEventListener('click', toggleMenu);