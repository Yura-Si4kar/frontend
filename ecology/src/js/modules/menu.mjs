const actionClass = 'activation';
const burger = document.querySelector('.header__navigation-burger');
const links = document.querySelectorAll('.header__navigation-links');
const menuList = document.querySelector('.header__navigation-list');
const menuButton = document.querySelector('.header__navigation-burger');

export function menu() {
    window.addEventListener('DOMContentLoaded', deleteLogo);
    window.addEventListener('resize', deleteLogo);    
    burger.addEventListener('click', toggleBurgerMenu);
    links.forEach((link) => link.addEventListener('click', closeMenu));
}

function toggleBurgerMenu() {
    menuList.classList.toggle(actionClass);
    menuButton.classList.toggle(actionClass);
}

function closeMenu(e) {
    menuList.classList.remove(actionClass);
    menuButton.classList.remove(actionClass);

    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const headerHeight = document.querySelector('.header').offsetHeight;

    const targetElement = document.getElementById(targetId);

    window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
    });
}

function deleteLogo() {
    if (window.innerWidth > 991) {
        links[0].style.display = 'none';
    } else {
        links[0].style.display = 'block';
    }
}