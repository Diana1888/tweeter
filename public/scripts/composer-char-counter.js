$(document).ready(function() {

  const $tweetText = $('#tweet-text');
  $tweetText.on('input', function() {
    const $textValue = $tweetText.val();
    let $startCounter = 140;
    
    $counter = $('div').children('.counter');
    const $charCount = `${$startCounter - $textValue.length}`;
    $counter.text(`${$charCount}`);

    if ($charCount < 0) {
      $counter.addClass('negative')
    } else {
      $counter.removeClass('negative')
    }
  })
  
});




