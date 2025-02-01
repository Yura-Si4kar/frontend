import { addCountryToMap, getCountriesList, getCurrentCountry } from "./api.mjs";
import { contries } from "./data.mjs";
const MODAL_BTN_CLASS = 'countries__actions-connect';
const CANSEL_BTN_CLASS = 'countries__btns-reject';
const CLOSE_BTN_CLASS = 'countries__header-close';
const SUBMIT_BTN_CLASS = 'countries__btns-response';
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const selectTemplate = document.querySelector('#select_template').innerHTML;
const listTemplate = document.querySelector('#list_template').innerHTML;

const countriesList = document.querySelector('.countries__list');
const map = document.querySelector('.countries-map');
const paths = map.querySelectorAll('path');
const modals = document.querySelector('.countries-wrapper');
const modalSearchInput = document.querySelector('.countries-input');
const selectBlock = document.querySelector('.countries-select');


let list = [];

export function mapOperations() {
    getList();

    createSelectList();
    modalSearchInput.addEventListener('input', createSelectList);
    document.addEventListener('click', modalsActions);
}

function modalsActions(e) {
    if (e.target.classList.contains(MODAL_BTN_CLASS)) {
        openModal();
    } else if (e.target.classList.contains(CANSEL_BTN_CLASS) || e.target.classList.contains(CLOSE_BTN_CLASS)) {
        closeModal();
    } else if (e.target.classList.contains(SUBMIT_BTN_CLASS)) {
        submitForm()
    }
}

function getList() {
    return getCountriesList()
        .then((data) => {
            list = data;
        }).then(() => {
            getPosition().then(currentCountry => {
                renderList();
                checkMap(currentCountry);
                hoverEffect();
            });
        })
        .catch((e) => console.error(e))
        .finally(() => {
            modalSearchInput.value = '';
        });
}

function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            getCurrentCountry(position).then((data) => {
                console.log("Поточна країна:", data.sys.country);
                resolve(data.sys.country);
            });
        }, reject);
    });
}

function submitForm() {
    const selectedCountry = getSelectedCountry();
    const countryObject = contries.find((country) => country.iso === selectedCountry);

    const countryExists = list.some((el) => el.name === countryObject.name);

    if (countryExists) {
        alert('Ми вже працюємо в даній країні!');
    } else {
        addCountryToMap(countryObject).then(() => {
            closeModal();
            getList();
        });
    }
}

function checkMap(currentCountry) {
    const myCountry = list.find((item) => item.iso === currentCountry);

    paths.forEach((path) => {
        const pathId = path.getAttribute('id');
        
        if (myCountry && pathId === myCountry.iso) {
            path.style.fill = 'yellow';
        } else {
            const matchingListCountry = list.find((item) => item.iso === pathId);
            
            if (matchingListCountry) {
                path.style.fill = '#6FD6BD';
                path.style.opacity = '0.5';
            }
        }
    });
}

function renderList() {
    countriesList.innerHTML = list.map(generateListHTML).join('\n');
}

function generateListHTML(item) {
    return listTemplate.replace('{{name}}', item.name)
        .replace('{{country}}', item.iso.toLowerCase())
        .replace('{{iso}}', item.iso)
        .replace('{{img}}', item.flag);
}

function openModal() {
    modals.classList.add('show')
}

function closeModal() {
    modals.classList.remove('show');
}

function createSelectList() {
    const filteredList = filteredCountriesSelectList(contries);
    selectBlock.innerHTML = filteredList.map(createSelectHTML); 
}

function filteredCountriesSelectList(list) {
    return list.filter((el) => el.name.toLowerCase().includes(modalSearchInput.value.toLowerCase()));
}

function createSelectHTML(country) {
    return selectTemplate.replace('{{iso}}', country.iso)
                        .replace('{{name}}', country.name);
}

function getSelectedCountry() {
    return selectBlock.value;
}

function hoverEffect() {
    const links = document.querySelectorAll('.countries__list-link');
    links.forEach((link) => {
        link.addEventListener('mouseover', () => {
            for (let i = 0; i < paths.length; i++) {
                if (link.getAttribute('value') === paths[i].getAttribute('id')) {
                    paths[i].style.fill = changeColor();
                }
            }
        })

        link.addEventListener('mouseout', () => {
            getList()
        })

        link.addEventListener('click', (e) => {
            e.preventDefault();
            for (let i = 0; i < paths.length; i++) {
                if (link.getAttribute('value') === paths[i].getAttribute('id')) {
                    paths[i].style.fill = changeColor();
                }
            }
        })
    })
}

function changeColor() {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandom()];
    }

    return hexColor;
}

function getRandom() {
    return Math.floor(Math.random() * hex.length);
}