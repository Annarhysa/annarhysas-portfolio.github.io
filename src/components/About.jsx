import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <header className="section__header">
          <span className="section__label">About Me</span>
          <h2 className="section__title">Who I Am</h2>
        </header>

        <div className="about__grid">
          <div className="about__content">
            <p className="about__text">{profile.about}</p>

            <ul className="about__info">
              <li><strong>Name</strong><span>{profile.name}</span></li>
              <li><strong>Location</strong><span>{profile.location}</span></li>
              <li><strong>Email</strong><span><a href={`mailto:${profile.email}`}>{profile.email}</a></span></li>
              <li><strong>Phone</strong><span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></span></li>
            </ul>
          </div>

          <div className="about__stats">
            {profile.stats.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <span className="stat-card__value">{value}</span>
                <span className="stat-card__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
