$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    $("#nav").removeClass("mobile-nav");
  if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $("#mobile-menu").on('click', function() {
    $("#nav").toggleClass("mobile-nav");

  });
  $( window ).resize(function() {
    if ($(window).width() > 736 ) {
      $("#nav").removeClass("mobile-nav");
    }
  });
});