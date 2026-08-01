import { skills } from '../data/profile';

const skillGroups = [
  { key: 'programming', label: 'Programming & SDE', tagClass: 'tag--tech' },
  { key: 'aiMl', label: 'AI/ML & Data', tagClass: 'tag--tech' },
  { key: 'toolsDevOps', label: 'Tools, Frameworks & DevOps', tagClass: 'tag--tech' },
  { key: 'soft', label: 'Soft Skills', tagClass: 'tag--soft' },
  { key: 'languages', label: 'Languages', tagClass: 'tag--lang' },
];

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <span className="section__label">Expertise</span>
          <h2 className="section__title">Skills & Languages</h2>
        </header>

        <div className="skills-grid">
          {skillGroups.map(({ key, label, tagClass }) => (
            <div key={key} className="skills-group">
              <h3>{label}</h3>
              <div className="tag-list">
                {skills[key].map((skill) => (
                  <span key={skill} className={`tag ${tagClass}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
