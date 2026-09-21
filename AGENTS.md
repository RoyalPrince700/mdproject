# Agent instructions — mdproject

## About this platform

General **document and presentation library** for Accessible Publishers Limited and related work — proposals, reports, letters, slide decks, DM assignments, and more.

**Do not assume the Cursor user is Gbadega Adedapo.** That name appears only inside specific seed documents (DBA preliminary defense candidate; MD/CEO signatory on some proposals). New documents should use the author or signatory named in the user's brief.

## Digital marketing course (DM)

Also used for **digital marketing (DM) coursework** — assignments, reports, class activities, and campaign plans.

- The user is training to become **Chief Digital Marketer** for Accessible Publishers Limited and subsidiaries (Oxygen FM Ibadan, Smipay, Best Technology, SmartEdu Hub).
- **DM always means Digital Marketing** in this project.
- **Class notes and tutor material:** `dm.md` (update when new classes are added).
- **Persistent AI context:** `.cursor/rules/` (syncs via git to other machines).

When the user asks for an assignment or report, default to a plain **`document`** (not SMEH proposal layout) unless they request otherwise.

## Creating new documents from pasted text

**Default:** treat every new document as a **plain Word-style document**, not an SMEH proposal.

When the user pastes content and asks to create a document (DOCX/PPTX):

1. Add a seed file under `src/data/` with `meta.kind: 'document'` and `meta.editorView: 'document'`.
2. Use a simple cover: document title, optional subtitle, organisation, author, date.
3. **Do not** add SMEH branding, SmartEdu Hub banner, cover letter, recipient blocks, or watermark unless the user **explicitly** asks for the SMEH proposal layout.

## When to use SMEH proposal layout

Use `meta.kind: 'proposal'` **only** when the user clearly requests:

- SMEH layout / SmartEdu Hub proposal format
- A proposal to a bank, state government, or partner using the standard SmartEdu Hub template

SMEH proposals include: SmartEdu Hub cover banner, “PROPOSAL FOR” label, recipient/submitted-by table, optional cover letter, and watermark on export.

## Document kinds

| `meta.kind`     | Use for                                      |
|-----------------|----------------------------------------------|
| `document`      | General reports, frameworks, memos (default) |
| `proposal`      | SmartEdu Hub / SMEH partner proposals only   |
| `presentation`  | Slide decks (e.g. doctoral defense)          |

## Registration checklist

After adding a seed document:

1. Export constants and state from `src/data/<name>.ts`
2. Register in `src/store/libraryStore.ts` (`SEED_CATALOG`, `seedLibrary`, exports)
3. Add restore button in `src/components/library/DocumentsHome.tsx` if it is a catalog template

## Export behaviour

- **`document`**: plain cover, no watermark, section-based DOCX; brand footer on PPTX
- **`proposal`**: SMEH cover + letter + watermark; SmartEdu Hub styling
- **`presentation`**: defense deck layout; Westcliff branding
