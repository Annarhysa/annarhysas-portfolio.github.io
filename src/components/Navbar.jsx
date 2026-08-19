import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, content, t } = useLanguage();
  const { profile, navLinks } = content;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const dropdownRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    window.__setTheme?.(next);
    setTheme(next);
  }

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <span className="navbar__location">{profile.location}</span>

        <div className="navbar__center">
          {scrolled ? (
            <a href="#home" className="navbar__name">{profile.name}</a>
          ) : (
            <span className="navbar__pill">{t.navPill}</span>
          )}
        </div>

        <div className="navbar__right">
          <div className="dropdown" ref={dropdownRef}>
            <button
              type="button"
              className="dropdown__trigger"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {t.sectionsTrigger}
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <nav className="dropdown__menu">
                {navLinks.map(({ href, label }) => (
                  <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
                ))}
              </nav>
            )}
          </div>

          <div className="dropdown dropdown--lang" ref={langRef}>
            <button
              type="button"
              className="dropdown__trigger dropdown__trigger--icon"
              aria-expanded={langOpen}
              aria-label="Change language"
              onClick={() => setLangOpen((v) => !v)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9Z" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <span>{t.languageTrigger}</span>
            </button>
            {langOpen && (
              <nav className="dropdown__menu dropdown__menu--lang">
                {Object.entries(t.languageOptions).map(([code, label]) => (
                  <button
                    key={code}
                    type="button"
                    className={code === language ? 'is-active' : ''}
                    onClick={() => { setLanguage(code); setLangOpen(false); }}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            )}
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.switchToLight : t.switchToDark}
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
