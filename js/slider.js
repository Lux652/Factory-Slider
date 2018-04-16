$('.slider').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    prevArrow:$('.previous'),
    nextArrow:$('.next')
});


//funkcija za mijenjanje property-a i ikone gumba za prethodni slide
$('.next').click(function() {
    $('.previous').prop('disabled', false);
    $('.previous').text("").append("<img src=assets/arrow-blue-left.png>");
    });
    