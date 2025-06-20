import { useState } from "react";
import "./Nav.css";
import { useLocation } from "react-router";
import { Cross as Hamburger } from "hamburger-react";

export default function Nav({ name }: { name: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((o) => !o);

  const { hash } = useLocation();

  const links = [
    { to: "#AboutMe", label: "About Me" },
    { to: "#Work", label: "Work" },
    { to: "#Services", label: "Services" },
    { to: "#Profiles", label: "Profiles" },
  ];

  return (
    <>
      <nav className={menuOpen ? "nav nav--open" : "nav"}>
        <a href="/">
          <span className="nav__brand">{name}</span>
        </a>
        <div className="flex items-center justify-between gap-8 nav-links">
          {useLocation().pathname !== "/blogs" && (
            <a
              href="/blogs"
              className="nav__blogs-link !text-gray-400 hover:!text-gray-500"
            >
              Blogs
            </a>
          )}

          {/* WhatsApp button – hidden on small screens */}
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

        {/* hamburger – hidden on large screens */}

        <button
          className="hamburger-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <Hamburger size={40} />
        </button>
      </nav>

      {/* full-screen overlay menu */}
      <div
        className={menuOpen ? "nav-overlay nav-overlay--open" : "nav-overlay"}
        onClick={toggleMenu}
      >
        <ul className="nav-overlay__list">
          {links.map(({ to, label }) => {
            const isHashActive = hash === to;
            return (
              <li key={to}>
                <a
                  href={to}
                  className={
                    isHashActive
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
