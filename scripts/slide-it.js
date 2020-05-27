$(document).ready(function(){
  $('.team-slide').slick({
  	infinite: true,
  	dots: true
  });
  $('.land-image-slide').slick({
  	infinite: true,
  	dots: false,
  	autoplay: true,
  	autoplaySpeed: 4000,
  	fade: true,
  	speed:2000,
  	accessibility: false,
  	arrows: false
  });


  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
  if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
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
});