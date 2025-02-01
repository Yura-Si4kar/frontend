const COINS_LIST_URL = 'https://api.coinbase.com/v2/prices/usd/spot';
const CURRENCY_COIN_URL = `https://api.coinbase.com/v2/exchange-rates?currency=`;
const COUNTRIES_LIST_URL = 'https://643684438205915d34f5a44a.mockapi.io/countries';

export function getListData() {
    return fetch(COINS_LIST_URL);
}

export default async function exchange(val) {
    return fetch(CURRENCY_COIN_URL + val).then((res) => res.json());
}

export function getCountriesList() {
    return fetch(COUNTRIES_LIST_URL).then((res) => res.json());
}

export function getCurrentCountry(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=08ea5a38d22551f446579fd0136e6518`;

    return fetch(api).then(response => response.json())
}

export function addCountryToMap(country) {
    return fetch(COUNTRIES_LIST_URL, {
        method: 'POST',
        body: JSON.stringify(country),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json)
}