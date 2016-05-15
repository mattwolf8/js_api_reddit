$( document ).ready(function() {

  // https://www.reddit.com/r/all/
  var reddit_all_response = function(reddit_all) {
    //  console.log(redditHot.responseJSON.data.children[5].data.thumbnail);
    //  thumbNailImg = redditHot.responseJSON.data.children[5].data.thumbnail;

    // $('#wrapper').append('<div class="post-holder"><img src=' + thumbNailImg + '></div>');

      r_all =  redditAll.responseJSON.data.children;

      // Count the # of the return objects
      // console.log(_.size(r_all));

      // Loop through each Object
      _.each(r_all, function(val) {
        if (val.data.thumbnail !== "self" && val.data.thumbnail !== "nsfw" ) {

          // Display all the return objects
          // console.log(val);

          $('#wrapper').append('<div class="post-holder r_all"><h4>' + val.data.title + '</h4><img src=' + val.data.thumbnail + '><a href="http://www.reddit.com' + val.data.permalink + '" target="_blank"><h3>Read More</h3></a></div>');
        }
      });

  }; // r/all END

  var redditAll = $.get('https://www.reddit.com/r/all.json?limit=25').success(reddit_all_response);

}); //  Document Ready END