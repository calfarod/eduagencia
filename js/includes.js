async function loadIncludes() {
  const elements = document.querySelectorAll('[data-include]');

  for (const el of elements) {
    const file = el.getAttribute('data-include');
    if (!file) continue;

    try {
      const response = await fetch(file);
      if (response.ok) {
        el.outerHTML = await response.text();
      } else {
        el.innerHTML = `<!-- Error al cargar ${file}: ${response.status} -->`;
      }
    } catch (err) {
      el.innerHTML = `<!-- No se pudo cargar ${file} -->`;
      console.error(`Error cargando ${file}:`, err);
    }
  }

  // Notificar al sistema que los partials (y el header) ya están insertados en el DOM
  document.dispatchEvent(new CustomEvent('partialsLoaded'));
}

document.addEventListener('DOMContentLoaded', loadIncludes);

function setupMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('primary-navigation');

  if (!toggleBtn || !navMenu || toggleBtn.dataset.bound) return;
  toggleBtn.dataset.bound = 'true';

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      navMenu.setAttribute('hidden', '');
    } else {
      navMenu.removeAttribute('hidden');
    }
  });

  // Opcional: cerrar el menú al hacer clic en un enlace
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('hidden', '');
      }
    });
  });
}

// Vincular tanto al cargar el DOM como al terminar de cargar los partials
document.addEventListener('DOMContentLoaded', setupMobileMenu);
document.addEventListener('partialsLoaded', setupMobileMenu);