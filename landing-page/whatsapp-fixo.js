document.addEventListener("DOMContentLoaded", function () {
    const phone = "5521971470672";

    const form = document.getElementById("leadForm");
    const btn = document.getElementById("whatsappFloat");

    if (!btn) return;

    btn.addEventListener("click", function (e) {

        let nome = "";

        // tenta pegar o nome do formulário
        if (form && form.nome && form.nome.value) {
            nome = form.nome.value;
        }

        // fallback se não tiver nome
        const saudacao = nome 
            ? `Olá! Me chamo ${nome}.` 
            : "Olá!";

        const pageTitle = document.title;
        const pageUrl = window.location.href;

        const message = `${saudacao} Vi a página "${pageTitle}" e gostaria de receber mais informações 😊

        Página: ${pageUrl}`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        btn.href = url;
    });
});