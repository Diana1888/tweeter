/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ];


$(document).ready(function() {

  // const timeAgo = () => {
  //   format(date[locale = 'en_US', opts]);
  //   return format(Date.now() - 11 * 1000 * 60 * 60);
  // }

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
<p class="content">${tweet.content.text}</p>
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


  $('.tweet-form').on('submit', (event) => {
    event.preventDefault();

    const data = $('.tweet-form').serialize();
    $.post("/tweets", data).then(() => {
      console.log(data);
    });
  });


  //Loop trought all tweets and append each tweet to the tweets container
  const renderTweets = function(tweets) {
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


