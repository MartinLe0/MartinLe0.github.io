const themeToggleButton = document.getElementById('theme-toggle');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '🌙'; 
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.textContent = '🌞'; 
        localStorage.setItem('theme', 'light');
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = '🌙';
    } else {
        themeToggleButton.textContent = '🌞';
    }
}

loadTheme();
