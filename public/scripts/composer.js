$(document).ready(function() {

  const showForm = function() {
    $('.new-tweet').slideDown('slow');
    $('#tweet-text').trigger('focus');
  };


  //when scrolled down, scroll button is shown, nav transparent and new tweet button is hidden
  $(window).on('scroll', function() {
    const scroll =  $(window).scrollTop();
    if (scroll >= 50) {
      $('#scroll-btn').show();
      $('.title-tweet').css("display", "none");
      $('nav').addClass('hide-nav');
    } else {
      $('#scroll-btn').hide();
    }
  
  });

  //scroll to the top when button clicked, open new tweet section and focus on it
  $('#scroll-btn').on('click', function() {
    $(window).scrollTop(0);
    $('.title-tweet').css("display", "flex");
    $('nav').removeClass('hide-nav');
    showForm();
  });


  
});
