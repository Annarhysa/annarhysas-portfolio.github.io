import { useLanguage } from '../context/LanguageContext';
import ScrollArrow from './ScrollArrow';

export default function Projects() {
  const { content, t } = useLanguage();
  const { projects } = content;

  return (
    <section id="projects" className="section">
      <header className="section__header">
        <span className="section__label">{t.projects.label}</span>
        <h2 className="section__title">{t.projects.title}</h2>
      </header>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.name} className="project-item">
            <div className="project-item__image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-item__content">
              <div className="project-item__head">
                <div className="project-item__tag">{project.stack[0]}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-link project-item__link"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  ↗
                </a>
              </div>
              <h3 className="project-item__name">{project.name}</h3>
              <p className="project-item__description">{project.description}</p>
              <div className="project-item__tags">
                {project.stack.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScrollArrow currentId="projects" />
    </section>
  );
}
