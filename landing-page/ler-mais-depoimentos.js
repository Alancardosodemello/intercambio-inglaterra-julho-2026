// ==================== LER MAIS - DEPOIMENTOS ====================

document.addEventListener("DOMContentLoaded", function () {

    const LIMIT = 30; // número de palavras

    document.querySelectorAll(".testimonial-text").forEach(el => {

        const fullText = el.innerText.trim();
        const words = fullText.split(" ");

        if (words.length <= LIMIT) return;

        const shortText = words.slice(0, LIMIT).join(" ") + "...";

        el.innerHTML = `
            <span class="short-text">${shortText}</span>
            <span class="full-text" style="display:none;">${fullText}</span>
            <span class="read-more">Ler mais <span class="dashicons dashicons-arrow-down-alt2"></span></span>
        `;
    });

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("read-more")) {

            const container = e.target.closest(".testimonial-text");
            const shortText = container.querySelector(".short-text");
            const fullText = container.querySelector(".full-text");

            const isExpanded = fullText.style.display === "inline";

            if (isExpanded) {
                // 🔽 voltar para resumido
                shortText.style.display = "inline";
                fullText.style.display = "none";
                e.target.innerHTML = `Ler mais <span class="dashicons dashicons-arrow-down-alt2"></span>`;
            } else {
                // 🔼 expandir
                shortText.style.display = "none";
                fullText.style.display = "inline";
                e.target.innerHTML = `Mostrar menos <span class="dashicons dashicons-arrow-up-alt2"></span>`;
            }

            // 🔥 importante pro Slick recalcular altura
            if (typeof $ !== "undefined" && $('.depoimentos-carousel').hasClass('slick-initialized')) {
                $('.depoimentos-carousel').slick('setPosition');
            }
        }
    });

});