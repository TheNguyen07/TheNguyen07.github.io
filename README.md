# Hannah T. Nguyen — Portfolio

A green, medieval-themed portfolio built with **Vue 3** + **Vite**, featuring a
hand-drawn dragon crest emblem and content organized as "chapters" (Halls of
Learning, the Armory, Quests, Seals of Mastery, Feats of Craftsmanship, Honors,
and Correspondents).

## Project structure

```
nguyen-portfolio/
├── index.html              # HTML entry point (loads fonts + mounts Vue)
├── package.json
├── vite.config.js
└── src/
    ├── main.js              # App bootstrap, registers the v-reveal directive
    ├── App.vue               # Assembles all sections
    ├── style.css              # Theme tokens + all layout/section styles
    ├── data.js                 # All resume content (edit this to update text)
    ├── icons.js                # Dragon crest + heraldic seal SVGs
    ├── directives/
    │   └── reveal.js            # Scroll-in fade animation (v-reveal)
    └── components/
        ├── TheNav.vue
        ├── TheHero.vue
        ├── SectionEducation.vue
        ├── SectionArmory.vue
        ├── SectionQuests.vue
        ├── SectionSeals.vue
        ├── SectionFeats.vue
        ├── SectionHonors.vue
        ├── SectionReferences.vue
        └── TheFooter.vue
```

## Getting started

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
# install dependencies
npm install

# start a local dev server with hot-reload
npm run dev

# build for production (outputs to dist/)
npm run build

# preview the production build locally
npm run preview
```

## Editing content

All resume text lives in `src/data.js` — update the arrays there (education,
armory/skills, quests/jobs, certifications, feats/projects, honors, references)
and the site updates automatically.

## Deploying

`npm run build` produces a static `dist/` folder you can deploy anywhere:

- **GitHub Pages**: push `dist/` to a `gh-pages` branch (or use the
  `gh-pages` npm package / a GitHub Action).
- **Netlify / Vercel**: connect the repo and set the build command to
  `npm run build` with publish directory `dist`.
