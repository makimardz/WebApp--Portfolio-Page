document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for toggling the navigation on hamburger click
    document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('show');
    });
  });