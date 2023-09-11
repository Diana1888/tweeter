/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  //Preventing XSS with Escaping
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  //Create the tweet element
  const createTweetElement = function(tweet) {
    let $tweet = $(`<article class="tweet">
    <header class="tweet">
<div class="image-profile">
<span><img class="user-image" src="${tweet.user.avatars}"></span>
<span class="name">${tweet.user.name}</span>
</div>
<div>
<span class="username">${tweet.user.handle}</span>
</div>
</header>
<p class="content">${escape(tweet.content.text)}</p>
<hr>
<footer>
<span class="date">${timeago.format(tweet.created_at)}</span>
<span class="icons">
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
</span>
</footer>
</article>
`);

    return $tweet;
  };

  $('#toggle-btn').on('click', (event) => {
    event.preventDefault();
    $('.new-tweet').toggle(function() {
      $('#tweet-text').trigger('focus');
    });
  })


  $('.tweet-form').on('submit', (event) => {
    event.preventDefault();

    const $errorMessageLong = $('#error-message-long').hide();
    const $errorMessageEmpty = $('#error-message-empty').hide();

    const allowedChar = 140;
    //check if there is no input or too long tweet
    const textInput = $('#tweet-text').val();

    if (textInput === '') {
      $errorMessageEmpty.slideDown('slow');
      return;
    } 
    if (textInput.length > allowedChar) {
       $errorMessageLong.slideDown('slow');
       return;
    }

    const data = $('.tweet-form').serialize();
    $.post("/tweets", data).then(() => {
        loadTweets(data);
    });
  });


  //Loop trought all tweets and append each tweet to the tweets container
  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    tweets.forEach((tweet) => {
      const tweetElement = createTweetElement(tweet);
      $('#tweets-container').prepend(tweetElement);
    });
  };


  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (result) => {
        console.log(result);
        renderTweets(result);
      },
      error: (error) => {
        console.error("An error occured, ", error);
      },
    });
  };

  loadTweets();
});


