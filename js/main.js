document.addEventListener("DOMContentLoaded", function(event) {

  console.log('Hello! I see you also enjoy console logs! I hope you will check out my code at https://github.com/MarcelHamel');

  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-link-container');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    hamburger.classList.toggle('dropdown-burger');
    navLinks.classList.toggle('dropdown-menu');
  })

});
