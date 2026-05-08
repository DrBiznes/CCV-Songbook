import { Ornament } from "../components/Ornament";

export function About() {
  return (
    <div>
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1>The Camp Cherry Valley Songbook</h1>
      </header>
      <p>
        A digital edition of the 1923 Camp Cherry Valley songbook. The text has been
        transcribed from photographs of the original pages.
      </p>
      <p>
        Songs are organized by their original page order, with categories drawn from the
        printed sections of the book.
      </p>
      <Ornament variant="trefoil" />
      <p className="muted" style={{ fontSize: "0.85rem" }}>
        Transcriptions are drafts and may contain errors. If something looks wrong, the
        original page is the source of truth.
      </p>
    </div>
  );
}
