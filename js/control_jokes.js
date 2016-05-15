$( document ).ready(function() {

//
// r_jokes
//

  // Look Closer Button
  $('div').on('click','.view-joke', function(){
    $(this).css({"display":"none"});
    $(this).prev('.joke_title').css({
      "display":"block",
      "min-height": "0",
      "max-height": "150px"
    });
    $(this).siblings('.audio_ctrl').css({"display":"inline-block"});
    $(this).siblings('.punch_line').css({"display":"block"});
  });

  // P back button
  $('div').on('click','p', function(){
    console.log('P back button is working');
    $(this).css({"display":"none"});
    $(this).siblings('.audio_ctrl').css({"display":"none"});
    $(this).siblings('.view-joke').css({"display":"inline-block"});
    $(this).siblings('.joke_title').css({
      "display":"block",
      "min-height": "45px",
      "max-height": "45px"
    });
    return false;
  });

  // back button
  $('div').on('click','.back_btn', function(){
    console.log('audio back button is working');
    $(this).css({"display":"none"});
    $(this).siblings('.audio_ctrl').css({"display":"none"});
    $(this).siblings('p').css({"display":"none"});
    $(this).siblings('.view-joke').css({"display":"inline-block"});
    $(this).siblings('.joke_title').css({
      "display":"block",
      "min-height": "45px",
      "max-height": "45px"
    });
    return false;
  });

  // text to speech START ( LISTEN BUTTON )
  $('div').on('mouseup','.audio_start', function() {
    console.log('Text to Speech START is Working');
    var jokeSetUp = $(this).siblings('h4').text();
    var jokePunchLine = $(this).siblings('p').text();
    responsiveVoice.speak(jokeSetUp + jokePunchLine);
    return false;
  });

  // text to speech STOP
  $('div').on('click','.audio_stop', function(){
    console.log('Text to Speech STOP is Working');
    responsiveVoice.cancel();
    return false;
  });

}); // doc ready END