jQuery(document).ready(function ($) {
      var slideLength = $('.firstSlider ul li').length;
      var slideWidth = $('img').width();
      var slideHeight = $('.firstSlider ul li').height();
      var sliderFullWidth = slideLength * slideWidth;
      
      $('.firstSlider').css({ width: slideWidth, height: slideHeight });
      
      $('.firstSlider ul').css({ width: sliderFullWidth, marginLeft: - slideWidth });
      
      $('.firstSlider ul li:last-child').prependTo('.firstSlider ul');



      function prev() {
          $('.firstSlider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('.firstSlider ul li:last-child').prependTo('.firstSlider ul');
              $('.firstSlider ul').css('left', '');
          });
      };
  
      function next() {
          $('.firstSlider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('.firstSlider ul li:first-child').appendTo('.firstSlider ul');
              $('.firstSlider ul').css('left', '');
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
  
