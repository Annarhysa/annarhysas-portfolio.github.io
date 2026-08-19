import { useLanguage } from '../context/LanguageContext';
import ScrollArrow from './ScrollArrow';

function formatPeriod(period) {
  return period.replace(/\s*[–-]\s*/g, ' – ');
}

function getCity(location) {
  return location.replace(/\s*\([^)]*\)/, '').trim();
}

export default function Experience() {
  const { content, t } = useLanguage();
  const { experience } = content;

  const experienceEntries = experience.flatMap((item) =>
    item.roles.map((role) => ({
      ...role,
      company: item.company,
      city: getCity(item.location),
    }))
  );

  return (
    <section id="experience" className="section">
      <header className="section__header">
        <span className="section__label">{t.experience.label}</span>
        <h2 className="section__title">{t.experience.title}</h2>
      </header>

      <div className="experience-record">
        {experienceEntries.map((entry) => (
          <div key={`${entry.company}-${entry.title}-${entry.period}`} className="experience-record__entry">
            <h3 className="experience-record__company">{entry.company}</h3>
            <p className="experience-record__title">{entry.title}</p>
            <div className="experience-record__meta">
              <span className="experience-record__period">{formatPeriod(entry.period).toUpperCase()}</span>
              <span className="experience-record__location">{entry.city}</span>
            </div>
            <ul className="experience-record__highlights">
              {entry.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ScrollArrow currentId="experience" />
    </section>
  );
}
