import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { allSongs } from "../lib/songs";

export function Search() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return [];
    return allSongs
      .map((s) => {
        const titleHit = s.title.toLowerCase().includes(query);
        const lyricsHit = s.transcription.toLowerCase().includes(query);
        const categoryHit = s.category.toLowerCase().includes(query);
        const score = (titleHit ? 3 : 0) + (categoryHit ? 1 : 0) + (lyricsHit ? 1 : 0);
        return { song: s, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50);
  }, [query]);

  return (
    <div>
      <header className="page-header">
        <h1>Search</h1>
      </header>
      <input
        type="search"
        autoFocus
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search titles, lyrics, categories…"
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          fontFamily: "inherit",
          fontSize: "1rem",
          background: "var(--paper-deep)",
          border: "1px solid var(--rule)",
          borderRadius: "2px",
          color: "var(--ink)",
          marginBottom: "1.5rem",
        }}
      />

      {query && results.length === 0 && (
        <p className="muted">No matches for "{q}".</p>
      )}

      {results.length > 0 && (
        <ul className="song-list">
          {results.map(({ song }) => (
            <li key={song.slug} className="song-list__item">
              <Link to={`/song/${song.slug}`} className="song-list__link">
                <span className="song-list__page">p. {song.page}</span>
                <span className="song-list__title">{song.title}</span>
                <span className="song-list__category">{song.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
