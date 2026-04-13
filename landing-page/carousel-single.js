// ==================== CAROUSEL SINGLE ====================

jQuery(document).ready(function ($) {
    function initSlickCarousel(selector) {
        var $carousel = $(selector);

        $carousel.on('init', function () {
            toggleSlickControls();
        });

        $carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            accessibility: true,
        });

        $carousel.on('afterChange', toggleSlickControls);
    }

    initSlickCarousel('.carousel-images');
});

const lightbox = GLightbox({
    selector: '.glightbox'
});