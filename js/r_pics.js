$( document ).ready(function() {

  // https://www.reddit.com/r/pics/
  var reddit_pic_response = function(reddit_pic) {
    //  console.log(redditHot.responseJSON.data.children[5].data.thumbnail);
    //  thumbNailImg = redditHot.responseJSON.data.children[5].data.thumbnail;

    // $('#wrapper').append('<div class="post-holder"><img src=' + thumbNailImg + '></div>');

       r_pics =  redditHot.responseJSON.data.children;

      _.each(r_pics, function(val) {
        if (val.data.thumbnail !== "self" && val.data.thumbnail !== "nsfw" ) {

          //console.log(val);

          $('#wrapper').append('<div class="post-holder r_pics"><h4>' + val.data.title + '</h4><img class="thumb-nail" src=' + val.data.thumbnail + '><h3 class="view-more">look closer</h3><img class="full-size" src=' + val.data.preview.images["0"].source.url + '></div>');
        }
      });

  }; // r/pics/ END

  var redditHot = $.get('https://www.reddit.com/r/pics.json?limit=12').success(reddit_pic_response);

}); //  Document Ready END