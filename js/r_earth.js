$( document ).ready(function() {

  var reddit_earth_response = function(reddit_earth) {

      //console.log(redditHot);

      r_earth = redditHot.responseJSON.data.children;

       console.log(r_earth);

      _.each(r_earth, function(val) {
        if (val.data.thumbnail !== "self" && val.data.thumbnail !== "nsfw" ) {

          //console.log(val);
    var String = val.data.title.split('[')[0];
          $('#wrapper').append('<div class="post-holder r_earth"><h4>' + String + '</h4><img class="thumb-nail" src=' + val.data.thumbnail + '><h3 class="view-more">look closer</h3><img class="full-size" src=' + val.data.preview.images["0"].source.url + '></div>');
        }
      });

  }; // r/pics/ END

  var redditHot = $.get('https://www.reddit.com/r/earthporn.json?limit=12').success(reddit_earth_response);

});