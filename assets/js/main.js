(function () {
  'use strict';
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var toggle = document.getElementById('menu-toggle') || document.querySelector('.navbar-toggle');
    var menu = document.getElementById('navbar-menu') || document.querySelector('.navbar-menu');
    if (!toggle || !menu) return;
    function setOpen(open) {
      menu.classList.toggle('active', open);
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      setOpen(!menu.classList.contains('active') && !menu.classList.contains('is-open'));
    });
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
  });
}());
