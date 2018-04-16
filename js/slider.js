//funkcija za slider(jQuery plugin Slick https://kenwheeler.github.io/slick/)
$('.slider').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    prevArrow:$('.previous'),
    nextArrow:$('.next')
});

//iako se klase isto zovu, funkcija se pozove samo na zadnju klasu

/*$('.slider-second-class').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    prevArrow:$('.previous'),
    nextArrow:$('.next')
});
$('.slider-first-class').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    prevArrow:$('.previous'),
    nextArrow:$('.next')
});

U ovom slucaju bi gumb radio samo na prvi red slidera */


//funkcija za mijenjanje property-a i ikone gumba za prethodni slide
$('.next').click(function() {
    $('.previous').prop('disabled', false);
    $('.previous').text("").append("<img src=assets/arrow-blue-left.png>");
    });
    