import { useState } from 'react';
import { profile } from '../data/profile';

const baseUrl = import.meta.env.BASE_URL;

export default function About() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollDown = () => {
    setIsScrolling(true);
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => setIsScrolling(false), 260);
  };

  return (
    <section id="about" className="section section--about">
      <div className="container about__container">
        <div className="about__paper">
          <div className="about__layout">
            <aside className="about__portrait">
              <div className="about__portrait-frame">
                <img src={`${baseUrl}images/about.png`} alt={profile.name} className="about__portrait-image" />
              </div>
            </aside>

            <div className="about__content">
              <span className="section__label">About Me</span>
              <h2 className="section__title">The Engineer Who Asks One More Question</h2>
              <p className="about__text">{profile.about}</p>

              <div className="about__stats">
                {profile.stats.map(({ value, label }) => (
                  <div key={label} className="stat-card">
                    <span className="stat-card__value">{value}</span>
                    <span className="stat-card__label">{label}</span>
                  </div>
                ))}
              </div>

              <ul className="about__info">
                <li><strong>Name</strong><span>{profile.name}</span></li>
                <li><strong>Location</strong><span>{profile.location}</span></li>
                <li><strong>Email</strong><span><a href={`mailto:${profile.email}`}>{profile.email}</a></span></li>
                <li><strong>Phone</strong><span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></span></li>
              </ul>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`about__scroll ${isScrolling ? 'about__scroll--active' : ''}`}
          onClick={handleScrollDown}
          aria-label="Scroll to Experience section"
        >
          <span className="about__scroll-circle" aria-hidden="true">
            <span className="about__scroll-arrow">↓</span>
          </span>
        </button>
      </div>
    </section>
  );
}
