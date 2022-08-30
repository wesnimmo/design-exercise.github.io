const button = document.getElementById('button');
const navBackground = document.getElementById('navigation-background');
const navigation = document.getElementById('navigation-nav');
const navIcon = document.getElementById('navigation-icon');


const navLinks = [...document.getElementsByClassName('navigation-link')];

const toggleMenu = () => {
    button.classList.toggle('toggle');
    navBackground.classList.toggle('scale-background');
    navigation.classList.toggle('toggle-nav');
}


button.addEventListener('click', toggleMenu);

navLinks.forEach(navLink => navLink.addEventListener('click', toggleMenu))





