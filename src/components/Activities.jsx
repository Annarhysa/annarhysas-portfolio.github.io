import { activities } from '../data/profile';
import ScrollArrow from './ScrollArrow';

export default function Activities() {
  return (
    <section id="activities" className="section">
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

      <ScrollArrow currentId="activities" />
    </section>
  );
}
