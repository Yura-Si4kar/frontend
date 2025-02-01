import { animation } from "./modules/animation.mjs";
import { isWebp } from "./modules/isWebP.mjs";
import { menu } from "./modules/menu.mjs";
import { controlModal } from "./modules/modal.mjs";
import { buildSlider, slider } from "./modules/slider.mjs";

document.addEventListener('DOMContentLoaded', init);

function init() {
    isWebp();
    menu();
    buildSlider();
    slider();
    animation();
    controlModal();
}