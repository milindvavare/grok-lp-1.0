$(document).ready(function () {
   
  $(window).on("scroll", function () {
    // // Show & Hide Text On-Scroll
    // if ($(window).scrollTop() < 300) {
    //   $(".heading").fadeOut(1000);
    // } else {
    //   $(".heading").fadeIn(1000);
    // }
    alert($(window).scrollTop());
  });
});