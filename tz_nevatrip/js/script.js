$('.top__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});

$('.show__more').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('hide');
    $($(this).siblings()).removeClass('hide__content');
});
