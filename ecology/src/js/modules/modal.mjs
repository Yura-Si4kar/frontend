const OPEN_BTN_CLASS = 'intro-button';
const CLOSE_BTN_CLASS = 'question__form-close';
const CANCELL_BTN_CLASS = 'question__form-cancel';
const SEND_BTN_CLASS = 'question__form-send';
const question = document.querySelector('.question__form-area');
const answerChoise = document.querySelector('.question__form-select');
const contact = document.querySelector('.question__form-contact');
const modal = document.querySelector('.question');
const name = document.querySelector('.question__form-name');

export function controlModal() {
    document.addEventListener('click', (e) => {        
        if (e.target.classList.contains(OPEN_BTN_CLASS)) {
            e.preventDefault();
            openMenu();
        } else if (e.target.classList.contains(CLOSE_BTN_CLASS) || e.target.classList.contains(CANCELL_BTN_CLASS)) {
            e.preventDefault();
            removeMenu();
        } else if (e.target.classList.contains(SEND_BTN_CLASS)) {
            sendQuestion();
        }
    })
}

async function sendQuestion() {
    const question = createMessage();
    if (validation(question)) {
        // Створюємо текстовий рядок для повідомлення
        let text = `Ім'я: ${question.name};  Як відповісти: ${question.answer};  Контакт: ${question.contact};  Запитання: ${question.question};`;
        
        // Токен бота та чат-ідентифікатор
        const botToken = '6932345489:AAG-2meN5hYbvWN2kNDF-p6zq6ZCNaRPRFQ';
        const chatId = '834503939';
        
        // Відправляємо питання в Telegram через Bot API
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`)
        .then(response => response.json())
        .then(data => {
            resetValue();
            removeMenu();
        })
        .catch(error => {
            console.error('Error:', error);
        });  
    }
}

function openMenu() {
    modal.classList.add('show');
    document.body.classList.add('lock');
} 

function removeMenu() {
    modal.classList.remove('show');
    document.body.classList.remove('lock');
}

function validation(val) {
    for (let key in val) {
        if (!validationRule(val[key])) {
            alert('Заповніть всі поля!!!');
            return false; // Зупиняємо цикл, якщо знайдено невалідний елемент
        }
    }
    return true; 
}

function createMessage() {
    let message = {};
    
    message.question = getQuestionValue();
    message.name = getNameValue();
    message.answer = getAnswerChoiseValue();
    message.contact = getContactValue();
    
    return message;
}

function validationRule(val) {
    return val !== '';
}

function resetValue() {
    question.value = '';
    answerChoise.value = '';
    contact.value = '';
    name.value = '';
}

function getQuestionValue() {
    return question.value;
}

function getAnswerChoiseValue() {
    return answerChoise.value;
}

function getContactValue() {
    return contact.value;
}

function getNameValue() {
    return name.value;
}