export function tabClick(e) {
    if (e.target.classList.contains('advantages__tabs-list')) {
        const tabId = e.target.dataset.id;
        const tabs = document.getElementsByClassName('advantages__tabs-list');
        const sections = document.getElementsByClassName('advantages__tabs-content');

        [...tabs].forEach((tab, i) => {
            tab.classList.remove('active_tab');
            sections[i].classList.remove('active_content');
        });

        tabs[tabId - 1].classList.add('active_tab');
        sections[tabId - 1].classList.add('active_content');
    }
}