// ========================= // EMAILJS INIT // =========================
(function () {
    emailjs.init("6gcGpgzd6cDFHixR4");
})();

// ========================= // FORM SUBMIT + MÁSCARA + VALIDAÇÃO // =========================
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("leadForm");
    if (!form) return;

    const nascimentoInput = form.nascimento;

    // ========================= // MÁSCARA DATA (dd/mm/aaaa) // =========================
    nascimentoInput.addEventListener("input", function () {
        let value = nascimentoInput.value.replace(/\D/g, "");

        if (value.length > 8) value = value.slice(0, 8);

        if (value.length > 4) {
            value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,2})/, "$1/$2");
        }

        nascimentoInput.value = value;
    });

    // ========================= // VALIDAÇÃO DE DATA REAL // =========================
    function isValidDate(dateStr) {
        const parts = dateStr.split("/");
        if (parts.length !== 3) return false;

        const [day, month, year] = parts.map(Number);
        if (!day || !month || !year) return false;

        const date = new Date(year, month - 1, day);

        return (
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day
        );
    }

    // ========================= // MENSAGENS EM PORTUGUÊS // =========================
    form.nome.oninvalid = () => form.nome.setCustomValidity("Por favor, preencha seu nome completo.");
    form.email.oninvalid = () => form.email.setCustomValidity("Por favor, insira um e-mail válido.");
    nascimentoInput.oninvalid = () => nascimentoInput.setCustomValidity("Informe sua data de nascimento.");

    form.nome.oninput = () => form.nome.setCustomValidity("");
    form.email.oninput = () => form.email.setCustomValidity("");
    nascimentoInput.oninput = () => nascimentoInput.setCustomValidity("");

    // ========================= // SUBMIT // =========================
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // valida data antes de enviar
        if (!isValidDate(nascimentoInput.value)) {
            nascimentoInput.setCustomValidity("Por favor, insira uma data válida no formato dd/mm/aaaa.");
            nascimentoInput.reportValidity();
            return;
        }

        const btn = form.querySelector("button");

        btn.innerText = "Enviando...";
        btn.disabled = true;

        const params = {
            nome: form.nome.value,
            email: form.email.value,
            nascimento: nascimentoInput.value
        };

        emailjs.send("service_3blum7c", "template_b8p3cc8", params)
            .then(() => {
                showPopup(params.nome);
                form.reset();
            })
            .catch((err) => {
                alert("Erro ao enviar. Tente novamente.");
                console.error(err);
            })
            .finally(() => {
                btn.innerText = "Quero receber os valores";
                btn.disabled = false;
            });
    });

});

// ========================= // POPUP + WHATSAPP // =========================
function showPopup(nome) {

    const popup = document.getElementById("thankYouPopup");
    const whatsappBtn = document.getElementById("whatsappBtn");

    const phone = "5521971470672";

    const pageTitle = document.title;
    const pageUrl = window.location.href;

    const message = `Olá! Acabei de me cadastrar na página "${pageTitle}". Meu nome é ${nome} e gostaria de mais informações.

    Página: ${pageUrl}`;;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    whatsappBtn.href = url;

    popup.classList.add("active");

    setTimeout(() => {
        window.open(url, "_blank");
    }, 3000);
}

// ========================= // FECHAR POPUP// =========================
document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".close-popup");

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            document.getElementById("thankYouPopup").classList.remove("active");
        });
    }
});