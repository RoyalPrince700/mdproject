# Documents — mdproject

Browser-based document and presentation editor for proposals, reports, letters, slide decks, and assignments. Export to **DOCX** or **PPTX**.

Built for **Accessible Publishers Limited** and related work (SmartEdu Hub proposals, company documents, digital marketing assignments, and more).

## Features

- Document library with starter templates (proposals, reports, presentations)
- Edit in Word-style document view or slide view
- Add / delete / reorder sections or slides
- Edits persist in `localStorage` (restore templates from the library home)
- Fullscreen Present mode for slide decks (← → Esc)
- Download as Word (`.docx`) or PowerPoint (`.pptx`)

## Run

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project notes

- **`AGENTS.md`** — rules for creating and registering new documents
- **`dm.md`** — digital marketing course notes
- **`.cursor/rules/`** — persistent AI context (sync via git)

The preliminary DBA defense deck is one catalog template; the platform is not limited to that use case.
