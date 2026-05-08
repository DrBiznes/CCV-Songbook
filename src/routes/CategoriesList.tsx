import { Link } from "react-router-dom";
import { categories, categorySlug, songsInCategory } from "../lib/songs";

export function CategoriesList() {
  const cats = categories();
  return (
    <div>
      <header className="page-header">
        <p className="eyebrow">{cats.length} categories</p>
        <h1>Categories</h1>
      </header>
      <ul className="song-list">
        {cats.map((c) => {
          const count = songsInCategory(c).length;
          return (
            <li key={c} className="song-list__item">
              <Link to={`/category/${categorySlug(c)}`} className="song-list__link">
                <span className="song-list__title">{c}</span>
                <span className="song-list__category">{count} songs</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
