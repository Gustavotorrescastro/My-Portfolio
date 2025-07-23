document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const currentTheme = localStorage.getItem('theme');

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (themeToggleButton) {
            if (theme === 'dark') {
                themeToggleButton.innerHTML = '<i class="bi bi-sun"></i>';
            } else {
                // ALTERADO: Ícone de lua simples, sem estrelas
                themeToggleButton.innerHTML = '<i class="bi bi-moon"></i>';
            }
        }
    }

    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    const nav = document.querySelector('nav');

    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            themeToggleButton.classList.add('is-changing');
            setTimeout(() => {
                themeToggleButton.classList.remove('is-changing');
            }, 500);
        });
    }
});