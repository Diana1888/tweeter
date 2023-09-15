$(document).ready(function() {


  //when scrolled down, scroll button is shown, nav transparent and new tweet button is hidden
  $(window).on('scroll', function() {
    const scroll =  $(window).scrollTop();

    //120 is the height of nav bar
    if (scroll >= 120) {
      $('#scroll-btn').show();
      $('.title-tweet').css("display", "none");
      $('nav').addClass('hide-nav');
    //when scroll up, scroll button is hideen, nav bar and tweet button is shown.
    } else {
      $('#scroll-btn').hide();
      $('.title-tweet').css("display", "flex");
      $('nav').removeClass('hide-nav');
    }
  });

  //scroll to the top when button clicked, open new tweet section and focus on it
  $('#scroll-btn').on('click', function() {
    $(window).scrollTop(0);
    $('.new-tweet').slideDown('slow');
    $('#tweet-text').trigger('focus');

  });
  
});
