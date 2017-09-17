$(document).ready(function() {

  $("#intro-btn, .side-nav#intro-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".section2").offset().top},
        'slow');
  });

  $("#skills-btn, .side-nav#intro-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".section3").offset().top},
        'slow');
  });

  $("#portfolio-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".section4").offset().top},
        'slow');
  });

  $("#contact-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".section5").offset().top},
        'slow');
  });
})