const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const startButton = document.querySelector('.steps__item-button');

export function scrollButton() {
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';        
        }
    })

    scrollToTopBtn.addEventListener("click", scrollToTop);
    startButton.addEventListener('click', scrollToTop);
    
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}