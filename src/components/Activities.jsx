import { activities } from '../data/profile';

export default function Activities() {
  return (
    <section id="activities" className="section">
      <div className="container">
        <header className="section__header">
          <span className="section__label">Community</span>
          <h2 className="section__title">Activities & Volunteering</h2>
        </header>

        <ul className="activities-list">
          {activities.map((item) => (
            <li key={item} className="activity-item">
              <span className="activity-item__dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
