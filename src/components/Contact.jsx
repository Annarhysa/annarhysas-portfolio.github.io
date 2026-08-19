import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { content, t } = useLanguage();
  const { profile } = content;

  const contactItems = [
    {
      icon: '📍',
      label: t.contact.location,
      value: profile.location,
      href: null,
    },
    {
      icon: '📞',
      label: t.contact.phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: '✉️',
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: '🔗',
      label: t.contact.linkedin,
      value: t.contact.connectLinkedin,
      href: profile.links.linkedin,
    },
  ];

  return (
    <section id="contact" className="section">
      <header className="section__header">
        <span className="section__label">{t.contact.label}</span>
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="section__subtitle">{t.contact.subtitle}</p>
      </header>

      <div className="contact-grid">
        {contactItems.map(({ icon, label, value, href }) => (
          <div key={label} className="contact-card">
            <span className="contact-card__icon" aria-hidden="true">{icon}</span>
            <h3>{label}</h3>
            {href ? (
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {value}
              </a>
            ) : (
              <p>{value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="contact-cta">
        <a href={profile.links.linkedin} className="btn btn--primary" target="_blank" rel="noreferrer">
          {t.contact.letsTalk}
        </a>
        <a href={profile.links.github} className="btn btn--outline" target="_blank" rel="noreferrer">
          {t.contact.github}
        </a>
      </div>
    </section>
  );
}
