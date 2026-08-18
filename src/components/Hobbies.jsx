import { hobbies } from '../data/profile';
import ScrollArrow from './ScrollArrow';

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <header className="section__header">
        <span className="section__label">Personal</span>
        <h2 className="section__title">Hobbies & Interests</h2>
      </header>

      <div className="hobbies-grid">
        {hobbies.map((hobby) => (
          <div key={hobby.name} className="hobby-card">
            <div className="hobby-card__icon">{hobby.icon}</div>
            <h3 className="hobby-card__name">{hobby.name}</h3>
            <p className="hobby-card__description">{hobby.description}</p>
            {hobby.link && (
              <a 
                href={hobby.link} 
                target="_blank" 
                rel="noreferrer"
                className="hobby-card__link"
              >
                View Playlist →
              </a>
            )}
          </div>
        ))}
      </div>

      <ScrollArrow currentId="hobbies" />
    </section>
  );
}
