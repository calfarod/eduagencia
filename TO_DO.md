# TO_DO (Por Hacer pendientes)

Aquí tienes tu Manual de Operación Ejecutiva y tu plantilla para el archivo TO_DO.md, listos para usar al inicio de cada sesión o guardar directamente en la raíz de tu laboratorio.   

1. Tablero de Comandos y Operadores Frecuentes

| Categoría | Comando / Operador | Función Ejecutiva |
| :--- | :--- | :--- |
| Python | python -m venv .venv | Crear el venv |
| | .venv\Scripts\Activate.ps1 | Activar |
| GitHub | git init | Inicializar localmente |
| | echo ".venv/" >> .gitignore | Evitar subir el entorno virtual |
| | git add . | Crear el commit inicial |
| | git commit -m "Initial commit" | Crear el commit inicial |
| | git branch -M main | Establecer el main |
| | git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git | Conectar remoto |
| | git push -u origin main | Enviar |
| Linux / Cápsulas | mkdir 02_nombre_proyecto | Crea una carpeta aislada para un nuevo proyecto. |
| | cd 02_nombre_proyecto / cd .. | Entra a la cápsula del proyecto / Regresa a la raíz. |
| | mv archivo.py carpeta/ | Mueve un archivo hacia su cápsula correspondiente. |
| | rm -rf __pycache__ | Elimina carpetas temporales o basura. |
| | python ruta/archivo.py | Ejecuta el programa de Python en el contenedor. |
| GitHub Issues (gh) | gh issue list --state all | Lista todos los pendientes (abiertos y cerrados). |
| | gh issue view 2 --web | Muestra el título y cuerpo completo del issue #2 en la web (opcional). |
| | gh issue create | Inicia la creación interactiva de un nuevo issue (e para editar en VS Code, Ctrl + W para cerrar pestaña y enviar). |
| | gh issue close 2 --comment "..." | Cierra el issue #2 dejando constancia de lo realizado. |
| Git (Respaldo) | git status | Muestra qué archivos fueron creados o modificados. |
| | git add . | Empaqueta todos los cambios actuales (respetando .gitignore). |
| | git commit -m "Mensaje..." | Sella el paquete con una descripción clara del avance. |
| | git push | Sube los cambios sellados al repositorio privado en GitHub. |
| Agente (agy) | @REGLAS_DEL_AGENTE.md | Obliga a Antigravity a leer tu constitución antes de responder. |
| | @02_carpeta/ | Limita el contexto del agente únicamente a esa cápsula. |
| | Modo Ask vs Auto | Usa conversación normal para los 7 puntos de diseño; autoriza código solo tras escribir "APROBADO PARA CODIFICAR". |

2. Lista de Pendientes (TO_DO.md) 

Puedes copiar y pegar este bloque directamente dentro de tu nuevo archivo TO_DO.md (en VS Code, cambia [ ] por [x] a medida que completes cada hito):   Markdown# Bitácora Ejecutiva de Pendientes (TO_DO)
**Proyecto:** Laboratorio `emprendimiento_Agentico`
**Propietario:** Carlos Alfonso Alfaro Díaz

## Higiene y Cierre de la Sesión Actual
- [] Add_New.
- [] Add_New.
- [] Add_New.
- [] Add_New.
- [] Próximo: Encontrar al que muere por nuestra solución.
- [] Próximo: Generar un detector de necesidades -> Producto -> Resolución.
- [] Próximo: Colección de Imágenes para aplicar a las páginas.
- [] Próximo: Generar el contenido del Web Site Completo y sus Productos.
- [] Próximo: Confirmar las características del web hosting.
- [v] Generar la versión V2.0 (versión retocada de colores y modos claro/oscuro) en git.
- [v] Generar la versión V1.0 (versión original) en git.
- [x] Construir una página web de 3 columnas 20% 60% 20%.
- [x] Que el footer de la pagina web se mantenga conforme al modelo de eduagencia.com
- [x] Que el menú de navegación se mantenga conforme al modelo de eduagencia.com
- [x] Desarrollar y probar `01_guardian_contrasenas` (Hashing, Salt y defensas contra Fuerza Bruta).
- [x] Integrar `github-cli` (`gh`) de forma permanente en `.devcontainer/devcontainer.json`.
- [x] Cerrar Issue #1 y crear Issue #2 (`Crear TO_DO.md`).
- [x] Limpiar rastro en la raíz: borrar `__pycache__` suelto (`rm -rf __pycache__`).
- [x] Crear formalmente el archivo `TO_DO.md` en la raíz del proyecto con esta lista.
- [x] Cerrar el Issue #2 desde la terminal (`gh issue close 2 --comment "Archivo TO_DO.md creado y operativo"`).
- [x] Hacer `git add .`, `git commit` y `git push` de la nueva estructura y configuración de `.devcontainer`.

