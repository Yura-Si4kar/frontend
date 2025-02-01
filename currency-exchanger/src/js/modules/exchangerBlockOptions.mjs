import exchange, { getListData } from "./api.mjs";
const template = `<li class="coin-item" data-value="{{data}}">{{data}}</li>`;

const exchangeForm = document.querySelector('.exchanger__form');
const sumBlock = document.querySelector('.exchanger__form-sum');
const numberInput = document.querySelector('.exchanger__form-numbers');
const popupTemplate = document.querySelector('.coin-list_template').innerHTML;
const inputs = document.querySelectorAll('.exchanger__form-item_input');
const btcRateBlock = document.querySelector('.exchanger__form-rate');

let list = [];
let currentInput;

export function exchangerBlockOptions() {
    inputs.forEach((input) => {
        input.addEventListener('focus', onInputFocusActions);
        input.addEventListener('blur', onInputBlurActions);
    });

    exchangeForm.addEventListener('submit', onExchangeFormSubmit);
    
    setInterval(() => {
        exchange('BTC').then((data) => {
            let BTC;
            BTC = data.data.rates['USDT']
            btcRateBlock.innerHTML = `1 BTC ≈ $${BTC}`;
        });
    }, 5000);
}

async function onExchangeFormSubmit(e) {
    e.preventDefault();
    
    let exchangeCoins = {};
    let price = null;
    
    inputs.forEach((inp) => {
        exchangeCoins[inp.name] = inp.value;
    })

    exchangeCoins.numbers = getNumbersValue();

    if (validation(exchangeCoins)) {
        await exchange(exchangeCoins.pay_with).then((data) => price = data.data.rates[exchangeCoins.send_to]);
        
        let sum = coinsCalculation(price, exchangeCoins.numbers);
        
        sumBlock.innerHTML = `$${sum.toFixed(4)}`;
    }

    clearInputs();
}

function onInputFocusActions() {
    const parent = this.parentNode;
    parent.insertAdjacentHTML('beforeend', popupTemplate);

    const coinPopup = document.querySelector('.coin-popup');
    const coinList = coinPopup.querySelector('.coin-list');

    currentInput = this;

    fillingTheList(parent, coinPopup, coinList, currentInput);

    coinPopup.classList.add('show');

    this.addEventListener('input', function () {
        const filteredList = searching(this.value, list);
        updateList(coinList, filteredList);
        addItemClickListeners(coinList); // Додавання слухачів після оновлення списку
    });
}

// Функція для додавання слухачів подій на елементах списку
function addItemClickListeners(coinsParent) {
    const coinItems = coinsParent.querySelectorAll('.coin-item');

    coinItems.forEach((item) => {
        item.addEventListener('mousedown', (event) => {
            event.preventDefault(); // Запобігає втраті фокусу
            let value = item.getAttribute('data-value');
            
            currentInput.value = value;

            const coinPopup = document.querySelector('.coin-popup');
            coinPopup.classList.remove('show');
            coinsParent.innerHTML = ''; // Очищення списку
            parent.removeChild(coinPopup);
        });
    });
}

function onInputBlurActions() {
    const coinPopup = document.querySelector('.coin-popup');
    if (coinPopup) {
        coinPopup.parentNode.removeChild(coinPopup);
    }
}

async function fillingTheList(parent, coinPopup, coinsParent, currentInput) {
    const response = await getListData();
    const data = await response.json();
    list = data.data.map(el => el.base);
    let sortedList = list.sort();
    
    const html = sortedList.map(element => template.replace(/{{data}}/g, element)).join('');
    
    coinsParent.innerHTML = html;
    
    const coinItems = coinsParent.querySelectorAll('.coin-item');
    
    coinItems.forEach((item) => {
        item.addEventListener('mousedown', (event) => {
            event.preventDefault(); // Запобігає втраті фокусу
            let value = item.getAttribute('data-value');
            
            currentInput.value = value;

            coinPopup.classList.remove('show');
            parent.removeChild(coinPopup);
        });
    });
}

function validation(val) {
    for (let key in val) {
        if (!validationRule(val[key])) {
            alert('Заповніть всі поля!!!');
            return false;
        }
    }
    return true; 
}

function validationRule(val) {
    return val !== '';
}

function coinsCalculation(a,b) {
    return a * b;
}

function getNumbersValue() {
    return numberInput.value;
}

function searching(value, coins) {
    return coins.filter(el => el.toLowerCase().includes(value.toLowerCase()));
}

function updateList(coinList, newList) {
    const html = newList.map(element => template.replace(/{{data}}/g, element)).join('');
    coinList.innerHTML = html;
}

function clearInputs() {
    inputs.forEach((inp) => inp.value = '');
    numberInput.value = '';
}