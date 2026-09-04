# Documentación Técnica del Desarrollo Web: Presentación de Lenguajes y Frameworks

Documentación técnica y descriptiva del proyecto **PRESENTACIÓN - Lenguajes y Frameworks**, una aplicación web interactiva diseñada para la divulgación y aprendizaje sobre lenguajes de programación y frameworks modernos.

---

## 📋 Tabla de Contenidos

1. [Visión General del Proyecto](#visión-general-del-proyecto)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Descripción de Módulos y Archivos](#descripción-de-módulos-y-archivos)
   - [Página Principal (HTML)](#1-página-principal-indexhtml)
   - [Arquitectura de Estilos (CSS)](#2-arquitectura-de-estilos-css)
   - [Lógica del Cliente (JS)](#3-lógica-del-cliente-javascript)
4. [Guía de Instalación y Despliegue](#guía-de-instalación-y-despliegue)
5. [Historial y Control de Versiones](#historial-y-control-de-versiones)

---

## 🌐 Visión General del Proyecto

El proyecto **PRESENTACIÓN - Lenguajes y Frameworks** ofrece una interfaz moderna, limpia y altamente interactiva orientada a la presentación de tecnologías de desarrollo web y software. La aplicación cuenta con animaciones fluidas, componentes modulares, efectos visuales tipo sobreposición/modal y adaptación responsiva a diversos dispositivos.

---

## 📂 Estructura del Proyecto

```text
PRESENTACI-N---Lenguajes-y-Frameworks/
├── .git/                      # Repositorio y control de versiones Git
├── css/                       # Módulos de estilos CSS
│   ├── animations.css         # Keyframes y animaciones CSS
│   ├── components.css         # Estilos para componentes UI (tarjetas, botones, badges)
│   ├── layout.css             # Disposición de elementos en pantalla (Grids/Flexbox)
│   ├── main.css               # Estilos globales, variables y reset CSS
│   ├── responsive.css         # Puntos de interrupción (Media Queries)
│   └── sobreposiciones.css    # Estilos para capas emergentes y modales
├── js/                        # Archivos de lógica JavaScript
│   └── Main.js                # Controlador principal de interactividad y DOM
├── index.html                 # Estructura principal y maquetación HTML5
└── README.md                  # Documentación del proyecto
```

---

## 🛠️ Descripción de Módulos y Archivos

### 1. Página Principal (`index.html`)
- **Punto de entrada:** Enlaza todos los recursos de hojas de estilo (`css/*.css`) en el header e integra la lógica cliente (`js/Main.js`).
- **Semántica HTML5:** Estructura organizada utilizando componentes semánticos para optimizar el SEO y la accesibilidad.

### 2. Arquitectura de Estilos (`css/`)
El proyecto organiza las hojas de estilo mediante una arquitectura modular para facilitar el mantenimiento:

- **`main.css`**: Define la paleta de colores, tipografías globales y variables CSS personalizadas.
- **`layout.css`**: Modula las áreas de contenido, contenedores, grillas y diseño estructural de las secciones.
- **`components.css`**: Define los elementos reutilizables de la interfaz, como las tarjetas de tecnologías, botones de acción e íconos.
- **`animations.css`**: Agrupa transiciones suaves, efectos `@keyframes` y efectos hover interactivos.
- **`sobreposiciones.css`**: Gestiona las capas emergentes, modales intermedios y efectos de superposición de información.
- **`responsive.css`**: Define reglas `@media` para adaptar dinámicamente la vista a teléfonos móviles, tablets y monitores de escritorio.

### 3. Lógica del Cliente (`js/Main.js`)
- Manejo interactivo de eventos del usuario (clics, desplazamientos, interacción con tarjetas).
- Control dinámico del DOM para la apertura y cierre de ventanas modales / sobreposiciones.
- Inicialización y control de transiciones y estados dinámicos.

---

## 🚀 Guía de Instalación y Despliegue

### Requisitos Previos
- Un navegador web moderno (*Google Chrome, Mozilla Firefox, Microsoft Edge, Safari*).
- Un servidor local sencillo (opcional) como *Live Server* para VS Code, *Nginx*, o la extensión HTTP de *Python*.

### Pasos para Ejecutar Localmente

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd PRESENTACI-N---Lenguajes-y-Frameworks-
   ```

2. **Abrir la aplicación:**
   - Opción 1: Abrir directamente el archivo `index.html` haciendo doble clic desde el explorador de archivos.
   - Opción 2: Iniciar un servidor de desarrollo local usando Python:
     ```bash
     python -m http.server 8000
     ```
     Luego acceder en el navegador a `http://localhost:8000`.

---

## 📌 Historial y Control de Versiones

El proyecto cuenta con integración completa con Git, manteniendo un historial estructurado en la rama principal (`main`) y preparado para flujos de trabajo colaborativos mediante ramas remotas.
