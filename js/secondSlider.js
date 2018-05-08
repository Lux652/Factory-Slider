jQuery(document).ready(function ($) { 
      var sliderLength = $('.secondSlider ul li').length;
      var slideWidth = $('img').width();
      var slideHeight = $('.secondSlider ul li').height();
      var sliderFullWidth = sliderLength * slideWidth;
      
      $('.secondSlider').css({ width: slideWidth, height: slideHeight });  
      $('.secondSlider ul').css({ width: sliderFullWidth, marginLeft: - slideWidth });
      
      $('.secondSlider ul li:last-child').prependTo('.secondSlider ul');
      function prev() {
          $('.secondSlider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('.secondSlider ul li:last-child').prependTo('.secondSlider ul');
              $('.secondSlider ul').css('left', '');
          });
      };
      function next() {
          $('.secondSlider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('.secondSlider ul li:first-child').appendTo('.secondSlider ul');
              $('.secondSlider ul').css('left', '');
          });
      };
      $('.next').click(function() {
        $('.previous').prop('disabled', false);
        $('.previous').text("").append("<img src=assets/arrow-blue-left.png>");
        next();
        return false;
    });
    
      $('.previous').click(function () {
          prev();
          return false;
      });
      
  });
  
