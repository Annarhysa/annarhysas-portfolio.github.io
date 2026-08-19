import { useLanguage } from '../context/LanguageContext';
import ScrollArrow from './ScrollArrow';

export default function About() {
  const { content, t } = useLanguage();
  const { profile, skills } = content;
  const highlightSkills = [...skills.aiMl.slice(0, 4), ...skills.toolsDevOps.slice(0, 5)];

  return (
    <section id="about" className="section">
      <header className="section__header">
        <span className="section__label">{t.about.label}</span>
        <h2 className="section__title">{t.about.title}</h2>
      </header>

      <div className="summary-grid">
        <div className="summary-col">
          <p className="drop-cap">{profile.about}</p>
        </div>
        <div className="summary-rule" />
        <div className="summary-right">
          <p className="summary-tagline">{profile.tagline}</p>
          <div className="pill-row">
            {highlightSkills.map((skill, i) => (
              <span key={skill} className={`pill ${i === 0 ? 'red' : ''}`}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <ScrollArrow currentId="about" />
    </section>
  );
}
