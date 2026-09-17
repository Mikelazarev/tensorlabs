(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('primary-navigation');
  if (!burger || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  }

  burger.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  // Leaving the mobile breakpoint always resets to the CSS-driven layout.
  var desktop = window.matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', function (event) {
    if (event.matches) setOpen(false);
  });
})();
