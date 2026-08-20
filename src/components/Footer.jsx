import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { content, t } = useLanguage();
  const { profile, navLinks } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home">
            Annarhysa<span className="accent">.</span>
          </a>
          <p>{profile.tagline}</p>
        </div>

        <nav className="footer__nav">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="footer__social">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
          <a href={`mailto:${profile.email}`} aria-label="Email">Email</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} {profile.name}. {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
