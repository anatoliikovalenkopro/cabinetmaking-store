# Northgrain Cabinetry

A one-page website for a custom cabinetmaking company in Alberta, built with **React** and **Vite**.

It covers custom kitchens, vanities, built-ins, handcrafted tables, commercial millwork, renovation services and a quote request form.

## Tech stack

- React 18
- Vite 6
- Plain CSS, one stylesheet per component

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

| Command           | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Build for production into `dist/`   |
| `npm run preview` | Preview the production build        |

## Project structure

```
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # Entry point
    ├── App.jsx             # Page layout
    ├── components/         # One folder per component (.jsx + .css)
    │   ├── Header/
    │   ├── Hero/
    │   ├── TrustBar/
    │   ├── Services/       # Filterable services grid + ServiceCard
    │   ├── Tables/
    │   ├── Process/
    │   ├── Gallery/
    │   ├── Alberta/
    │   ├── Testimonials/
    │   ├── Faq/
    │   ├── Contact/        # Contact info + QuoteForm
    │   ├── Footer/
    │   ├── SectionHeader/  # Shared section heading
    │   └── Icon/           # SVG icon set
    ├── data/               # All site content lives here
    │   ├── company.js      # Name, phone, email, nav links
    │   ├── services.js     # Services and categories
    │   └── content.js      # Process, projects, FAQ, reviews, cities
    ├── hooks/
    │   └── useReveal.js    # Scroll fade-in animation
    └── styles/
        ├── variables.css   # Colours, fonts, sizes
        ├── wood.css        # Wood-grain placeholder backgrounds
        └── global.css      # Base styles, buttons, utilities
```

## Editing content

All text lives in `src/data/`, so you can change services, contact details, FAQs and so on without touching the components.

## To do before launch

- Replace the placeholder company name, phone, email and address in `src/data/company.js`
- Add real project photos to the gallery
- Replace the sample reviews with real ones
- Connect the quote form to a backend or a service like Formspree
