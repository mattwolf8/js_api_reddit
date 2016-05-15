$( document ).ready(function() {

  //console.log('hello world');

  var nyTimes_response = function(ny_times) {
     //console.log(ny_times.results);

       ny_stories =  ny_times.results;

      _.each(ny_stories, function(val) {
        //console.log(val);
          if (val.multimedia.length > 0 ){
            $('#wrapper').append('<div class="post-holder ny_home"><h4>' + val.title + '</h4><img src=' + val.multimedia[0].url + '><a href="' + val.url + '" target="_blank"><h3>Read More</h3></a></div>');
          }
      });

  };

  var nyTimes = $.get('http://api.nytimes.com/svc/topstories/v1/home.json?api-key=c91de52429af4d9bc69bacbeb7adc82e:7:74519866').success(nyTimes_response);

});