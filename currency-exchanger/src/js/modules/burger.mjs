const menuWrapper = document.querySelector('.header__wrapper');
const menuLinks = document.querySelectorAll('.header__menu-link');

export default function burger() {
    const burger = document.querySelector('.header__actions-burger');
    burger.addEventListener('click', () => {
        menuWrapper.classList.toggle('open');
        document.body.classList.toggle('lock');
    });

    onMenuLinksClick();
}

export function closeMobileMenu() {
    menuWrapper.classList.remove('open');
    document.body.classList.remove('lock');
}

function onMenuLinksClick() {
    menuLinks.forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    })
}