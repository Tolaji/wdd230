// Hamburger menu toggle functionality
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.querySelector('.main-nav');
    const mainContent = document.querySelector('main');

    if (!hamburger || !mainNav || !mainContent) {
        console.error('Hamburger, main nav, or main content element not found.');
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mainNav.classList.toggle('open');

        if (mainNav.classList.contains('open')) {
            mainContent.style.transform = 'translateY(0vh)';
            mainContent.style.transition = 'transform 0.3s ease';
        } else {
            mainContent.style.transform = 'translateY(0)';
        }
    });
    

    // Dark-Mode switch functionality
    document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#switch');
    const themeLink = document.querySelector('#theme-link');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            themeLink.href = 'styles/dark-mode.css';
        } else {
            themeLink.href = 'styles/base.css';
        }
        });
    });
