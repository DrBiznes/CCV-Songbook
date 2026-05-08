import { Link } from "react-router-dom";
import { allSongs, songsAlphabetical } from "../lib/songs";
import { useState } from "react";

type SortMode = "page" | "title";

export function SongsList() {
  const [sort, setSort] = useState<SortMode>("page");
  const songs = sort === "page" ? allSongs : songsAlphabetical();

  return (
    <div>
      <header className="page-header">
        <p className="eyebrow">{songs.length} songs</p>
        <h1>All Songs</h1>
        <div style={{ display: "flex", gap: "1rem", fontSize: "0.85rem" }}>
          <button
            className={sort === "page" ? "active" : ""}
            onClick={() => setSort("page")}
            style={{
              borderBottom:
                sort === "page" ? "1px solid var(--green)" : "1px solid transparent",
              color: sort === "page" ? "var(--green)" : "var(--ink-soft)",
              padding: "0 0 2px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.78rem",
            }}
          >
            By page
          </button>
          <button
            className={sort === "title" ? "active" : ""}
            onClick={() => setSort("title")}
            style={{
              borderBottom:
                sort === "title" ? "1px solid var(--green)" : "1px solid transparent",
              color: sort === "title" ? "var(--green)" : "var(--ink-soft)",
              padding: "0 0 2px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.78rem",
            }}
          >
            A–Z
          </button>
        </div>
      </header>

      <ul className="song-list">
        {songs.map((s) => (
          <li key={s.slug} className="song-list__item">
            <Link to={`/song/${s.slug}`} className="song-list__link">
              <span className="song-list__page">p. {s.page}</span>
              <span className="song-list__title">{s.title}</span>
              <span className="song-list__category">{s.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
