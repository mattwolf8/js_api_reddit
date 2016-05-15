$( document ).ready(function() {
  var reddit_joke_response = function(reddit_joke) {

      //console.log(redditHot);

      r_joke = redditHot.responseJSON.data.children;

       //console.log(r_joke);

      _.each(r_joke, function(val) {
        if (val.data.thumbnail !== "self" && val.data.thumbnail !== "nsfw" ) {

          //console.log(val);
          //var punchLines = val.data.selftext;

          $('#wrapper').append('<div class="post-holder r_jokes"><h4 class="joke_title">' + val.data.title + '</h4><h3 class="view-joke">Punch Line</h3><p class="punch_line">' + val.data.selftext + '</p><img class="back_btn audio_ctrl" src="img/back_btn.png"><img class="audio_start audio_ctrl" src="img/listen_icon_small.png"><img class="audio_stop audio_ctrl" src="img/music_stop.png"></div>');
        }
      });

  }; // r/pics/ END

  var redditHot = $.get('https://www.reddit.com/r/jokes.json?limit=16').success(reddit_joke_response);
});