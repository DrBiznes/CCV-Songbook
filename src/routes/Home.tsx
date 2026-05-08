import { Link } from "react-router-dom";
import { Ornament } from "../components/Ornament";
import { allSongs } from "../lib/songs";

export function Home() {
  const random = allSongs[Math.floor(Math.random() * allSongs.length)];
  return (
    <div className="home">
      <p className="eyebrow">Camp Cherry Valley</p>
      <h1 className="home__title">Songbook</h1>
      <p className="home__sub muted">A digital edition of the 1923 collection.</p>
      <Ornament variant="fleuron" />
      <div className="home__cta">
        <Link to="/songs">Browse all songs</Link>
        <Link to="/categories">By category</Link>
        {random && <Link to={`/song/${random.slug}`}>Random song</Link>}
        <Link to="/about">About this book</Link>
      </div>
    </div>
  );
}
