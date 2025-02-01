import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
const template = document.querySelector('#slider_template').innerHTML;
const wrapper = document.querySelector('.swiper-wrapper');

Swiper.use([Navigation, Pagination, Autoplay]);

export function buildSlider() {
    let html = ``;

    for (let i = 0; i < 9; i++) {
        html += template.replace(`{{src}}`, `../img/slider/slide${i + 1}.jpg`)
                        .replace(`{{srcset}}`, `../img/slider/slide${i + 1}.webp`);       
    }

    wrapper.innerHTML = html;
}

export function slider() {
    new Swiper('.swiper', {    
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
            delay: 5000,
            stopOnLastSlide: false,
        },
    });
}