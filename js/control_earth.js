$( document ).ready(function() {

//
// r_earth
//

  // Look Closer Button
  $('div').on('click','.view-more', function(){
    $(this).siblings().css( "display", "none" );
    $(this).css( "display", "none" );
    $(this).next('.full-size').css({
      "display": "block",
      "width": "100%",
      "height": "auto",
    });
    $(this).siblings('.audio_begin').css({
      "display": "block",
    });
  });


  // Full-Size Image
  $('div').on('click','.full-size', function(){
    $(this).siblings().css( "display", "block" );
    $(this).css( "display", "none" );
    $(this).next('.full-size').css({
      "display": "inline-block",
      "width": "auto",
      "height": "100px"
    });
    $(this).next('.audio_begin').css({
      "display": "none",
    });
    $(this).prev('.view-more').css({
      "display": "inline-block",
    });
    $(this).prev('.view-all').css({
      "display": "inline-block",
    });
  });


});