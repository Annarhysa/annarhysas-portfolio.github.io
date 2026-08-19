import { useLanguage } from '../context/LanguageContext';
import ScrollArrow from './ScrollArrow';

export default function Education() {
  const { content, t } = useLanguage();
  const { education } = content;

  return (
    <section id="education" className="section">
      <header className="section__header">
        <span className="section__label">{t.education.label}</span>
        <h2 className="section__title">{t.education.title}</h2>
      </header>

      <div className="education-list">
        {education.map((entry) => (
          <div key={entry.degree} className="education-card">
            <div className="education-card__main">
              <h3>{entry.degree}</h3>
              <p className="education-card__school">{entry.school}</p>
              {entry.cgpa && (
                <span className="education-card__cgpa">{t.education.cgpa}: {entry.cgpa}</span>
              )}
            </div>

            <div className="education-card__details">
              {entry.achievements.length > 0 && (
                <div>
                  <h4>{t.education.achievements}</h4>
                  <ul>
                    {entry.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={entry.achievements.length === 0 ? 'education-card__courses--full' : ''}>
                <h4>{t.education.keyCourses}</h4>
                <div className="tag-list">
                  {entry.courses.map((course) => (
                    <span key={course} className="tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScrollArrow currentId="education" />
    </section>
  );
}
