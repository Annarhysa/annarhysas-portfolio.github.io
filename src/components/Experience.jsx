import { experience } from '../data/profile';

function formatPeriod(period) {
  return period.replace(/\s*[–-]\s*/g, ' TO ').toUpperCase();
}

function getCity(location) {
  return location.replace(/\s*\([^)]*\)/, '').trim();
}

const experienceEntries = experience.flatMap((item) =>
  item.roles.map((role) => ({
    ...role,
    company: item.company,
    city: getCity(item.location),
  }))
);

export default function Experience() {
  return (
    <section id="experience" className="section section--alt experience-section">
      <div className="container experience-section__container">
        <header className="experience-section__header">
          <h2 className="experience-section__title">Career on Record</h2>
          <p className="experience-section__subtitle">
            {experienceEntries.length} roles. One standard.
          </p>
        </header>

        <div className="experience-record">
          {experienceEntries.map((entry) => (
            <article
              key={`${entry.company}-${entry.title}-${entry.period}`}
              className="experience-record__entry"
            >
              <p className="experience-record__meta">
                {entry.shortTitle} — {formatPeriod(entry.period)}
              </p>

              <h3 className="experience-record__company">
                {entry.company}, {entry.city}
              </h3>

              <p className="experience-record__categories">
                {entry.categories.join(' • ')}
              </p>

              <div className="experience-record__body">
                {entry.highlights.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {entry.skills?.length > 0 && (
                <div className="experience-record__tags">
                  {entry.skills.map((skill) => (
                    <span key={skill} className="experience-record__tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
