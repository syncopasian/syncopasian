let linksMenu = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  linksMenu.classList.toggle('menu-active');
});