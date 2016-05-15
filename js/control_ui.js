$( document ).ready(function() {

  // UI Event Delegation | .post-holder
  $('nav').on('click','span', function(){
    $('.post-holder').removeClass('highlighted');
    $('.post-holder').addClass('not-highlighted');
  });

// View All
  $('nav').on('click','#view_all_control', function(){
    $('.post-holder').removeClass('highlighted');
    $('.post-holder').removeClass('not-highlighted');
  });

// r_pics
  $('nav').on('click','#r_pics_control', function(){
    $('.r_pics').removeClass('not-highlighted');
    $('.r_pics').addClass('highlighted');
  });

// r_earth
$('nav').on('click','#r_earth_control', function(){
    $('.r_earth').removeClass('not-highlighted');
    $('.r_earth').addClass('highlighted');
  });

// r_jokes
  $('nav').on('click','#r_jokes_control', function(){
    $('.r_jokes').removeClass('not-highlighted');
    $('.r_jokes').addClass('highlighted');
  });

// r_all
  $('nav').on('click','#r_all_control', function(){
    $('.r_all').removeClass('not-highlighted');
    $('.r_all').addClass('highlighted');
  });

// ny home
  $('nav').on('click','#ny_home_control', function(){
    $('.ny_home').removeClass('not-highlighted');
    $('.ny_home').addClass('highlighted');
  });

// ny tech
  $('nav').on('click','#ny_tech_control', function(){
    $('.ny_tech').removeClass('not-highlighted');
    $('.ny_tech').addClass('highlighted');
  });
}); // document ready END