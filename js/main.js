
/* Put your generated images in a folder called "images" next to this file, named 01, 02 ... 17
   (.jpg, .jpeg, .png or .webp). They replace the placeholders automatically.
   Images 01 to 06 and 12 to 17 are already built into this file. */
(function () {
  var exts = ['jpg', 'jpeg', 'png', 'webp'];
  document.querySelectorAll('img[data-n]').forEach(function (img) {
    if (img.getAttribute('src')) { return; } /* already built into this file */
    var n = img.getAttribute('data-n'), i = 0;
    img.addEventListener('load', function () { img.parentNode.classList.add('has-img'); });
    img.addEventListener('error', function () { i++; if (i < exts.length) { img.src = 'images/' + n + '.' + exts[i]; } });
    img.src = 'images/' + n + '.' + exts[0];
  });
})();

(function () {
  var steps = document.querySelectorAll('.sc-step');
  if (!steps.length) return;
  var imgs = document.querySelectorAll('.sc-img');
  var dots = document.querySelectorAll('.sc-dots i');
  var current = null;

  // Always pick whichever step's centre sits closest to the viewport centre.
  // (Simpler and more reliable than IntersectionObserver here: it can't land
  // in a dead zone between two steps, so it never gets stuck mid-scroll,
  // scrolling up or down.)
  function update() {
    var mid = window.innerHeight / 2;
    var closest = null, closestDist = Infinity;
    steps.forEach(function (s) {
      var r = s.getBoundingClientRect();
      var dist = Math.abs(r.top + r.height / 2 - mid);
      if (dist < closestDist) { closestDist = dist; closest = s; }
    });
    if (!closest || closest === current) return;
    current = closest;
    var n = closest.getAttribute('data-step');
    steps.forEach(function (s) { s.classList.toggle('on', s.getAttribute('data-step') === n); });
    imgs.forEach(function (i) { i.classList.toggle('on', i.getAttribute('data-step') === n); });
    dots.forEach(function (d) { d.classList.toggle('on', d.getAttribute('data-step') === n); });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

document.querySelectorAll('.menu .drop a').forEach(function (a) {
  a.addEventListener('click', function () { a.closest('details').removeAttribute('open'); });
});

(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var targets = document.querySelectorAll('.reveal, .reveal-right, .reveal-stagger');
  if (!targets.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  targets.forEach(function (t) { io.observe(t); });
})();
