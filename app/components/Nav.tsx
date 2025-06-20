import { useState } from "react";
import { useLocation } from "react-router";
import { Cross as Hamburger } from "hamburger-react";
import "./Nav.css";

export default function Nav({ name }: { name: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((o) => !o);

  const { pathname, hash } = useLocation();

  // the “home” page hash-links
  const rootLinks = [
    { to: "#AboutMe", label: "About Me" },
    { to: "#Work", label: "Work" },
    { to: "#Services", label: "Services" },
    { to: "/blogs", label: "Blogs" },
    { to: "#Profiles", label: "Contact" },
  ];

  // shown on any other route
  const otherLinks = [
    { to: "/", label: "Home" },
    { to: "/blogs", label: "Blogs" },
    { to: "/#Profiles", label: "Contact" },
  ];

  // choose which set to show
  const links = pathname === "/" ? rootLinks : otherLinks;

  return (
    <>
      <nav className={menuOpen ? "nav nav--open" : "nav"}>
        <a href="/">
          <span className="nav__brand">{name}</span>
        </a>

        <div className="flex items-center justify-between gap-8 nav-links">
          {pathname !== "/blogs" && (
            <a
              href="/blogs"
              className="nav__blogs-link !text-gray-400 hover:!text-gray-500"
            >
              Blogs
            </a>
          )}
          <a
            href="https://wa.me/923134549126"
            target="_blank"
            rel="noopener noreferrer"
            className="status-button whatsapp-btn"
          >
            <span className="status-indicator" />
            <span className="status-text">Chat With Me</span>
          </a>
        </div>

        <button
          className="hamburger-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <Hamburger size={40} toggled={menuOpen} />
        </button>
      </nav>

      {/* full-screen overlay menu */}
      <div
        className={menuOpen ? "nav-overlay nav-overlay--open" : "nav-overlay"}
        onClick={toggleMenu}
      >
        <ul className="nav-overlay__list">
          {links.map(({ to, label }) => {
            // decide active state: hash vs. pathname
            const isActive = to.startsWith("#") ? hash === to : pathname === to;

            return (
              <li key={to}>
                <a
                  href={to}
                  className={
                    isActive
                      ? "nav-overlay__link nav-overlay__link--active"
                      : "nav-overlay__link"
                  }
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
