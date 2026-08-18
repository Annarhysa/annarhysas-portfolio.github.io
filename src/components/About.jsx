import { profile, skills } from '../data/profile';
import ScrollArrow from './ScrollArrow';

const highlightSkills = [...skills.aiMl.slice(0, 4), ...skills.toolsDevOps.slice(0, 5)];

export default function About() {
  return (
    <section id="about" className="section">
      <header className="section__header">
        <span className="section__label">About</span>
        <h2 className="section__title">Profile</h2>
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
