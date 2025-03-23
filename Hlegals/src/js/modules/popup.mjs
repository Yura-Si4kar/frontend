// Відкриття/закриття модального вікна
export function popupOptions(e) {
    const closeBtnClass = 'popup__body-icon';
    const consultationBtnClass = 'main__block-item';
    const popup = document.querySelector('.popup');
    
    if (e.target.classList.contains(consultationBtnClass)) {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
    } else if (e.target.classList.contains(closeBtnClass)) {
        // e.stopPropagation();
        e.preventDefault();
        popup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}