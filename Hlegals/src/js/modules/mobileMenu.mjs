// Відкриття/закриття мобільного меню
export function mobileMenuOptions(e) {
    if (e.target.classList.contains('header-light__menu-icon')) {
        document.querySelector('.header-light__mobile').style.width = '100%';
        document.body.style.overflow = 'hidden';
    } else if (e.target.classList.contains('header-light__mobile-close')) {
        document.querySelector('.header-light__mobile').style.width = '0';
        document.body.style.overflow = 'auto';
    }
}