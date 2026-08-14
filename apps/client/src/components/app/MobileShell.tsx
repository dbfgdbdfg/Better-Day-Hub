import type { ReactNode } from "react";
import {
  BookOpen,
  CalendarDays,
  Home,
  MapPin,
  UserRound,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { to: "/", label: "Home", icon: Home },
  { to: "/track", label: "Track", icon: CalendarDays },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/store", label: "Store", icon: MapPin },
  { to: "/profile", label: "Profile", icon: UserRound },
];

const routeTitles: Record<string, { eyebrow: string; title: string }> = {
  "/": { eyebrow: "Thursday, 20 August", title: "Good afternoon, Maya" },
  "/track": { eyebrow: "Cycle day 23", title: "Your cycle" },
  "/learn": { eyebrow: "Better health library", title: "Learn with confidence" },
  "/store": { eyebrow: "Better Day Points", title: "Find relief nearby" },
  "/profile": { eyebrow: "Your account", title: "Profile & settings" },
};

export default function MobileShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const current = routeTitles[location.pathname] ?? routeTitles["/"];

  return (
    <div className="app-stage">
      <main className="phone-shell">
        <div className="status-bar" aria-hidden="true">
          <span>9:41</span>
          <span className="status-icons">
            <span className="signal-bars" />
            <span className="wifi-dot" />
            <span className="battery" />
          </span>
        </div>

        <header className="app-header">
          <div>
            <p className="app-eyebrow">{current.eyebrow}</p>
            <h1>{current.title}</h1>
          </div>
          <button className="avatar-button" aria-label="Open profile">
            <span>M</span>
            <span className="online-dot" />
          </button>
        </header>

        <div className="app-content">{children}</div>

        <nav className="bottom-nav" aria-label="Primary navigation">
          {navigation.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <span className="nav-icon">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </main>
    </div>
  );
}
