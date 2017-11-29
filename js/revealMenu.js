{
  const mobileMenu = document.getElementById('mobile-menu-list');
  const mobileMenuAnchor = document.getElementById('mobile-menu-hamburger');

  mobileMenuAnchor.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    mobileMenu.classList.toggle('show-menu');
  });

  document.body.addEventListener('click', function() {
    if (mobileMenu.classList.contains('show-menu')) {
      mobileMenu.classList.toggle('show-menu');
    }
  });
}
