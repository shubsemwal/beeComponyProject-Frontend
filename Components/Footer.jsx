import "./Footer.css";

const COMPANY_LINKS = ["About Us", "Services", "Blog"];
const SUPPORT_LINKS = ["Contact Us", "Privacy Policy", "Terms Conditions"];

const SOCIAL_ICONS = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "#",
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    svg: (
      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Col 1 — Brand */}
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="footer__logo-text">
              Be<span className="footer__logo-circle">O</span>nline
            </span>
            <span className="footer__logo-tagline">GO Digital!</span>
          </a>
          <p className="footer__brand-desc">
            Bee Online takes pride in being a valued partner, providing customized solutions
            designed to help you drive revenue and reach your goals.
          </p>
          <div className="footer__socials">
            {SOCIAL_ICONS.map((s) => (
              <a key={s.label} href={s.href} className="footer__social-link" aria-label={s.label}>
                {s.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Company */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Company</h4>
          <ul className="footer__links">
            {COMPANY_LINKS.map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Support */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Support</h4>
          <ul className="footer__links">
            {SUPPORT_LINKS.map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Subscribe */}
        <div className="footer__col footer__col--subscribe">
          <h4 className="footer__col-heading">Subscribe Now</h4>
          <div className="footer__subscribe">
            <input
              type="email"
              placeholder="Enter email address"
              className="footer__input"
            />
            <button className="footer__subscribe-btn" aria-label="Subscribe">↗</button>
          </div>
          <p className="footer__subscribe-note">
            by signing up, you agree to receive mail
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">© Copyright 2024 Beeonline</p>
        <p className="footer__address">
          📍 103, Quantum Tower, Off, Swami Vivekananda Rd, Malad West, Mumbai, Maharashtra 400064
        </p>
      </div>
    </footer>
  );
}