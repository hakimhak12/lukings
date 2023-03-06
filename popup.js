const leadMagnet = document.getElementById('lead-magnet');
const closeLeadMagnetButton = document.querySelector('#lead-magnet .close-btn');

closeLeadMagnetButton.addEventListener('click', function() {
  leadMagnet.classList.remove('active');
});

window.addEventListener('load', function() {
  setTimeout(function() {
    leadMagnet.classList.add('active');
  }, 2000); // change the delay time here (in milliseconds)
});

// Add sticky class to header when user scrolls down
window.onscroll = function() {stickyHeader()};

var header = document.querySelector(".navbar-default");
var sticky = header.offsetTop;

function stickyHeader() {
if (window.pageYOffset > sticky) {
header.classList.add("sticky");
} else {
header.classList.remove("sticky");
}
}

$(document).ready(function() {
  // Close the burger menu when a link or the burger icon is clicked
  $(".navbar-nav li a, .navbar-header button").click(function(event) {
    // Prevent the default action of the link
    event.preventDefault();
    // Close the burger menu
    $(".navbar-collapse").collapse('hide');
    // Scroll to the section that was clicked
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top - 50
    }, 1000);
  });

  // Close the burger menu when the user clicks anywhere on the screen
  $(document).click(function(event) {
    // Check if the click was not on the burger icon or the menu
    if (!$(event.target).closest('.navbar-header button, .navbar-collapse').length) {
      // Close the burger menu
      $(".navbar-collapse").collapse('hide');
    }
  });
});
