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
            mainContent.style.transition = 'transform 0.3s ease'; // Smooth transition
        } else {
            mainContent.style.transform = 'translateY(0)';
        }
    });
    