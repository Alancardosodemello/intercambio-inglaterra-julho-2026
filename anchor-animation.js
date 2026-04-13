document.addEventListener("DOMContentLoaded", function () {

  function animateAnchor() {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    // só anima se tiver a classe correta
    if (!target.classList.contains("js-anchor-animate")) return;

    target.classList.remove("is-visible");
    void target.offsetWidth; // força reflow
    target.classList.add("is-visible");
  }

  window.addEventListener("hashchange", animateAnchor);
  window.addEventListener("load", animateAnchor);

});