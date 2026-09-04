/**
 * DevMetrics 2026 - Main.js
 * Script principal para la interactividad de cards de lenguajes y tabla de frameworks.
 * Desarrollado con JavaScript Vanilla puro.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================================================
    // MÓDULO 1: SOBREPOSICIÓN DINÁMICA DE LENGUAJES DE PROGRAMACIÓN
    // =========================================================================

    // Seleccionamos todas las cards de lenguajes disponibles en el DOM
    const cards = document.querySelectorAll(".lang-card");

    /**
     * Función encargada de cerrar la sobreposición/modal activa con animación.
     */
    function closeOverlay() {
        const overlay = document.querySelector(".lang-overlay");
        if (!overlay) return;

        // Si ya está en proceso de cierre, evitamos repetir el proceso
        if (overlay.classList.contains("is-closing")) return;

        // Añadimos la clase para desencadenar la animación de salida en CSS
        overlay.classList.add("is-closing");

        // Reactivamos el scroll en el body quitando la clase de control
        document.body.classList.remove("lang-overlay-open");

        // Esperamos aproximadamente 180ms a que termine la animación antes de remover del DOM
        setTimeout(() => {
            overlay.remove();
        }, 180);
    }

    /**
     * Función encargada de construir y mostrar la sobreposición dinámica de una card.
     * @param {HTMLElement} card - Elemento DOM de la card seleccionada.
     */
    function openOverlay(card) {
        // Evitamos la acumulación de modales eliminando previamente cualquier sobreposición activa
        const existingOverlay = document.querySelector(".lang-overlay");
        if (existingOverlay) {
            existingOverlay.remove();
        }

        // --- EXTRACCIÓN DE INFORMACIÓN ORIGINAL ---
        const header = card.querySelector(".lang-card-header");
        const body = card.querySelector(".lang-card-body");

        const langName = header ? header.querySelector(".lang-name")?.innerHTML || "" : "";
        const langBadges = header ? header.querySelector(".lang-badges")?.innerHTML || "" : "";
        const originalContent = body ? body.innerHTML : "";

        // Obtención del logo (se prioriza data-logo y se usa .lang-logo como alternativa)
        let logoSrc = card.dataset.logo;
        if (!logoSrc) {
            const logoImg = card.querySelector(".lang-logo");
            if (logoImg) {
                logoSrc = logoImg.src;
            }
        }

        // Extracción y procesamiento de las 3 características desde data-characteristics
        const characteristicsData = card.dataset.characteristics || "";
        const characteristicsArray = characteristicsData ? characteristicsData.split("|") : [];

        // --- CONSTRUCCIÓN DEL ELEMENTO OVERLAY ---
        const overlay = document.createElement("div");
        overlay.className = "lang-overlay";

        // Panel principal del modal
        const panel = document.createElement("div");
        panel.className = " ";

        // Botón de cierre
        const closeBtn = document.createElement("button");
        closeBtn.className = "lang-overlay-close";
        closeBtn.innerHTML = "&times;";
        closeBtn.type = "button";
        closeBtn.addEventListener("click", closeOverlay);















        
        // Encabezado del modal (Logo + Nombre + Badges)
        const heading = document.createElement("div");
        heading.className = "lang-overlay-heading";

        if (logoSrc) {
            const img = document.createElement("img");
            img.src = logoSrc;
            img.alt = langName.replace(/<[^>]*>?/gm, ''); // Remover etiquetas HTML si existen para el alt
            heading.appendChild(img);
        }

        const titleGroup = document.createElement("div");
        
        const title = document.createElement("h2");
        title.className = "lang-overlay-title";
        title.innerHTML = langName;
        titleGroup.appendChild(title);

        const badgesContainer = document.createElement("div");
        badgesContainer.className = "lang-overlay-badges";
        badgesContainer.innerHTML = langBadges;
        titleGroup.appendChild(badgesContainer);

        heading.appendChild(titleGroup);

        // Contenedor de las 3 características dinámicas
        const characteristicsContainer = document.createElement("div");
        characteristicsContainer.className = "lang-overlay-characteristics";

        characteristicsArray.forEach((charText, index) => {
            const charDiv = document.createElement("div");
            charDiv.className = "lang-characteristic";

            const small = document.createElement("small");
            small.textContent = `Característica ${index + 1}`;

            const br = document.createElement("br");

            const textNode = document.createTextNode(charText.trim());

            charDiv.appendChild(small);
            charDiv.appendChild(br);
            charDiv.appendChild(textNode);

            characteristicsContainer.appendChild(charDiv);
        });

        // Contenedor del contenido original replicado de la card
        const contentContainer = document.createElement("div");
        contentContainer.className = "lang-overlay-content";
        contentContainer.innerHTML = originalContent;

        // Ensamblado de componentes
        panel.appendChild(closeBtn);
        panel.appendChild(heading);
        panel.appendChild(characteristicsContainer);
        panel.appendChild(contentContainer);

        overlay.appendChild(panel);

        // Evento para cerrar la sobreposición si se hace clic fuera del panel
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeOverlay();
            }
        });

        // Agregamos la sobreposición al DOM y bloqueamos el scroll en el body
        document.body.appendChild(overlay);
        document.body.classList.add("lang-overlay-open");
    }

    // Asignación genérica del evento de apertura a cada card mediante querySelectorAll y forEach
    cards.forEach((card) => {
        const logoTrigger = card.querySelector(".lang-logo-trigger");
        if (logoTrigger) {
            logoTrigger.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevenir cualquier propagación imprevista
                openOverlay(card);
            });
        }
    });

    // Evento global para cerrar la sobreposición al presionar la tecla Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeOverlay();
        }
    });


    // =========================================================================
    // MÓDULO 2: TABLA PLEGABLE DE FRAMEWORKS
    // =========================================================================

    // Seleccionamos todos los botones de alternancia en la tabla de frameworks
    const frameworkToggles = document.querySelectorAll(".framework-toggle");

    // Recorremos genéricamente todos los botones de la tabla
    frameworkToggles.forEach((button) => {
        // Obtenemos el ID del detalle correspondiente mediante aria-controls
        const detailsId = button.getAttribute("aria-controls");
        const detailRow = document.getElementById(detailsId);
        const summaryRow = button.closest(".framework-summary-row");

        // Nos aseguramos de que las filas de detalles inicien en estado oculto/plegado
        if (detailRow) {
            detailRow.hidden = true;
        }

        button.addEventListener("click", () => {
            if (!detailRow || !summaryRow) return;

            // Verificamos si la fila está actualmente abierta
            const isOpen = summaryRow.classList.contains("is-open");

            if (isOpen) {
                // Si está abierta, la plegamos
                summaryRow.classList.remove("is-open");
                button.setAttribute("aria-expanded", "false");
                detailRow.hidden = true;
            } else {
                // Si está cerrada, la desplegamos
                summaryRow.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
                detailRow.hidden = false;
            }
        });
    });

});