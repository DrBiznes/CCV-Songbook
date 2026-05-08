import { Link, useLocation, useNavigate } from "react-router-dom";
import { allSongs } from "../lib/songs";

export function FloatingNav() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") return null;

  const goRandom = () => {
    const currentSlug = location.pathname.startsWith("/song/")
      ? location.pathname.slice("/song/".length)
      : null;
    const pool = currentSlug
      ? allSongs.filter((s) => s.slug !== currentSlug)
      : allSongs;
    if (pool.length === 0) return;
    const next = pool[Math.floor(Math.random() * pool.length)];
    navigate(`/song/${next.slug}`);
  };

  return (
    <nav className="floating-nav" aria-label="Quick navigation">
      <Link to="/" className="floating-nav__btn" aria-label="Home">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10v10h14V10" />
        </svg>
      </Link>
      <Link to="/search" className="floating-nav__btn" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.5-4.5" />
        </svg>
      </Link>
      <button
        type="button"
        onClick={goRandom}
        className="floating-nav__btn"
        aria-label="Random song"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <circle cx="9" cy="9" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="9" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="9" cy="15" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="15" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </button>
    </nav>
  );
}
