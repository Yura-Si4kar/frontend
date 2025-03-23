export function isContactPage() {
    if (window.location.href.includes('contact')) {

        const iconElement = document.querySelector('.popup__body-icon');
        if (iconElement) {
            iconElement.style.display = 'none';
        }
    }
}