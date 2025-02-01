import { closeMobileMenu } from "./burger.mjs";
import { content } from "./data.mjs";

const languageSelect = document.querySelector('.header__actions-language');
const links = document.querySelectorAll('.header__language-link');

export default function changeLanguage() {
    let languageValue = navigator.language;
    languageSelect.value = languageValue;
    translatePage(languageValue);
    
    languageSelect.addEventListener('change', () => {
        languageValue = languageSelect.value;
        translatePage(languageValue)
    })
    
    links.forEach((link) => link.addEventListener('click', () => {
        languageValue = link.value;
        languageSelect.value = languageValue;
        translatePage(languageValue);
        closeMobileMenu();
    }))
}

function translatePage(language) {
    const translatedContent = content[language];
    const menuLinks = document.querySelectorAll('.language');
    
    menuLinks.forEach(link => {
        const translationKey = link.getAttribute('data-translate');
        if (translatedContent && translatedContent.hasOwnProperty(translationKey)) {
            link.textContent = translatedContent[translationKey];
        }
    });
}

