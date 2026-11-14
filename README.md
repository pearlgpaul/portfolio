# Pearl Pulikkottil — resume and portfolio

Personal website: resume on the landing page, project write-ups under `/projects/`.

**Live site:** https://pearlgpaul.github.io/resume/

Built with [Astro](https://astro.build). It is a static site: no backend, no CMS. Resume text
lives in one data file, and each project is a Markdown/MDX file in its own folder.

## Quick start

Requires Node.js 22.23 or newer (24 LTS recommended).

```bash
npm install        # once
npm run dev        # local preview at http://localhost:4321/resume/
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run check      # type-check pages, components and project front matter
```

## Where things live

```
src/
  data/resume.ts            All resume content (profile, experience, skills, education, publication)
  content/projects/         One folder per project
    project-template/       The placeholder project (index.mdx + images)
  content.config.ts         The fields a project can have
  pages/
    index.astro             Resume page
    projects/index.astro    Project list
    projects/[slug].astro   Project page template
  components/               Reusable pieces (folder cards, tags, spec plates, section titles)
    mdx/                    Blocks you can use inside a write-up: Figure, Demo, Callout
  styles/
    tokens.css              Colours, fonts, type scale, spacing: change the look here
    global.css              Base styles
    prose.css               Styles for project write-ups (headings, code, tables)
  layouts/Base.astro        Page shell: tabs, folder, footer
public/                     Files copied as-is (favicon, static demos)
.github/workflows/deploy.yml  Builds and publishes to GitHub Pages on every push to main
```

## Editing the resume

Open `src/data/resume.ts` and change the text. Inside any string you can use:

- `**bold**` for a highlighted phrase
- `*italic*`
- `[link text](https://example.com)`

To add a job, copy one of the objects in the `experience` list. Use `highlights` for a plain list
of bullets, or `streams` to group bullets under sub-headings.

## Adding a project

1. Copy `src/content/projects/project-template/` and rename the copy. The folder name becomes the
   address, so `fraud-graph-rag/` is published at `/projects/fraud-graph-rag/`.
2. Edit the fields at the top of `index.mdx`:

   | Field | Required | What it does |
   | --- | --- | --- |
   | `title` | yes | Project name |
   | `summary` | yes | One or two sentences, shown on the card and under the title |
   | `date` | yes | `YYYY-MM-DD`; newest projects are listed first |
   | `status` | no | `complete` (default), `in-progress`, `archived` or `template` |
   | `topics` | no | Broad areas, e.g. `[Agentic AI, RAG]` |
   | `stack` | no | Tools and frameworks, e.g. `[Python, LangGraph, FAISS]` |
   | `role` | no | e.g. `Solo project` |
   | `repo` | no | GitHub URL; adds a "View source on GitHub" button |
   | `demo` | no | Live demo URL; adds an "Open live demo" button |
   | `docs` | no | Documentation URL; adds a "Read documentation" button |
   | `cover` | no | Image in the same folder, e.g. `./cover.png` |
   | `coverAlt` | no | Description of the cover image for screen readers |
   | `featured` | no | `true` lists it first and shows it on the resume page |
   | `draft` | no | `true` shows it in `npm run dev` only |

3. Write the page below the front matter in Markdown. `##` headings become the "On this page"
   list. Change `status` from `template` so the placeholder notice goes away.
4. Run `npm run dev` to check it, then commit and push.

A plain `index.md` works as well if you don't need the blocks below.

### Images, diagrams and charts

Put image files in the project's folder and reference them with a relative path. Astro resizes
and optimises them at build time.

```mdx
![Confusion matrix for the final model](./confusion-matrix.png)

<Figure caption="Retrieval pipeline. Captions are numbered automatically.">

![Diagram of the retrieval pipeline](./pipeline.png)

</Figure>
```

Keep the blank lines inside `<Figure>`.

### Code and tables

Fenced code blocks are syntax-highlighted; add the language after the opening fence
(` ```python `). Standard Markdown tables are styled and scroll sideways on small screens.

### Callouts

```mdx
<Callout title="Limitation">Only evaluated on English-language documents.</Callout>
```

### Live demos

A project can link to a demo, embed one, or both.

- **Link:** set `demo:` in the front matter.
- **Embed a hosted app** (Streamlit, Gradio, Hugging Face Spaces and so on):

  ```mdx
  <Demo src="https://your-app.streamlit.app/?embed=true" title="Ask the agent" height={640} />
  ```

- **Embed a static demo** that lives in this repository: put it in `public/demos/<name>/` with an
  `index.html`, then use `<Demo src="/demos/<name>/" />`.

`<Demo />` with no `src` shows an empty frame, which is handy while the demo is still being built.

### How the four parts of a project fit together

| Part | Where it lives | How the site points to it |
| --- | --- | --- |
| Source code | Its own GitHub repository | `repo:` |
| Documentation | The repository README, or a docs site | `docs:` |
| Write-up | `src/content/projects/<name>/index.mdx` | The page itself |
| Live demo | Hosted elsewhere, or `public/demos/<name>/` | `demo:` and/or `<Demo />` |

### Removing the placeholder

Delete `src/content/projects/project-template/`. If you would rather keep it as a starting point
without publishing it, set `draft: true` in its front matter.

## Changing the design

`src/styles/tokens.css` holds every colour, typeface and spacing step. Changing a value there
changes it everywhere.

The site has a light and a dark mode, switched with the button in the top right. It follows the
visitor's system setting on a first visit and remembers their choice after that. Dark-mode colours
are the `:root[data-theme='dark']` block in the same file. The "stationery" colours at the top
(tabs, tape, project folders) stay the same in both modes.

Fonts are installed from npm (`@fontsource/*`) and served from the site
itself, so there are no requests to Google Fonts.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages.

**One-time setup:** in the repository on GitHub, go to Settings, then Pages, and set
"Build and deployment" Source to **GitHub Actions**. (The previous site was served straight from
the branch; this one needs the build step.)

The site is configured for `https://pearlgpaul.github.io/resume/`. If you move it to a custom
domain or rename the repository, update `site` and `base` in `astro.config.mjs`.
