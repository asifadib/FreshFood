// Slick Slider
$(document).ready(function(){
    $('.food-slider').slick({
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // arrows: false,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });


    $('.nav-trigger').click(function(){
        $('.site-content-wrapper').toggleClass('scaled');
    })
});
  