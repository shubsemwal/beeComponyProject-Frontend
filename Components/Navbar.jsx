import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Home", dropdown: ["Homepage", "Landing Page", "Portfolio"] },
  { label: "About Us" },
  { label: "Services", dropdown: ["SEO", "Social Media", "Web Design", "Content Marketing"] },
  { label: "Cyber Security", dropdown: ["Penetration Testing", "Security Audits", "Compliance"] },
  { label: "Career" },
  { label: "Blog", dropdown: ["Articles", "Case Studies", "News"] },
  { label: "Contact" },
];

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="nav-item"
      onMouseEnter={() => item.dropdown && setOpen(true)}
      onMouseLeave={() => item.dropdown && setOpen(false)}
    >
      <a href="#" className="nav-link">
        {item.label}
        {item.dropdown && (
          <svg
            className={`chevron ${open ? "open" : ""}`}
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 4l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </a>

      {item.dropdown && (
        <div className={`dropdown ${open ? "dropdown--open" : ""}`}>
          {item.dropdown.map((sub) => (
            <a key={sub} href="#" className="dropdown-item">
              {sub}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="logo-text">
            Be<span className="logo-circle">O</span>nline
          </span>
          <span className="logo-tagline">GO Digital!</span>
        </a>

        {/* Desktop Nav Links — hidden on mobile */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <NavItem item={item} />
            </li>
          ))}
        </ul>

        {/* CTA — hidden on mobile */}
        <a href="#" className="navbar__cta">
          Contact Us
        </a>

        {/* Hamburger — visible on mobile only */}
        <button
          className={`navbar__hamburger ${mobileOpen ? "is-open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href="#" className="mobile-menu__link">
            {item.label}
          </a>
        ))}
        <a href="#" className="mobile-menu__cta">
          Contact Us
        </a>
      </div>
    </nav>
  );
}