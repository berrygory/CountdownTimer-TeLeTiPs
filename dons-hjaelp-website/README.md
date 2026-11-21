# Don’s Hjælp i Hverdagen – website

A one-page website for **Don’s Hjælp i Hverdagen – Multi Service** (painting, woodwork and help around the house and garden in Denmark).

- Danish by default, with a **DA / EN** switch in the header
- Green-and-white glass look (glassmorphism), matching the logo
- Brush transition: clicking a menu link sweeps a green paintbrush across the screen and reveals the next section (switched off for visitors who have “reduce motion” turned on)
- Sections: hero, services (cleaning, deep cleaning, painting, woodwork, gardening, custom jobs), how it works, before & after, filterable photo gallery with a full-screen viewer, about, Facebook group, contact form, footer
- Works on phones (sticky “Ring / Få et tilbud” bar), tablets and desktop
- Plain HTML, CSS and JavaScript: no build step, no frameworks, no cookies, no tracking
- Fonts are self-hosted (no requests to Google, which matters for GDPR in the EU)
- Photos are resized to WebP and **stripped of EXIF/GPS data**, so customers’ home locations are not leaked

## Before going live

Phone (+45 71 67 49 10), email and service area (Slagelse, Sorø, Ringsted, Korsør, Skælskør, Dianalund, Vemmelev, Høng, Fuglebjerg) are filled in.

Still to do:

- **CVR number:** when it’s ready, add it in the footer of `index.html` (look for the comment `Tilføj CVR her`). Danish businesses must show it on their website.

Also worth a look:

- **About text** (`#om` in `index.html`): it’s written generically. A few personal lines about Don (background, experience, area) will make it stronger. If you change Danish text, update the matching English text in `js/main.js` (same key name, e.g. `about.p1`).
- **Logo**: the house-and-hand mark is a simple stand-in drawn in SVG. To use the real logo, save it as `img/logo.svg` or `img/logo.png` and replace the `<svg class="brand-mark">…</svg>` elements in the header and footer with an `<img>`; also replace `favicon.svg`.
- **Social sharing image**: once the site has a domain, change `og:image` in `index.html` to the full URL, e.g. `https://www.yourdomain.dk/img/og-image.jpg`, so Facebook shows the preview picture.

## Editing texts

- Danish text lives directly in `index.html`.
- English text lives in `js/main.js` in the `EN` list. Every translatable element has a `data-i18n="key"` attribute that matches a key there.

## Adding photos to the gallery

1. Make two WebP versions of the photo: about 700 px wide and 1400 px wide (any image tool, or squoosh.app). Remove location data.
2. Put them in `img/`, e.g. `img/my-job-700.webp` and `img/my-job-1400.webp`.
3. Copy one `<li class="g-item">…</li>` block in the gallery section of `index.html` and change the file names, `alt` text, caption and `data-cat` (`facade`, `doors`, `garden` or `sheds`). Add `is-wide` to the class for landscape photos.

## Contact form

The form needs no server: when someone presses **Send**, their own email program opens with a ready-made message to the address in `data-mailto`. If you would rather receive form submissions directly (works for visitors without an email app), use a form service such as Formspree or Netlify Forms and point the form’s `action` at it.

## Preview locally

Open `index.html` in a browser, or run a small local server from this folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing

The whole folder is the website. Any of these work:

- **Netlify / Cloudflare Pages:** drag the `dons-hjaelp-website` folder into the dashboard. It’s free and you can attach your own `.dk` domain.
- **GitHub Pages:** put the contents of this folder in its own repository and enable Pages.
- **A Danish web host (one.com, Simply.com, etc.):** upload the folder contents to the web root via the host’s file manager or FTP.

## Good practice

- Ask customers before showing photos of their homes, and keep house numbers and street signs out of shots.
- Fonts: Fraunces and Inter, both under the SIL Open Font License (see `fonts/`).

## Logo intro (test page)

`logo-intro-test.html` is a separate test page for the logo animation. It plays the intro on top of the real site, with **Afspil igen** (replay) and **Langsomt** (slow motion) buttons. Once it’s approved it will be moved into `index.html` (shown once per visit, skippable by clicking).
