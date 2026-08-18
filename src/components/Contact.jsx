import { profile } from '../data/profile';

const contactItems = [
  {
    icon: '📍',
    label: 'Location',
    value: profile.location,
    href: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: '✉️',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: profile.links.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <header className="section__header">
        <span className="section__label">Get in Touch</span>
        <h2 className="section__title">Contact Me</h2>
        <p className="section__subtitle">
          Let's connect to discuss AI, cloud engineering, or collaboration opportunities.
        </p>
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
          Let's Talk
        </a>
        <a href={profile.links.github} className="btn btn--outline" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
