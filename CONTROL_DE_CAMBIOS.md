# CONTROL DE VERSIONES Y EXPERIMENTACIÓN SEGURA — EDUAGENCIA

Aquí tienes la versión completa y robusta de tu archivo CONTROL_DE_CAMBIOS.md. Integra el concepto de etiquetas inmutables (Git Tags) para garantizar que la versión 1.0 quede congelada y sea accesible al instante con un solo comando, junto a una lista de verificación paso a paso y la guía de recuperación exacta.

Este documento detalla el ciclo completo para crear un hito inmutable de la **Versión 1.0**, aislar experimentos en una rama secundaria, validar componentes responsivos/estéticos y consolidar la **Versión 2.0** sin riesgo de sobreescritura.

---

## 1. Congelar y Respaldar la Versión 1.0 (Inmutable)

Antes de alterar cualquier línea de código, nos aseguramos de que el estado actual quede registrado y etiquetado con un **Tag** de Git. Un tag funciona como un marcador de lectura permanente en la historia del proyecto.

Desde la carpeta raíz del proyecto (`eduagencia`):

```bash
# 1. Asegurar que estamos en la rama principal
git checkout main

# 2. Verificar que no haya cambios sueltos sin guardar
git status

# 3. Guardar el estado base (en caso de haber cambios pendientes)
git add .
git commit -m "chore: congelar estado base previo a refactorizacion visual"

# 4. Crear la etiqueta inmutable de la Version 1.0
git tag -a v1.0 -m "Release version 1.0 - Estado base funcional estable"

# 5. Respaldar en GitHub tanto la rama main como la etiqueta
git push origin main
git push origin v1.0
```

>Garantía: La etiqueta v1.0 nunca se modificará ni se perderá al avanzar el proyecto.

---

## 2. Aislamiento en Rama de Experimentación
Toda modificación experimental (refactorización de CSS, header, scripts de cambio de tema) se ejecuta dentro de una rama dedicada.

```bash
# Crear y cambiarse a la rama experimental
git checkout -b feature/dark-mode-palette

# Confirmar que estamos en la rama correcta
git branch
```

A partir de este punto, cualquier edición sobre main.css, header.html, theme.js o archivos de prueba ocurrirá de forma aislada.

---

## 3. Flujo de Trabajo y Commits Incrementales
A medida que apliques los cambios preparados con la IA, guarda avances atómicos y descriptivos:

```bash
# Ejemplo: tras refactorizar variables y colores de main.css
git add main.css
git commit -m "style: refactorizar paleta de colores hacia variables y soporte dark mode"

# Ejemplo: tras integrar el boton en header.html y agregar theme.js
git add header.html js/theme.js
git commit -m "feat: integrar alternador de tema claro/oscuro en header y script"
```

---

## 4. Batería de Pruebas de Calidad (Checklist de Validación)
Antes de fusionar los cambios en main, verifica los siguientes puntos en local:

- [] **Modo Claro / Oscuro:** El botón alterna correctamente entre el tema claro y oscuro al hacer clic.
- [] Al recargar la página, se mantiene guardada la última preferencia elegida en localStorage.
- [] No hay parpadeo blanco (FOUC) al cargar con tema oscuro activo.

- [] **Responsividad e Integridad Estructural:** En móviles (320px a 767px), el botón y las acciones del header se apilan ordenadamente dentro del menú hamburguesa.
- [] En escritorio (≥ 1024px), el menú se despliega horizontalmente y el botón mantiene su tamaño sin distorsionar .header-inner.

- [] **Contenedores de Medios (Imágenes y Logotipo):** El logo EduAgencia mantiene sus colores diferenciados por variable (--color-brand-edu y --color-brand-agency).
- [] Las imágenes con proporciones fijas (.card__media img, .hero__image img) conservan su aspect-ratio: 16 / 9 y object-fit: cover sin aplastarse ni desbordarse.
- [] Las imágenes dinámicas o autogeneradas (test_Images) no rompen el ancho de tarjeta.

- [ ] **Contraste y Legibilidad:** Los textos secundarios (--color-text-muted) y bordes (--color-border) conservan contraste legible tanto en fondo claro como oscuro.

---

## 5. Fusión y Publicación de la Versión 2.0
Si todas las pruebas fueron satisfactorias:

```bash
# Verifica que estás en la rama de experimentación
git branch

# Guardar y commitear

# 1. Agregar los archivos modificados
git add css/main.css js/theme.js partials/header.html

# Si también creaste js/includes.js o modificaste index.html, puedes agregarlos también:
git add js/includes.js index.html

# 2. Registrar el commit descriptivo
git commit -m "style: calibrar contraste modo claro y solucionar apertura de menu movil"

# Si estás conforme con los cambios comenzar a fundir la rama

# 1. Regresar a la rama principal
git checkout main

# 2. Incorporar las mejoras validadas de la rama experimental
git merge --no-ff feature/dark-mode-palette -m "merge: consolidar refactorizacion estetica y modo oscuro"

# 3. Crear el nuevo hito Version 2.0
git tag -a v2.0 -m "Release version 2.0 - Paleta semantica, modo oscuro y header interactivo"

# 4. Enviar a GitHub los cambios y la nueva etiqueta
git push origin main
git push origin v2.0

### SI ÉXITO ###
# 5. (Opcional) Eliminar la rama experimental ya fusionada para mantener limpio el entorno
git branch -d feature/dark-mode-palette

### SI NO ÉXITO ###
# Nota: Si las pruebas hubiesen fallado y prefirieras descartar el experimento sin tocar main, simplemente ejecutas:
git checkout main y luego git branch -D feature/dark-mode-palette.

```

---

## 6. ¿DÓNDE Y CÓMO RECUPERAR LA VERSIÓN 1.0 EN EL FUTURO?
Si en el futuro (incluso estando en la versión 2.0, 3.0, etc.) necesitas consultar, revisar o restaurar la Versión 1.0 exacta, tienes 3 opciones según tu necesidad:

### Opción A: Solo inspeccionar y navegar el código de la v1.0 (Modo Lectura)

```bash
# Coloca el repositorio en el estado exacto de la versión 1.0 sin romper tu trabajo actual
git checkout v1.0

# Para volver a tu versión más reciente cuando termines de mirar, solo ejecutas 
git checkout main
```

### Opción B: Crear una rama de trabajo a partir de la v1.0
Si requieres recuperar la versión 1.0 para hacerle un arreglo aislado o comparar en profundidad:

```bash
git checkout -b rama-desde-v1.0 v1.0
```

### Opción C: Descargar un archivo comprimido (.zip) desde GitHub

En GitHub, la versión 1.0 siempre estará guardada como un archivo estático:

Ve a la página principal de tu repositorio: https://github.com/TU_USUARIO/eduagencia

Haz clic en la sección Releases o Tags.

Verás la etiqueta v1.0.

Haz clic en Source code (zip) para descargar la carpeta completa idéntica a como estaba en ese instante.

---

Thankyou Lord!
