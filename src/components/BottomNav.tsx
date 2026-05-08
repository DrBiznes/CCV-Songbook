import { NavLink } from "react-router-dom";

const tabs = [
  {
    to: "/songs",
    label: "Songs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h12v14a3 3 0 0 1-3 3H6" />
        <path d="M4 4v17" />
        <path d="M8 8h6M8 12h6" />
      </svg>
    ),
  },
  {
    to: "/categories",
    label: "Categories",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    to: "/search",
    label: "Search",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.5-4.5" />
      </svg>
    ),
  },
  {
    to: "/about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <circle cx="12" cy="8" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
];

export function BottomNav() {
  return (
    <nav className="tab-bar" aria-label="Primary">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) =>
            isActive ? "tab-bar__item active" : "tab-bar__item"
          }
        >
          {t.icon}
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
