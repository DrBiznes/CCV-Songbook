import { NavLink, Link } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          Camp Cherry Valley
          <span className="site-header__brand-sub">Songbook · 1923</span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          <NavLink to="/songs" className={({ isActive }) => (isActive ? "active" : "")}>
            Songs
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
            Categories
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>
            Search
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
