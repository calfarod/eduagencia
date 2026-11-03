# PLAN DE TAREAS Y RUTA DE DESARROLLO: EDUAGENCIA.COM
# PROYECTO: PLATAFORMA INTEGRAL DE SERVICIOS, COMERCIO Y AFILIADOS
# TITULARIDAD: CAADConsulting SpA
# ARCHIVO: PLAN_DE_TAREAS.md

Este documento establece la secuencia cronológica y ordenada de actividades para la construcción, verificación y despliegue del proyecto web. Las tareas alternan responsabilidades entre el Desarrollador/Administrador (Humano) y el Asistente de Código/Arquitectura (IA).

---

## CONVENCIÓN DE ACTORES
- **[HUMANO]**: Tareas de configuración de infraestructura, acceso a hosting/cPanel, obtención de credenciales de APIs, pruebas de carga física y validación legal/comercial.
- **[IA]**: Generación de scripts de diagnóstico, arquitecturas de carpetas, código HTML5 semántico, hojas de estilo CSS modulares, scripts JS, modelos de bases de datos y controladores backend.

---

## FASE 1: DIAGNÓSTICO Y COMPATIBILIDAD TECNOLÓGICA DEL WEBHOSTING

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **01** | Inspección del panel de control de hosting actual (cPanel / DirectAdmin / VPS) donde corre `eduagencia.com`. | **[HUMANO]** | Revisar si el servicio es un Hosting Compartido tradicional (Apache/PHP estándar) o un Servidor Virtual (VPS/Cloud) con soporte SSH y Docker. |
| **02** | Generación de script de compatibilidad tecnológica (`diagnostico_hosting.sh` / `info.php`). | **[IA]** | Script para auditar: versión de Python (3.10+), acceso a demonios permanentes (Gunicorn/Uvicorn), soporte PostgreSQL, soporte Redis, versiones de PHP/Node y permisos de escritura en directorios. |
| **03** | Ejecución del script de auditoría técnica en el servidor. | **[HUMANO]** | Subir el script vía FTP/SSH o cPanel File Manager y registrar el informe de salida en la consola. |
| **04** | Análisis del reporte de auditoría y decisión de runtime. | **[IA]** | Validar si el hosting actual admite Django/PostgreSQL/Redis o si se requiere apuntar DNS a un VPS (ej. Hetzner/DigitalOcean) conservando el correo en el hosting actual. |
| **05** | Configuración de registros DNS, subdominios y certificados SSL (Let's Encrypt / Cloudflare). | **[HUMANO]** | Habilitar SSL forzado (HTTPS), configurar registros A/CNAME y verificar la propagación en `eduagencia.com`. |

---

## FASE 2: ESTRUCTURA DE DIRECTORIOS Y ANDAMIAJE (SCAFFOLDING)

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **06** | Diseño de la arquitectura de directorios del proyecto web. | **[IA]** | Diseñar la estructura modular desacoplada: carpetas de estáticos (`/static/css`, `/static/js`, `/static/img`), templates (`/templates/base`, `/templates/front`, `/templates/auth`, `/templates/admin`), media (`/media/uploads`) y configuración core. |
| **07** | Creación física de la estructura de carpetas y repositorios. | **[HUMANO]** | Inicializar repositorio Git (`git init`), crear los directorios en local o servidor y configurar `.gitignore` para archivos de entorno (`.env`) y temporales. |
| **08** | Extracción y ordenamiento de recursos de marca de `eduagencia.com`. | **[HUMANO]** | Descargar y ubicar en `/static/img/`: `favicon.ico`, `logo-eduagencia.svg` / `.png`, paleta HEX corporativa y catálogo tipográfico oficial. |

---

## FASE 3: SISTEMA DE DISEÑO, CSS INDEPENDIENTE Y COMPONENTES GLOBALES

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **09** | Construcción de la hoja de estilos independiente `main.css`. | **[IA]** | Declarar variables CSS (`:root`) con la paleta de `eduagencia.com`, breakpoints Mobile-First (360px, 768px, 1024px, 1280px/1440px), reset semántico y clases utilitarias para grillas y tarjetas. |
| **10** | Construcción del componente de Menú / Header global responsivo. | **[IA]** | Crear plantilla `header.html`: navegación superior accesible, modo normal en desktop, botón hamburguesa en celular, dropdown anidado de categorías, mega panel y selector condicional según estado (`login: False` / `login: True` con avatar). |
| **11** | Construcción del componente de Footer / Pie de página corporativo. | **[IA]** | Crear plantilla `footer.html`: grilla de 4 columnas (empresa/logo, accesos rápidos, soporte y legal, newsletter con pasarelas de pago) y sub-footer con copyright expreso *"Todos los derechos reservados © CAADConsulting SpA"*. |
| **12** | Validación visual en navegadores de los componentes globales. | **[HUMANO]** | Probar el header y footer en resoluciones móvil (360px), tablet (768px) y laptop (1200px+), comprobando el despliegue del menú colapsable. |

---

## FASE 4: MAQUETACIÓN DE PÁGINAS DEL FRONT OFFICE (MOBILE-FIRST)

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **13** | Construcción de la **Página Principal (Home)**. | **[IA]** | Maquetar layout de 3 columnas asimétricas `[20% - 40% - 20%]` en desktop (colapsables a 1 columna en móvil) con los siguientes bloques `<div>`: portada hero CTA, banner híbrido texto/imagen, sección parallax, carrusel de productos destacados, módulo de pestañas (tabs) y feed lateral contextual. |
| **14** | Construcción de la **Página Secundaria (Catálogo/Servicios)**. | **[IA]** | Maquetar layout de 2 columnas `[20% lateral / 80% principal]`: barra lateral sticky de filtros (categorías padre/hijo, rango de precios, modalidad) y grilla responsiva de tarjetas de productos/servicios con badges de oferta y botón de compra/suscripción. |
| **15** | Construcción de la **Página de Reportaje / Artículo de Fondo**. | **[IA]** | Maquetar layout de 1 columna centrada (`max-width: 800px; 100% fluida en móvil`): encabezado editorial, metadatos de autor y fecha, tipografía de lectura optimizada, bloques de citas destacadas y carrusel de imágenes incrustado. |
| **16** | Construcción de la **Landing Page para Producto Físico**. | **[IA]** | Maquetar página orientada a conversión: carrusel interactivo de galería de producto, selector de variantes/unidades, cotizador dinámico de despacho logístico según dirección de destino, ficha técnica en tabs y botón directo a checkout. |
| **17** | Construcción de la **Landing Page para Producto Digital / Solución Suscrita**. | **[IA]** | Maquetar página de conversión SaaS: hero con propuesta de valor, comparador interactivo de planes de suscripción (tabla de precios a 3 columnas con plan destacado), lista de beneficios con checkmarks, sección de preguntas frecuentes (acordeón) y CTA a suscripción tokenizada. |
| **18** | Carga de contenidos de muestra y revisión de experiencia de usuario (UX). | **[HUMANO]** | Proveer textos reales de servicios de `eduagencia.com`, fotografías de productos y probar navegación táctil en celulares reales. |

---

## FASE 5: PÁGINAS DE AUTENTICACIÓN, REGISTRO Y GESTIÓN DE ACCESO

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **19** | Construcción de la **Página de Registro de Usuarios**. | **[IA]** | Formulario responsivo con validaciones frontend (HTML5/JS): nombre completo, RUT/DNI, email, teléfono, contraseña con medidor de robustez, casilla de aceptación de Términos/Privacidad y campo oculto para captura de código de vendedor (`?ref=`). |
| **20** | Construcción de la **Página de Login / Inicio de Sesión**. | **[IA]** | Layout limpio de 2 columnas simétricas (50%/50% en desktop): columna izquierda de bienvenida corporativa y columna derecha con inputs sanitizados, enlace de recuperación de contraseña y botón de autenticación segura. |
| **21** | Construcción de la **Página de Éxito de Transacción / Registro**. | **[IA]** | Plantilla de confirmación visual (check verde): resumen de orden/suscripción, código único de transacción, mensaje de bienvenida y llamada a la acción para acceder al panel de cliente o ver seguimiento del envío. |
| **22** | Construcción de la **Página de Fracaso / Error de Pago o Acceso**. | **[IA]** | Plantilla de gestión de error con códigos de error amigables (rechazo bancario, sesión expirada, stock agotado), botón de reintento directo y canal de contacto de soporte rápido vía WhatsApp. |
| **23** | Programación del controlador de autenticación y hashing de contraseñas. | **[IA]** | Implementar la lógica backend con **Argon2id** o **bcrypt** (costo $\ge 12$), generación de cookies seguras `HttpOnly; Secure; SameSite=Strict` y middleware de evaluación de roles RBAC (0 al 4). |
| **24** | Pruebas de inyección, fuerza bruta y control de sesiones. | **[HUMANO]** | Validar la imposibilidad de ingresar con contraseñas incorrectas, verificar que las cookies no sean accesibles vía JavaScript (`document.cookie`) y comprobar el redireccionamiento según rol. |

---

## FASE 6: PÁGINAS Y MÓDULOS DE ADMINISTRACIÓN (BACKOFFICE)

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **25** | Construcción de la **Página para Crear y Editar Categorías**. | **[IA]** | Interfaz administrativa para alta y edición de categorías: campos de nombre, selector de categoría padre (jerarquía de árbol), generación automática de slug SEO y switch de activación/visibilidad. |
| **26** | Construcción de la **Página para Crear Producto / Anuncio de Servicio**. | **[IA]** | Formulario administrativo completo: categoría asignada, SKU, título, descripción enriquecida, precio normal vs. precio oferta, selector de tipo (físico con peso/dimensiones o digital/suscripción), subida múltiple de imágenes y stock inicial. |
| **27** | Construcción de la **Página de Consulta de Ventas por Vendedor (Comisiones)**. | **[IA]** | Tabla de datos con filtros por vendedor (código de afiliado), rango de fechas y tipo de venta (directa vs. referida). Visualización de ventas brutas, porcentaje aplicado, comisión neta calculada y botón de aprobación/liquidación. |
| **28** | Construcción de la **Página de Métricas de Ventas por Producto por Mes**. | **[IA]** | Panel analítico con selector de año/mes, tabla consolidada con unidades vendidas por SKU, ingresos totales generados, tasa de recurrencia en suscripciones y tarjetas de KPIs comerciales clave. |
| **29** | Auditoría y control de permisos de acceso en el Backoffice. | **[HUMANO]** | Comprobar que solo los usuarios con Rol 4 (Administrador) y Rol 3 (Vendedor, con vistas restringidas a sus datos) puedan acceder a estas rutas protegidas. |

---

## FASE 7: INTEGRACIÓN DE APIS TRANSACCIONALES (PAGOS Y LOGÍSTICA)

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **30** | Registro comercial y obtención de llaves API en pasarela de pagos. | **[HUMANO]** | Crear cuenta comercial a nombre de CAADConsulting SpA en Webpay Plus (Transbank), Stripe o Mercado Pago; obtener Commerce Code y Secret Key en modo Sandbox. |
| **31** | Registro comercial y obtención de llaves API con empresa logística. | **[HUMANO]** | Solicitar credenciales de integración en el courier seleccionado (Chilexpress / Starken / Blue Express) para retiro de bultos y cotización en línea. |
| **32** | Programación del módulo de Pagos Online No Presenciales. | **[IA]** | Construir el cliente backend de integración: endpoint de inicio de transacción, redirección segura a pasarela y controlador de webhook con validación criptográfica de firma de retorno. |
| **33** | Programación del conector de Logística y Retiro de Bultos. | **[IA]** | Construir el servicio de despacho: payload automatizado con dimensiones de paquetes, solicitud de retiro a bodega/oficina de CAADConsulting SpA, captura de número de tracking y almacenamiento de etiqueta PDF de transporte. |
| **34** | Pruebas de transacciones completas en entorno de prueba (Sandbox). | **[HUMANO]** | Efectuar compras de prueba con tarjetas de crédito/débito de test, verificar el cambio de estado de órdenes y validar la generación de la guía de despacho. |

---

## FASE 8: MARCO LEGAL, POLÍTICAS Y AUDITORÍA DE PRIVACIDAD

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **35** | Redacción de la página de **Términos y Condiciones de Uso**. | **[IA]** | Redactar documento legal regulatorio: propiedad de CAADConsulting SpA, reglas de uso, derecho de retracto de productos y servicios, condiciones de corte de suscripciones y políticas del sistema de afiliados/vendedores. |
| **36** | Redacción de la página de **Política de Privacidad y Manejo de Datos**. | **[IA]** | Redactar política de protección de datos personales: tratamiento de información, no almacenamiento de números de tarjeta en servidores locales (delegado a pasarela PCI-DSS), ejercicio de derechos ARCO y registro no invasivo de visitas. |
| **37** | Revisión y validación jurídica del contenido legal corporativo. | **[HUMANO]** | Revisar las cláusulas con asesoría legal o gerencia de CAADConsulting SpA para asegurar cumplimiento de la legislación comercial chilena. |

---

## FASE 9: DESPLIEGUE FINAL, MONITOREO Y DOCUMENTACIÓN DE IA

| # | Tarea / Hito | Responsable | Entregable / Acción |
|---|---|---|---|
| **38** | Generación de la bitácora `PROCESO_CREATIVO_IA.md`. | **[IA]** | Registrar la memoria técnica asistida por IA: requerimientos originales, decisiones de arquitectura adoptadas, prompts iterativos y control de versiones de código generado. |
| **39** | Despliegue en producción (*Go-Live*). | **[HUMANO]** | Cambiar credenciales de APIs de Sandbox a Producción en variables de entorno `.env`, ejecutar migraciones de base de datos finales y reiniciar servicios de aplicación. |
| **40** | Auditoría final de rendimiento, seguridad y analítica. | **[HUMANO]** | Validar métricas de velocidad en Google PageSpeed / Lighthouse (Mobile > 90), certificar enlaces de atribución de vendedores y verificar el contador de visitas en vivo. |