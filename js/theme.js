(function () {
  const STORAGE_KEY = 'theme-preference';

  const getPreferredTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const updateButtonIcon = (theme) => {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      const icon = toggleBtn.querySelector('.theme-toggle__icon');
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
    }
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateButtonIcon(theme);
  };

  // 1. Aplicación inmediata del tema al documento
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  // 2. Función para enlazar el botón una vez que el header exista
  function bindThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn || toggleBtn.dataset.bound) return;

    toggleBtn.dataset.bound = 'true';
    updateButtonIcon(document.documentElement.getAttribute('data-theme') || 'light');

    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Escuchar cuando el DOM esté listo y cuando los partials terminen de cargarse
  document.addEventListener('DOMContentLoaded', bindThemeToggle);
  document.addEventListener('partialsLoaded', bindThemeToggle);

  // 3. Reacción a cambios del sistema si no hay preferencia manual
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();