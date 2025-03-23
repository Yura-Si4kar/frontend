import Swiper, {Autoplay, Navigation, Pagination} from "swiper";
import { isWebp } from "./modules/isWebp.mjs";
import { mobileMenuOptions } from "./modules/mobileMenu.mjs";
import { popupOptions } from "./modules/popup.mjs";
import { tabClick } from "./modules/tabs.mjs";
import { isContactPage } from "./modules/isContactPage.mjs";

// Налаштування слайдера
Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper('.swiper', {    
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 1,
            loopedSlides: 4,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 2,
            loopedSlides: 4,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 3,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
    },
});

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('click', popupOptions);
document.addEventListener('click', mobileMenuOptions);
document.addEventListener('click', tabClick);

function init() {
    // Перевірка на підтримку формату WebP
    isWebp();
    isContactPage();
}