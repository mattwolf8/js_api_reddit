$(document).ready(function() {
  //console.log('hello Tech');

  var nyTimes_tech_response = function(ny_times) {
    //console.log(ny_times.results);
    ny_stories = ny_times.results;
    console.log(ny_stories);

    // EACH
    _.each(ny_stories, function(val,index) {
      if (val.multimedia.length > 0 ){

        //console.log(val);

        $('#wrapper').append('<div class="post-holder ny_tech"><h4>' + val.title + '</h4><img src=' + val.multimedia[0].url + '><a href="' + val.url + '" target="_blank"><h3>Read More</h3></a></div>');
      }

    });

  }; // nyTimes_tech_response END

  var nyTimes = $.get('http://api.nytimes.com/svc/topstories/v1/technology.json?api-key=c91de52429af4d9bc69bacbeb7adc82e:7:74519866').success(nyTimes_tech_response);

});
