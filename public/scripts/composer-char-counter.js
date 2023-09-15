$(document).ready(function() {

  const $tweetText = $('#tweet-text');
  //count characters dynamically as the user types
  $tweetText.on('input', function() {
    const $textValue = $tweetText.val();
    let $startCounter = 140;
    
    $counter = $(this).parents().find('.counter');
    const $charCount = `${$startCounter - $textValue.length}`;
    $counter.text(`${$charCount}`);

    //counter turns red if exceed allowed characters
    if ($charCount < 0) {
      $counter.addClass('negative');
    } else {
      $counter.removeClass('negative');
    }
  });
  
});




