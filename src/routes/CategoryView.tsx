import { Link, useParams } from "react-router-dom";
import { categoryFromSlug, songsInCategory } from "../lib/songs";

export function CategoryView() {
  const { slug = "" } = useParams();
  const category = categoryFromSlug(slug);

  if (!category) {
    return (
      <div>
        <Link to="/categories" className="back-link">
          ← Categories
        </Link>
        <h1>Category not found</h1>
      </div>
    );
  }

  const songs = songsInCategory(category);
  return (
    <div>
      <Link to="/categories" className="back-link">
        ← Categories
      </Link>
      <header className="page-header">
        <p className="eyebrow">{songs.length} songs</p>
        <h1>{category}</h1>
      </header>
      <ul className="song-list">
        {songs.map((s) => (
          <li key={s.slug} className="song-list__item">
            <Link to={`/song/${s.slug}`} className="song-list__link">
              <span className="song-list__page">p. {s.page}</span>
              <span className="song-list__title">{s.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
