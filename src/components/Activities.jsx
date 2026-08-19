import { useLanguage } from '../context/LanguageContext';
import ScrollArrow from './ScrollArrow';

export default function Activities() {
  const { content, t } = useLanguage();
  const { activities } = content;

  return (
    <section id="activities" className="section">
      <header className="section__header">
        <span className="section__label">{t.activities.label}</span>
        <h2 className="section__title">{t.activities.title}</h2>
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
