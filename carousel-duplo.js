// ==================== CAROUSEL DUPLO ====================

jQuery(document).ready(function ($) {
    function initSlickCarousel(selector) {
        var $carousel = $(selector);

        $carousel.on('init', function () {
            toggleSlickControls();
        });

        $carousel.slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: true,
            accessibility: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        infinite: false,
                    },
                },
            ],
        });

        function toggleSlickControls() {
            var slickInstance = $carousel.slick("getSlick");
            if (!slickInstance) return;

            var totalSlides = slickInstance.slideCount;
            var slidesToShow = slickInstance.options.slidesToShow;

            if (totalSlides <= slidesToShow) {
                $carousel.find('.slick-arrow, .slick-dots').hide();
            } else {
                $carousel.find('.slick-arrow, .slick-dots').show();
            }
        }

        $carousel.on('afterChange', toggleSlickControls);
    }

    initSlickCarousel('.depoimentos-carousel');
});
