import acardion from "./modules/acardion.mjs";
import burger from "./modules/burger.mjs";
import { exchangerBlockOptions } from "./modules/exchangerBlockOptions.mjs";
import { mapOperations } from "./modules/map.mjs";
import { scrollButton } from "./modules/scrollButton.mjs";
import changeLanguage from "./modules/translate.mjs";

document.addEventListener('DOMContentLoaded', init);

function init() {
    acardion();
    burger()
    mapOperations();
    changeLanguage();
    exchangerBlockOptions();
    scrollButton();
}