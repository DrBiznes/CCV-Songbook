import { Link } from "react-router-dom";
import { Ornament } from "../components/Ornament";
import { allSongs } from "../lib/songs";

export function Home() {
  const random = allSongs[Math.floor(Math.random() * allSongs.length)];
  return (
    <div className="home">
      <img src="/ccvboatlogo.svg" alt="Camp Cherry Valley" className="home__logo" />
      <h1 className="home__title">CCV Songbook</h1>
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
