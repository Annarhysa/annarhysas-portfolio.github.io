import { useState, useEffect } from 'react';
import { navLinks } from '../data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleNavClick}>
          Annarhysa<span className="accent">.</span>
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="navbar__link" onClick={handleNavClick}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
