(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav__toggle');
  var navList = document.querySelector('.nav__list');
  var navLinks = document.querySelectorAll('.nav__link');
  var yearSpan = document.getElementById('current-year');
  var sections = document.querySelectorAll('section[id], footer[id]');

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  /* Header scroll shadow */
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
    updateActiveLink();
  }, { passive: true });

  /* Mobile menu */
  navToggle.addEventListener('click', function () {
    var open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navToggle.setAttribute('aria-label', open ? 'Ouvrir le menu de navigation' : 'Fermer le menu de navigation');
    navList.classList.toggle('nav__list--open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('nav__list--open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('nav__list--open');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });

  /* Active nav link */
  function updateActiveLink() {
    var scrollPos = window.scrollY + window.innerHeight / 3;
    var current = '';
    var atBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });

    if (atBottom) current = 'contact';

    navLinks.forEach(function (link) {
      link.classList.remove('nav__link--active');
      var href = link.getAttribute('href').substring(1);
      if (href === 'accueil' && (current === 'accueil' || current === '')) {
        link.classList.add('nav__link--active');
      } else if (href === 'objectifs' && ['approche', 'pour-qui', 'objectifs', 'demarche', 'formations'].indexOf(current) !== -1) {
        link.classList.add('nav__link--active');
      } else if (href === 'contact' && current === 'contact') {
        link.classList.add('nav__link--active');
      }
    });
  }

  /* Scroll reveal with IntersectionObserver */
  var revealSelectors = [
    '.approche__quote', '.approche__title', '.approche__description', '.approche__cta',
    '.approche__image', '.pour-qui__title', '.pour-qui__intro', '.pour-qui__image-large',
    '.pour-qui__card', '.objectifs__image', '.objectifs__title', '.objectifs__text',
    '.demarche__text', '.demarche__image', '.formations__image', '.formations__title',
    '.formations__list', '.contact__title', '.contact__phone', '.contact__address'
  ];

  var revealEls = [];
  revealSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.classList.add('reveal');
      revealEls.push(el);
    });
  });

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('reveal--visible'); });
  }

  updateActiveLink();
})();
