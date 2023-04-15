// This is a simple JavaScript function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Call the function with a parameter
greet("world");


// Smooth scrolling effect for menu links
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
});
