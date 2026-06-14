// Главный файл для дополнительной инициализации и глобальных функций
(function() {
    // Плавный скролл для навигации (дублирование на случай, если браузер не поддерживает)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href');
            if (hash && hash !== '#') {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Добавляем класс для определения мобильных устройств
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
    }
    
    // Консольное приветствие
    console.log('%c🩸 Blood Owners V4 | CS2 Team | Loaded Successfully', 'color: #7eb0ff; font-size: 16px; font-weight: bold;');
    
    // Анимация для карточек при загрузке
    window.addEventListener('load', () => {
        const cards = document.querySelectorAll('.card:not(.stat)');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
            }, index * 50);
        });
    });
})();

// Глобальная функция для закрытия панели (доступна из HTML)
window.closePanel = function() {
    const panel = document.getElementById('panel');
    if (panel) {
        panel.style.display = 'none';
        panel.innerHTML = '';
    }
};
