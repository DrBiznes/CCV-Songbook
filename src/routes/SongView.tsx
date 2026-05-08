import { Link, useParams } from "react-router-dom";
import { allSongs, categorySlug, lyricsWithoutTitle, songsBySlug } from "../lib/songs";
import { Ornament } from "../components/Ornament";

export function SongView() {
  const { slug = "" } = useParams();
  const song = songsBySlug[slug];

  if (!song) {
    return (
      <div>
        <Link to="/songs" className="back-link">
          ← All songs
        </Link>
        <h1>Song not found</h1>
        <p className="muted">The song "{slug}" isn't in this edition.</p>
      </div>
    );
  }

  const idx = allSongs.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? allSongs[idx - 1] : null;
  const next = idx >= 0 && idx < allSongs.length - 1 ? allSongs[idx + 1] : null;

  return (
    <article className="song">
      <Link to="/songs" className="back-link">
        ← All songs
      </Link>
      <p className="eyebrow song__category">
        <Link to={`/category/${categorySlug(song.category)}`}>{song.category}</Link>
      </p>
      <h1 className="song__title">
        {song.title}
        <span className="song__page">p. {song.page}</span>
      </h1>

      <pre className="song__lyrics">{lyricsWithoutTitle(song)}</pre>

      {song.audio_url && (
        <audio
          controls
          preload="none"
          src={song.audio_url}
          style={{ width: "100%", marginBottom: "1.5rem" }}
        />
      )}

      <Ornament variant="asterism" />

      <nav className="song__nav" aria-label="Adjacent songs">
        {prev ? (
          <Link to={`/song/${prev.slug}`}>← {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/song/${next.slug}`}>{next.title} →</Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
