import { useState } from 'react';
import { company, navLinks } from '../../data/company';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#top" className="logo">
          <span className="logo__mark wood wood--walnut" />
          {company.name}
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={company.phoneHref} className="header__phone">{company.phone}</a>
          <a href="#quote" className="btn btn--primary header__cta">Free Quote</a>
          <button
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
