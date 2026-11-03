async function loadPartial(slot) {
  const path = slot.dataset.include;

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`No se pudo cargar ${path}: HTTP ${response.status}`);
    }

    slot.outerHTML = await response.text();
  } catch (error) {
    console.error(error);
    slot.textContent = "No se pudo cargar un componente de la página.";
    slot.setAttribute("role", "alert");
  }
}

function configureNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (!toggle || !navigation) {
    throw new Error("Falta el botón o el contenedor de navegación del sitio.");
  }

  const mobileViewport = window.matchMedia("(max-width: 63.999rem)");

  function updateVisibility() {
    if (!mobileViewport.matches) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú de navegación");
    }

    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    navigation.hidden = mobileViewport.matches && !isExpanded;
  }

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.setAttribute(
      "aria-label",
      isExpanded ? "Abrir menú de navegación" : "Cerrar menú de navegación",
    );
    updateVisibility();
  });

  navigation.addEventListener("click", (event) => {
    if (!mobileViewport.matches || !(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú de navegación");
    updateVisibility();
  });

  mobileViewport.addEventListener("change", updateVisibility);
  updateVisibility();
}

async function initializeSiteShell() {
  const slots = [...document.querySelectorAll("[data-include]")];
  await Promise.all(slots.map(loadPartial));

  if (document.querySelector('[role="alert"]')) {
    return;
  }

  configureNavigation();
}

initializeSiteShell().catch((error) => {
  console.error("No se pudo inicializar la navegación del sitio.", error);
});
