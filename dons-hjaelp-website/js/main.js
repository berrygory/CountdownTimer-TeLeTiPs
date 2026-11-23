/* Don’s Hjælp i Hverdagen – site script
   Menu, sprogskift (DA/EN), galleri med filter og lysboks, kontaktformular. */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ------------------------------------------------------------------
     Oversættelser. Danske tekster står direkte i index.html og læses
     derfra; her ligger kun de engelske samt tekster, som scriptet selv
     skriver (fx beskeder fra formularen).
     ------------------------------------------------------------------ */
  var EN = {
    'meta.title': 'Don’s Hjælp i Hverdagen – Cleaning, painting and gardening in Slagelse and the surrounding area',
    'meta.desc': 'Don’s Hjælp i Hverdagen helps with cleaning, deep cleaning, painting and gardening in Slagelse, Sorø, Ringsted, Korsør, Skælskør and the surrounding area. We are also open to custom jobs.',
    'skip': 'Skip to content',
    'brand.home': 'Don’s Hjælp i Hverdagen – back to top',
    'nav.label': 'Main menu',
    'nav.services': 'Services',
    'nav.ba': 'Before &amp; after',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a quote',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'lang.switch': 'Skift til dansk',

    'hero.eyebrow': 'Cleaning · Painting · Garden',
    'hero.title': 'A helping hand for your <em>home, house and garden</em>',
    'hero.lead': 'We help with cleaning and deep cleaning, indoor and outdoor painting, gardening and all the jobs that never quite get done. Got something special? Just ask – we’re open to most things.',
    'hero.cta1': 'Get a free, no-obligation quote',
    'hero.cta2': 'See our work',
    'hero.p1': 'Thorough, tidy work',
    'hero.p2': 'Slagelse, Sorø, Korsør and nearby',
    'hero.p3': 'Open to custom jobs',
    'hero.badge': 'Slagelse and nearby',

    'alt.fence': 'A red wooden fence and gate being painted with a brush',
    'alt.bench': 'A freshly painted white garden bench in front of a red brick wall',
    'alt.sternBefore': 'Peeling fascia boards being scraped and sanded on a yellow wooden house',
    'alt.sternAfter': 'Yellow wooden house with a freshly painted white chimney, fascia and bargeboards',
    'alt.doorDuring': 'A worn black stable door being painted with a brush',
    'alt.doorAfter': 'A finished black wooden house with a glazed door and plants in front',
    'alt.shedGrey': 'An outbuilding under a lean-to roof being painted anthracite grey',
    'alt.frontDoor': 'A green front door with orange and light panels being sanded by hand',
    'alt.shedBlack': 'A black outbuilding with vertical wooden cladding and a white window',
    'alt.window': 'Window frames being painted white, with the glass masked off with blue tape',
    'alt.about': 'Painter in work clothes with the Don’s Hjælp i Hverdagen logo on the back, painting an outbuilding',

    'services.eyebrow': 'Services',
    'services.title': 'What we can help with',
    'services.intro': 'Cleaning, painting and gardening are our everyday work – but we’re open to custom jobs too. If your job isn’t on the list, just ask.',
    's1.title': 'Cleaning',
    's1.text': 'Regular cleaning of homes, holiday homes and small businesses – on a fixed schedule or as a one-off when you need it.',
    's2.title': 'Deep cleaning',
    's2.text': 'Thorough top-to-bottom cleaning – kitchen, bathroom, skirting boards, cupboards and windows. Perfect for a spring clean or when moving out.',
    's3.title': 'Painting – indoors and out',
    's3.text': 'Walls, ceilings, facades, doors, windows and fences. Careful preparation with cleaning, sanding and masking gives a neat, lasting finish.',
    's4.title': 'Woodwork &amp; wood protection',
    's4.text': 'Sheds, outbuildings, carports, fascia boards and garden furniture get new protection, so the wood stays good-looking year after year.',
    's5.title': 'Gardening',
    's5.text': 'Lawn mowing, hedge trimming, weeding, pruning and tidying up – so your garden becomes a place you want to spend time.',
    's6.title': 'Custom jobs',
    's6.text': 'Have a job that isn’t listed here? Tell us what you need and we’ll find a solution together.',
    's6.cta': 'Ask us',

    'process.eyebrow': 'How it works',
    'process.title': 'Easy from first message to finished result',
    'p1.title': 'Get in touch',
    'p1.text': 'Call, text or send an email. Feel free to include a few photos of the job.',
    'p2.title': 'Quote',
    'p2.text': 'We look at the job together, talk about what you want, and you get a clear price before we start.',
    'p3.title': 'Thorough work',
    'p3.text': 'We take time over the things you can’t see afterwards – preparation, masking and the small details.',
    'p4.title': 'Handover',
    'p4.text': 'We tidy up after ourselves and go through the result with you, so you’re happy with it.',

    'ba.eyebrow': 'Before &amp; after',
    'ba.title': 'See the difference',
    'ba.intro': 'Two examples of what a little care, sandpaper and paint can do for a house.',
    'ba.before': 'Before',
    'ba.after': 'After',
    'ba.during': 'In progress',
    'ba1.title': 'Fascia boards &amp; chimney',
    'ba1.text': 'The old, peeling paint was scraped and sanded off before the fascia, bargeboards and chimney got a fresh white finish that stands out crisply against the yellow wooden facade.',
    'ba2.title': 'Black wooden house with stable door',
    'ba2.text': 'Worn, flaking woodwork on the door and facade was sanded and repainted. Now the house is an even black again and ready for wind and weather.',

    'gallery.eyebrow': 'Gallery',
    'gallery.title': 'Selected jobs',
    'gallery.intro': 'A selection of everyday jobs. Tap a photo to see it full size.',
    'gallery.filterLabel': 'Filter photos',
    'f.all': 'All',
    'f.facade': 'Facades &amp; fascia',
    'f.doors': 'Doors &amp; windows',
    'f.garden': 'Fences &amp; garden',
    'f.sheds': 'Sheds &amp; outbuildings',
    'g1': 'Red fence and gate get a fresh coat',
    'g2': 'Outbuilding under a lean-to painted anthracite grey',
    'g3': 'White chimney and fascia on a yellow wooden house',
    'g4': 'Garden bench sanded and painted white',
    'g5': 'Front door sanded before repainting',
    'g6': 'Fascia boards scraped and sanded down',
    'g7': 'Black wooden house – finished',
    'g8': 'Outbuilding with vertical cladding in black',
    'g9': 'Stable door painted black after sanding',
    'g10': 'Window frames painted – glass masked off',

    'about.eyebrow': 'About us',
    'about.title': 'Help in everyday life – literally',
    'about.p1': 'The name says it all: Don’s Hjælp i Hverdagen (“Don’s Help in Everyday Life”) is here to help with the jobs in your home, house and garden that you don’t have the time, energy or tools for – in Slagelse and the surrounding area.',
    'about.p2': 'Whether it’s cleaning, painting or gardening, we take time over the details. That’s what makes the difference between a quick job and a proper result.',
    'about.quote': '“Honest work, a fair price and a helping hand when you need it.”',
    'about.cta': 'Tell us about your job',

    'fb.title': 'Follow us on Facebook',
    'fb.text': 'See our latest jobs, photos and news in our Facebook group – and feel free to message us there.',
    'fb.cta': 'Go to the group',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Get a free, no-obligation quote',
    'contact.intro': 'Tell us briefly about the job and we’ll get back to you as soon as possible. Photos of the job make it easier to give a price.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.fbLink': 'Don’s Hjælp i Hverdagen',
    'contact.area': 'Where we work',
    'contact.areaNote': 'Live a bit further away? Call anyway – we can often find a solution.',

    'form.name': 'Name',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.optional': '(optional)',
    'form.city': 'Postcode and town',
    'form.task': 'Type of job',
    'o1': 'Cleaning',
    'o2': 'Deep cleaning',
    'o3': 'Painting (indoor or outdoor)',
    'o4': 'Woodwork &amp; wood protection',
    'o5': 'Gardening',
    'o6': 'Custom job / other',
    'form.msg': 'Describe the job',
    'form.msgPh': 'E.g. We need a deep clean of a terraced house of about 100 m² …',
    'form.submit': 'Send enquiry',
    'form.note': 'When you press send, your email program opens with the message ready to go. Your details are only used to reply to your enquiry.',
    'form.opening': 'Your email program is opening. If nothing happens, write to {email} or give us a call.',
    'mail.subject': 'Enquiry from the website: {task}',
    'mail.name': 'Name',
    'mail.phone': 'Phone',
    'mail.email': 'Email',
    'mail.city': 'Postcode and town',
    'mail.task': 'Type of job',
    'mail.msg': 'Description',

    'footer.text': 'Cleaning, painting, gardening and custom jobs in Slagelse and the surrounding area.',
    'footer.navLabel': 'Shortcuts',
    'footer.links': 'Shortcuts',
    'footer.contact': 'Contact',
    'footer.fb': 'Facebook group',
    'footer.cookies': 'This site uses no cookies.',

    'mcta.call': 'Call',
    'mcta.quote': 'Get a quote',

    'lb.label': 'Photo viewer',
    'lb.close': 'Close',
    'lb.prev': 'Previous photo',
    'lb.next': 'Next photo',
    'theme.label': 'Dark mode'
  };

  // Danske tekster, som kun bruges af scriptet (resten læses fra HTML).
  var DA = {
    'nav.open': 'Åbn menu',
    'nav.close': 'Luk menu',
    'lang.switch': 'Switch to English',
    'form.opening': 'Dit e-mailprogram åbnes nu. Hvis intet sker, så skriv til {email} eller ring til os.',
    'mail.subject': 'Forespørgsel fra hjemmesiden: {task}',
    'mail.name': 'Navn',
    'mail.phone': 'Telefon',
    'mail.email': 'E-mail',
    'mail.city': 'Postnr. og by',
    'mail.task': 'Type opgave',
    'mail.msg': 'Beskrivelse'
  };

  var root = document.documentElement;
  var lang = 'da';

  function t(key) {
    var dict = lang === 'en' ? EN : DA;
    return dict[key] != null ? dict[key] : (DA[key] != null ? DA[key] : key);
  }

  /* ---------- Sprog ---------- */
  var metaDesc = $('meta[name="description"]');
  DA['meta.title'] = document.title;
  DA['meta.desc'] = metaDesc ? metaDesc.getAttribute('content') : '';

  // Gem de danske tekster fra HTML, så vi kan skifte tilbage.
  $$('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (DA[key] == null) DA[key] = el.innerHTML;
  });
  $$('[data-i18n-attr]').forEach(function (el) {
    parseAttrMap(el).forEach(function (pair) {
      if (DA[pair.key] == null) DA[pair.key] = el.getAttribute(pair.attr) || '';
    });
  });

  function parseAttrMap(el) {
    return el.getAttribute('data-i18n-attr').split(';').map(function (part) {
      var bits = part.split('=');
      return { attr: bits[0].trim(), key: (bits[1] || '').trim() };
    }).filter(function (p) { return p.attr && p.key; });
  }

  function applyLang(next) {
    lang = next === 'en' ? 'en' : 'da';
    var dict = lang === 'en' ? EN : DA;
    root.setAttribute('lang', lang);

    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      parseAttrMap(el).forEach(function (pair) {
        if (dict[pair.key] != null) el.setAttribute(pair.attr, dict[pair.key]);
      });
    });

    document.title = t('meta.title');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));

    var toggle = $('#lang-toggle');
    if (toggle) toggle.setAttribute('aria-label', t('lang.switch'));
    updateNavLabel();
  }

  function readStoredLang() {
    try {
      var fromUrl = new URLSearchParams(window.location.search).get('lang');
      if (fromUrl === 'en' || fromUrl === 'da') return fromUrl;
      return window.localStorage.getItem('dhh-lang');
    } catch (e) { return null; }
  }
  function storeLang(value) {
    try { window.localStorage.setItem('dhh-lang', value); } catch (e) { /* ignore */ }
  }

  var langToggle = $('#lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(lang === 'da' ? 'en' : 'da');
      storeLang(lang);
    });
  }

  /* ---------- Header & menu ---------- */
  var header = $('.site-header');
  var nav = $('#site-nav');
  var navToggle = $('.nav-toggle');

  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function updateNavLabel() {
    if (!navToggle) return;
    var open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.open'));
  }
  function setNav(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    updateNavLabel();
  }
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      setNav(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setNav(false);
        navToggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !header.contains(e.target)) setNav(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 960) setNav(false);
    });
  }

  /* ---------- Galleri: filter ---------- */
  var chips = $$('.chip');
  var items = $$('.g-item');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filter = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      items.forEach(function (item) {
        item.hidden = !(filter === 'all' || item.getAttribute('data-cat') === filter);
      });
    });
  });
  // Billedteksten står også i alt-teksten, så skærmlæsere skal kun høre den én gang.
  $$('.g-cap').forEach(function (cap) { cap.setAttribute('aria-hidden', 'true'); });

  /* ---------- Galleri: lysboks ---------- */
  var lightbox = $('#lightbox');
  var lbImg = $('.lb-img');
  var lbText = $('.lb-text');
  var lbCount = $('.lb-count');
  var current = [];
  var index = 0;
  var opener = null;

  function visibleButtons() {
    return items.filter(function (i) { return !i.hidden; }).map(function (i) { return $('.g-open', i); });
  }

  function show(i) {
    var n = current.length;
    index = (i + n) % n;
    var btn = current[index];
    var thumb = $('img', btn);
    lbImg.src = btn.getAttribute('data-full');
    lbImg.alt = thumb ? thumb.alt : '';
    lbText.textContent = $('.g-cap', btn) ? $('.g-cap', btn).textContent : '';
    lbCount.textContent = (index + 1) + ' / ' + n;
    // Hent naboer på forhånd, så bladring føles hurtig.
    [index + 1, index - 1].forEach(function (j) {
      var b = current[(j + n) % n];
      if (b) { var pre = new Image(); pre.src = b.getAttribute('data-full'); }
    });
  }

  function openLightbox(btn) {
    current = visibleButtons();
    opener = btn;
    if (!lightbox || typeof lightbox.showModal !== 'function') {
      window.open(btn.getAttribute('data-full'), '_blank', 'noopener');
      return;
    }
    show(current.indexOf(btn));
    lightbox.showModal();
    root.style.overflow = 'hidden';
  }

  if (lightbox) {
    items.forEach(function (item) {
      var btn = $('.g-open', item);
      btn.addEventListener('click', function () { openLightbox(btn); });
    });
    $('.lb-prev', lightbox).addEventListener('click', function () { show(index - 1); });
    $('.lb-next', lightbox).addEventListener('click', function () { show(index + 1); });
    $('.lb-close', lightbox).addEventListener('click', function () { lightbox.close(); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    });
    lightbox.addEventListener('close', function () {
      root.style.overflow = '';
      lbImg.removeAttribute('src');
      if (opener) opener.focus();
    });

    // Swipe på mobil
    var startX = null;
    lightbox.addEventListener('touchstart', function (e) {
      startX = e.touches.length === 1 ? e.touches[0].clientX : null;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      if (startX == null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  /* ---------- Kontaktformular -> e-mail ---------- */
  var form = $('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var to = form.getAttribute('data-mailto');
      var val = function (name) { return (form.elements[name].value || '').trim(); };
      var task = val('task');
      var lines = [
        t('mail.name') + ': ' + val('name'),
        t('mail.phone') + ': ' + val('phone'),
        t('mail.email') + ': ' + (val('email') || '-'),
        t('mail.city') + ': ' + (val('city') || '-'),
        t('mail.task') + ': ' + task,
        '',
        t('mail.msg') + ':',
        val('message')
      ];
      var href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(t('mail.subject').replace('{task}', task)) +
        '&body=' + encodeURIComponent(lines.join('\r\n'));

      var status = $('#form-status');
      if (status) status.textContent = t('form.opening').replace('{email}', to);
      window.location.href = href;
    });
  }

  /* ---------- Lys/mørk tilstand ---------- */
  var modeSwitch = $('#theme-switch');
  var themeMeta = $('meta[name="theme-color"]');
  function setMode(mode, save) {
    root.setAttribute('data-mode', mode);
    if (modeSwitch) modeSwitch.setAttribute('aria-checked', mode === 'dark' ? 'true' : 'false');
    if (themeMeta) themeMeta.setAttribute('content', mode === 'dark' ? '#0c1a15' : '#1f8a63');
    if (save) { try { window.localStorage.setItem('dhh-mode', mode); } catch (e) { /* ignore */ } }
  }
  setMode(root.getAttribute('data-mode') === 'dark' ? 'dark' : 'light', false);
  if (modeSwitch) {
    modeSwitch.addEventListener('click', function () {
      setMode(root.getAttribute('data-mode') === 'dark' ? 'light' : 'dark', true);
    });
  }

  /* ---------- Årstal ---------- */
  var year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Fade-in ved scroll ---------- */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Start ---------- */
  var stored = readStoredLang();
  if (stored === 'en') applyLang('en');
  else updateNavLabel();
})();
