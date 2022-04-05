$(".slider-one")
.not(".slick-intialized")
.slick({
    autplay:true,
    autoplayspeed:3000,
    dots:true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});

$(".slider-two")
.not(".slick-intialized")
.slick({
    prevArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplayspeed: 3000
});
